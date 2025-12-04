export type JobStatus = 'idle' | 'processing' | 'done' | 'failed';

export interface Job {
  id: string;
  prompt: string;
  status: JobStatus;
  resultUrl?: string;
  error?: string;
  createdAt: any;
}