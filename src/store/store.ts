import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createGPARecordSlice, GPARecordSlice } from './slices/gpaRecord'
type StoreState = GPARecordSlice

export const useAppStore = create<StoreState>()(
    devtools(
        persist(
            (...a) => ({
                ...createGPARecordSlice(...a),
            }),
            {
                name: 'gpa-calculator',
            }
        )
    )
)