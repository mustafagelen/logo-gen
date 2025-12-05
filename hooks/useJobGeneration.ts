import { useState, useEffect, useRef } from 'react';
import { collection, addDoc, onSnapshot, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Job, JobStatus } from '../types';

const JOB_TIMEOUT_MS = 60000;

export const useJobGeneration = () => {
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [jobData, setJobData] = useState<Job | null>(null);
  const [status, setStatus] = useState<JobStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearJobTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const resetJob = () => {
    clearJobTimeout();
    setCurrentJobId(null);
    setJobData(null);
    setStatus('idle');
    setError(null);
  };

  const startJob = async (prompt: string, logoStyle: string) => {
    try {
      clearJobTimeout();
      setStatus('processing');
      setError(null);

      const docRef = await addDoc(collection(db, 'jobs'), {
        prompt: prompt.trim(),
        status: 'processing',
        createdAt: serverTimestamp(),
        logoStyle: logoStyle,
      });

      setCurrentJobId(docRef.id);

      timeoutRef.current = setTimeout(() => {
        setStatus('failed');
        setError('Oops, something went wrong!');
      }, JOB_TIMEOUT_MS);

    } catch (err: any) {
      setStatus('failed');
      setError(err.message || "Failed to start generation");
    }
  };

  useEffect(() => {
    return () => clearJobTimeout();
  }, []);

  useEffect(() => {
    if (status === 'done' || status === 'failed') {
      clearJobTimeout();
    }
  }, [status]);

  useEffect(() => {
    if (!currentJobId) return;

    const unsubscribe = onSnapshot(doc(db, 'jobs', currentJobId), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as Job;

        setJobData({ ...data, id: docSnap.id });

        if (data.status) {
          setStatus(data.status);
        }
      }
    }, (err) => {
      console.error("Listener Error:", err);
      setStatus('failed');
      setError("Connection lost with database");
    });

    return () => unsubscribe();
  }, [currentJobId]);

  return {
    startJob,
    jobData,
    status,
    error,
    resetJob
  };
};