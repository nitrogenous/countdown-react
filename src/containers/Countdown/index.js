import { useState, useEffect } from 'react';
import Creator from './Creator';
import Preview from './Preview';
import './index.scss'

const Countdown = () => {
  const [timerValue, setTimerValue] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  const countdownFinishAlert = () => {
    var audio = new Audio('https://www.myinstants.com/media/sounds/sexy-saxophone.mp3');
    audio.play();
  };

  useEffect(() => {
    if (isFinished) {
      setTimerValue(0);
    }
  }, [isFinished]);

  return (
    <div className={"countdown-wrapper finished-" + isFinished}>
      <Creator setTimerValue={setTimerValue}/>
      <Preview 
        timerValue={timerValue}
        setIsFinished={setIsFinished}
        countdownFinishAlert={countdownFinishAlert} 
      />
    </div>
  );
};

export default Countdown;
