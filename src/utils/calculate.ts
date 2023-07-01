const scoreToGrade = (score: number): number => {
    if (score >= 90) return 4.3;
    if (score >= 85) return 4.0;
    if (score >= 80) return 3.7;
    if (score >= 77) return 3.3;
    if (score >= 73) return 3.0;
    if (score >= 70) return 2.7;
    if (score >= 67) return 2.3;
    if (score >= 63) return 2.0;
    if (score >= 60) return 1.7;
    if (score >= 50) return 1.0;
    return 0;
}

export const calculateGPA = (courses: Course[]): number => {
    console.log(courses);
    let totalScore = 0;
    let totalCredit = 0;

    courses.forEach(course => {
        totalScore += scoreToGrade(course.score) * course.credit;
        totalCredit += course.credit;
    });
    console.log(totalScore, totalCredit);

    // Ensure not to divide by zero
    if (totalCredit === 0) return 0;

    return totalScore / totalCredit;
}
