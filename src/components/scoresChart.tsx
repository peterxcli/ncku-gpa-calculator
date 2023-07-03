import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { scoreToGrade } from '@/utils/calculate';

type ScoresChartProps = {
    records: YearRecord;
};

const ScoresChart: React.FC<ScoresChartProps> = ({ records }) => {
    const [data, setData] = useState<ChartData[]>([]);

    useEffect(() => {
        const transformedData: ChartData[] = [];
        for (const year in records) {
            for (const semester in records[year]) {
                let totalScore = 0;
                let totalGPA = 0;
                let totalCredits = 0;
                const semesterCourses = records[year][semester];
                for (const course of (semesterCourses || [])) {
                    totalScore += course.score;
                    totalGPA += scoreToGrade(course.score) * course.credit;
                    totalCredits += course.credit;
                }

                // Calculate average score and GPA, assuming GPA is calculated as the total GPA divided by total credits
                if (semesterCourses && semesterCourses.length > 0) {
                    transformedData.push({
                        semester: `${year} ${semester}`,
                        averageScore: totalScore / semesterCourses.length,
                        averageGPA: totalGPA / totalCredits
                    });
                }
            }
        }

        setData(transformedData);
    }, [records]);

    return (
        // <div style={{ display: "flex", justifyContent: "center", height: "100%", width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5, right: 5, left: 5, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="semester" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="averageScore" stroke="#8884d8" name="Average Score" />
                    <Line type="monotone" dataKey="averageGPA" stroke="#82ca9d" name="Average GPA" />
                </LineChart>
            </ResponsiveContainer>
        // </div>

    );
}

export default ScoresChart;
