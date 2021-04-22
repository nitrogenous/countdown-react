import { useState, useEffect, useCallback } from 'react';

const CountdownTimer = function (startingPoint, callback) {
  const isStartingpointValid = Number.isInteger(startingPoint);
  const isCallbackValid = callback instanceof Function;
  const [seconds, setSeconds] = useState(isStartingpointValid ? startingPoint : 0);
  const [timer, setTimer] = useState(null);
  const isTimerFinished = seconds <= 0;
  const hasTimer = timer !== null;

  const remaining = () => {
    return seconds;
  };

  const updateTimerValue = (value) => {
    if (Number.isInteger(value))
      setSeconds(value);
  };

  const start = () => {
    if (!isTimerFinished && !hasTimer) {
      setTimer(setInterval(() => 
        setSeconds(seconds => seconds - 1)
      ,1000));
    }
  };
  
  const stop = useCallback(() => {
    clearInterval(timer);
    setTimer(null);
  }, [timer]);

  useEffect(() => {
    if (isTimerFinished && hasTimer) {
      stop();
      isCallbackValid && callback();
    }
  }, [isTimerFinished, stop, isCallbackValid, callback]);

  return {remaining, start, stop, updateTimerValue};
};

export default CountdownTimer;
