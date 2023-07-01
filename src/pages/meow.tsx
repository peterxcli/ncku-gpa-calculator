import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { calculateGPA } from '@/utils/calculate';

const GPACalculator = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [credit, setCredit] = useState(0);
  const [courses, setCourses] = useState<Course[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCourse = { name, score, credit} as Course;
    setCourses([...courses, newCourse]);
    setName('');
    setScore(0);
    setCredit(0);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          GPA Calculator
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="number"
            label="Score"
            value={score}
            onChange={(e) => setScore(+e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            type="number"
            label="Credit"
            value={credit}
            onChange={(e) => setCredit(+e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Add Course
          </Button>
        </form>
        <Button variant="contained" color="secondary" onClick={() => calculateGPA}>
          Calculate GPA
        </Button>
      </Box>
    </Container>
  );
};

export default GPACalculator;
