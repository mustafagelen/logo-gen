import React, { createContext, useContext, ReactNode } from 'react';
import { useJobGeneration } from './useJobGeneration';
import { Job, JobStatus } from '../types';

interface JobContextType {
    status: JobStatus;
    jobData: Job | null;
    startJob: (prompt: string, logoStyle: string) => Promise<void>;
    error: string | null;
    resetJob: () => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {

    const { startJob, jobData, status, error, resetJob } = useJobGeneration();

    return (
        <JobContext.Provider value={{ status, jobData, startJob, error, resetJob }}>
            {children}
        </JobContext.Provider>
    );
};

export const useJob = () => {
    const context = useContext(JobContext);
    if (context === undefined) {
        throw new Error('useJob must be used within a JobProvider');
    }
    return context;
};