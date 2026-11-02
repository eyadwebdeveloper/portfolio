import { useState } from 'react';
import { contactSubjects } from '@/data/contactSubjects';
import { sendContactMessage } from '@/services/contactService';

const INITIAL_VALUES = { name: '', subject: contactSubjects[0], email: '', message: '', botcheck: false };

/** `status` is 'idle' | 'sending' | 'success' | 'error'. */
export function useContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState('idle');

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(values);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return { values, status, updateField, submit };
}