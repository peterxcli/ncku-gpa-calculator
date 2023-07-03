interface Course {
    id: string;
    name: string;
    score: number;
    credit: number;
}

interface Semester {
    [key: string]: Course[];
}

interface YearRecord {
    [key: string]: Semester;
}

type ChartData = {
    semester: string;
    averageScore: number;
    averageGPA: number;
};