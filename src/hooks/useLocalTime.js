import { useEffect, useState } from 'react';

const REFRESH_INTERVAL_MS = 30_000;

export function useLocalTime(timeZone) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString('en-GB', { timeZone, hour: '2-digit', minute: '2-digit' });
    setTime(format());
    const intervalId = setInterval(() => setTime(format()), REFRESH_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [timeZone]);
  return time;
}
