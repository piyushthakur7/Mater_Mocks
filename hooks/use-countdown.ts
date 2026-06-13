import { useState, useEffect } from "react";

export function useCountdown(initialSeconds: number, onExpire?: () => void) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsActive(false);
            if (onExpire) onExpire();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsRemaining, onExpire]);

  const start = () => setIsActive(true);
  const pause = () => setIsActive(false);
  const reset = (newSeconds = initialSeconds) => {
    setIsActive(false);
    setSecondsRemaining(newSeconds);
  };

  return {
    secondsRemaining,
    isActive,
    start,
    pause,
    reset,
  };
}
