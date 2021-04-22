import { useState } from 'react';
import './index.scss';

const Creator = ({setTimerValue}) => {
  const [secondsOfOptions, setSecondsOfOptions] = useState({hours: 0, minutes: 0, seconds: 0});

  const createTimerOption = (numberOfOptions) => {
    const options = [];

    for(let i = 0; i <= numberOfOptions; i++)
      options.push(<option key={i} >{i}</option>);

    return options;
  };

  const convertOptionsToSeconds = (optionValue, optionType) => {
    switch(optionType) {
      case 'hours':
        setSecondsOfOptions({...secondsOfOptions, hours: Math.floor(optionValue * 60 * 60)});
        break;
      case 'minutes':
        setSecondsOfOptions({...secondsOfOptions, minutes: Math.floor(optionValue * 60)});
      break;
      case 'seconds':
        setSecondsOfOptions({...secondsOfOptions, seconds: Math.floor(optionValue)});
        break;
      default:
        break;
    }
  };

  const updateTimerValue = () => {
    const totalSeconds = Object.values(secondsOfOptions).reduce((a, b) => a + b);

    setTimerValue(totalSeconds);
  };  

  return (
    <div className="countdown-creator">
      <label htmlFor="hours">Hours:</label>
      <select id="hours" onChange={e => convertOptionsToSeconds(e.target.value, 'hours')} >
        {createTimerOption(24)}
      </select>
      <label htmlFor="minutes">Minutes:</label>
      <select id="minutes" onChange={e => convertOptionsToSeconds(e.target.value, 'minutes')} >
        {createTimerOption(60)}
      </select>
      <label htmlFor="seconds">Seconds:</label>
      <select id="seconds" onChange={e => convertOptionsToSeconds(e.target.value, 'seconds')} >
        {createTimerOption(60)}
      </select>
      <button onClick={updateTimerValue}>Create Countdown</button>
    </div>
  );
};

export default Creator;
