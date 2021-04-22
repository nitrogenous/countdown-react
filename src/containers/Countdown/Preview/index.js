import { useState, useEffect } from 'react'; 
import CountdownTimer from '../../../utils/CountdownTimer';

const Preview = ({timerValue, countdownFinishAlert}) => {
  const [time, setTime] = useState('00:00:00');
  const timer = new CountdownTimer(timerValue, countdownFinishAlert);

  const secondsToTime = (duration) => {
    var sec_num = parseInt(duration, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
  
    return hours + ":" + minutes + ":" + seconds;
  }

  useEffect(() => {
    timer.stop();
    timer.updateTimerValue(timerValue);
  }, [timerValue]);

  useEffect(() => {
    setTime(secondsToTime(timer.remaining()))
  }, [timer]);

  return (
    <div>
      <div>
        {time}
      </div>
      <button onClick={timer.start}>Start</button>
      <button onClick={timer.stop}>Stop</button>
    </div>
  );
};

export default Preview;
