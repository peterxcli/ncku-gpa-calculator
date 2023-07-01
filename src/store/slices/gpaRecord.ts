import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';
import { StateCreator } from "zustand";

export interface GPARecordSlice {
    records: YearRecord;
    addCourse: (year: string, semester: string, course: Course) => void;
    updateCourse: (year: string, semester: string, id: string, newCourse: Course) => void;
    removeCourse: (year: string, semester: string, id: string) => void;
};

export const createGPARecordSlice: StateCreator<GPARecordSlice> = (set) => ({
    records: {},
    addCourse: (year, semester, course) => set((state) => {
        const yearRecord = state.records[year] ?? {};
        const semesterRecord = yearRecord[semester] ?? [];

        semesterRecord.push(course);
        yearRecord[semester] = semesterRecord;

        return {
            records: {
                ...state.records,
                [year]: yearRecord
            }
        };
    }),
    updateCourse: (year: string, semester: string, id: string, newCourse: Course) => set((state) => {
        const yearRecord = state.records[year];
        const semesterRecord = yearRecord[semester];
        const courseIndex = semesterRecord.findIndex((course) => course.id === id);

        semesterRecord[courseIndex] = newCourse;
        yearRecord[semester] = semesterRecord;

        const newRecords = {
            ...state.records,
            [year]: yearRecord,
        };

        return {
            records: newRecords,
        };
    }),
    removeCourse: (year: string, semester: string, id: string) => set((state) => {
        const yearRecord = state.records[year];
        const semesterRecord = yearRecord[semester];
        const courseIndex = semesterRecord.findIndex((course) => course.id === id);

        semesterRecord.splice(courseIndex, 1);
        yearRecord[semester] = semesterRecord;

        const newRecords = {
            ...state.records,
            [year]: yearRecord,
        };

        return {
            records: newRecords,
        };
    }
    ),
});