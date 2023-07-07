export function isCourse(obj: any): obj is Course {
    return typeof obj.id === 'string'
        && typeof obj.name === 'string'
        && typeof obj.score === 'number'
        && typeof obj.credit === 'number';
}

export function isSemester(obj: any): obj is Semester {
    if (typeof obj !== 'object' || obj === null) return false;
    return Object.values(obj).every(val => Array.isArray(val) && val.every(isCourse));
}

export function isYearRecord(obj: any): obj is YearRecord {
    if (typeof obj !== 'object' || obj === null) return false;
    return Object.values(obj).every(val => isSemester(val));
}