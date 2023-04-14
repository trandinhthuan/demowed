import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(60);
  const initialSeconds = 60;
  const [isCountdownPaused, setIsCountdownPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCountdownPaused) {
        setSeconds(seconds => seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCountdownPaused]);

  useEffect(() => {
    if (seconds === 0) {
      setIsCountdownPaused(true);
      setTimeout(() => {
        setIsCountdownPaused(false);
        setSeconds(initialSeconds);
      }, 10000);
    }
  }, [seconds, initialSeconds]);

  return (
    <div>
      { seconds > 0 ? `Còn Lại: ${seconds}s` : isCountdownPaused ? "Sắp bắt đầu Sales" : '' }
    </div>
  );
}

export default CountdownTimer;
