import { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Job, JobStatus } from '../types';

export const useJobGeneration = () => {
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [jobData, setJobData] = useState<Job | null>(null);
  const [status, setStatus] = useState<JobStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const startJob = async (prompt: string) => {
    try {
      setStatus('processing');
      setError(null);
      const docRef = await addDoc(collection(db, 'jobs'), {
        prompt: prompt.trim(),
        status: 'processing',
        createdAt: serverTimestamp(),
      });

      setCurrentJobId(docRef.id);

    } catch (err: any) {
      console.error("Error starting job:", err);
      setStatus('failed');
      setError(err.message || "Failed to start generation");
    }
  };

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
    error 
  };
};