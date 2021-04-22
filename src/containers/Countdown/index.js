import { useState } from 'react';
import Creator from './Creator';
import Preview from './Preview';

const Countdown = () => {
  const [timerValue, setTimerValue] = useState(0);

  const countdownFinishAlert = () => {
    var audio = new Audio('https://www.myinstants.com/media/sounds/sexy-saxophone.mp3');
    audio.play();
  };

  return (
    <div>
      <Creator setTimerValue={setTimerValue}/>
      <Preview timerValue={timerValue} countdownFinishAlert={countdownFinishAlert}/>
    </div>
  );
};

export default Countdown;
