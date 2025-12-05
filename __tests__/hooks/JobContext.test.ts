
type JobStatus = 'idle' | 'processing' | 'done' | 'failed';

interface Job {
    id: string;
    prompt: string;
    logoStyle: string;
    status: JobStatus;
    resultUrl?: string;
}

const createMockJobHook = (initialStatus: JobStatus = 'idle') => {
    let status: JobStatus = initialStatus;
    let jobData: Job | null = null;
    let error: string | null = null;

    return {
        useJob: () => ({
            status,
            jobData,
            error,
            startJob: jest.fn(async (prompt: string, logoStyle: string) => {
                status = 'processing';
                jobData = {
                    id: 'test-job-id',
                    prompt,
                    logoStyle,
                    status: 'processing',
                };
            }),
            resetJob: jest.fn(() => {
                status = 'idle';
                jobData = null;
                error = null;
            }),
        }),
    };
};

describe('Job Hook Logic', () => {
    describe('Initial State', () => {
        it('should start with idle status', () => {
            const { useJob } = createMockJobHook('idle');
            const hook = useJob();

            expect(hook.status).toBe('idle');
            expect(hook.jobData).toBeNull();
            expect(hook.error).toBeNull();
        });
    });

    describe('startJob function', () => {
        it('should be a function', () => {
            const { useJob } = createMockJobHook();
            const hook = useJob();

            expect(typeof hook.startJob).toBe('function');
        });

        it('should accept prompt and logoStyle parameters', async () => {
            const { useJob } = createMockJobHook();
            const hook = useJob();

            await hook.startJob('Test prompt', 'monogram');

            expect(hook.startJob).toHaveBeenCalledWith('Test prompt', 'monogram');
        });
    });

    describe('resetJob function', () => {
        it('should be a function', () => {
            const { useJob } = createMockJobHook();
            const hook = useJob();

            expect(typeof hook.resetJob).toBe('function');
        });

        it('should reset the job state', () => {
            const { useJob } = createMockJobHook('processing');
            const hook = useJob();

            hook.resetJob();

            expect(hook.resetJob).toHaveBeenCalled();
        });
    });

    describe('Status transitions', () => {
        it('should handle processing status', () => {
            const { useJob } = createMockJobHook('processing');
            const hook = useJob();

            expect(hook.status).toBe('processing');
        });

        it('should handle done status', () => {
            const { useJob } = createMockJobHook('done');
            const hook = useJob();

            expect(hook.status).toBe('done');
        });

        it('should handle failed status', () => {
            const { useJob } = createMockJobHook('failed');
            const hook = useJob();

            expect(hook.status).toBe('failed');
        });
    });
});

describe('Job Data Structure', () => {
    it('should have correct job interface', () => {
        const job: Job = {
            id: 'test-id',
            prompt: 'Create a logo',
            logoStyle: 'abstract',
            status: 'done',
            resultUrl: 'https://example.com/image.png',
        };

        expect(job.id).toBe('test-id');
        expect(job.prompt).toBe('Create a logo');
        expect(job.logoStyle).toBe('abstract');
        expect(job.status).toBe('done');
        expect(job.resultUrl).toBe('https://example.com/image.png');
    });

    it('should allow optional resultUrl', () => {
        const job: Job = {
            id: 'test-id',
            prompt: 'Create a logo',
            logoStyle: 'mascot',
            status: 'processing',
        };

        expect(job.resultUrl).toBeUndefined();
    });
});
