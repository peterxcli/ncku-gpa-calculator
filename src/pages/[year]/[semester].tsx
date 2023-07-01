import { useEffect, useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import { useRouter } from 'next/router';
import { useAppStore } from '@/store/store';
import { calculateGPA } from '@/utils/calculate';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.scss'

const CoursePage = () => {
    const router = useRouter();
    const { year, semester } = router.query;
    const [courseName, setCourseName] = useState('');
    const [score, setScore] = useState(0);
    const [credit, setCredit] = useState(0);
    const { records, addCourse, updateCourse, removeCourse } = useAppStore();
    const [gpa, setGpa] = useState(-1);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addCourse(year as string, semester as string, { id: uuidv4(), name: courseName, score, credit });
        setCourseName('');
        setScore(0);
        setCredit(0);
    };

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const year_num = parseInt(year as string);
        if (year_num <= currentYear && year_num >= currentYear - 20) {
            if (semester === 'Spring' || semester === 'Fall') {
                if (!records.hasOwnProperty(year as string)) {
                    records[year as string] = {};
                    records[year as string][semester as string] = [];
                }
                if (!records[year as string].hasOwnProperty(semester)) {
                    records[year as string][semester as string] = [];
                }
            }
        }
    }, []);

    return (
        <Container className={styles.container}>
            <h2>{year}, {semester}</h2>
            {
                records[year as string]?.[semester as string]?.map((course, index) => (
                    <div className={styles['form-group']} key={index}>
                        <TextField
                            className={styles.textfield}
                            label='Course Name'
                            value={course.name}
                            onChange={(e) => updateCourse(year as string, semester as string, course.id, { ...course, name: e.target.value })}
                        />
                        <TextField
                            className={styles.textfield}
                            label='Score'
                            value={course.score}
                            onChange={(e) => updateCourse(year as string, semester as string, course.id, { ...course, score: Number(e.target.value) })}
                            type="number"
                        />
                        <TextField
                            className={styles.textfield}
                            label='Credit'
                            value={course.credit}
                            onChange={(e) => updateCourse(year as string, semester as string, course.id, { ...course, credit: Number(e.target.value) })}
                            type="number"
                        />
                        <Button color="error" onClick={() => removeCourse(year as string, semester as string, course.id)}>Delete</Button>
                    </div>
                ))
            }
            <form onSubmit={handleSubmit} className={styles['form-group']}>
                <TextField
                    className={styles.textfield}
                    label='Course Name'
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Course Name" required
                />
                <TextField
                    className={styles.textfield}
                    label='Score'
                    value={score}
                    onChange={(e) => setScore(Number(e.target.value))}
                    placeholder="Score" required type="number"
                />
                <TextField
                    className={styles.textfield}
                    label='Credit'
                    value={credit}
                    onChange={(e) => setCredit(Number(e.target.value))}
                    placeholder="Credit"
                    required
                    type="number"
                />
                <Button type="submit">Add Course</Button>
            </form>
            <div className={styles['nav-btn']}>
                <Button
                    className={styles['ctl-btn']}
                    onClick={() => setGpa(calculateGPA(records[year as string][semester as string]))}
                    variant='contained'
                >
                    Calculate
                </Button>
                {gpa >= 0 && <h2 className={styles['ctl-btn']}>GPA: {gpa}</h2>}
                <Button
                    className={styles['ctl-btn']}
                    onClick={() => router.push('/')}
                >
                    Back
                </Button>
            </div>

            

        </Container>
    );
};

export default CoursePage;
