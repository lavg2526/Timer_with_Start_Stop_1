import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);
  const [maxValue, setMaxValue] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      if (flag) {
        setTime((time) => time + 1);
      }
      if (time >= maxValue) {
        setTime(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);
  const handleStart = (maxValue) => {
    setFlag(true);
    setTime((time) => time + 1);
    setMaxValue(maxValue);
  };
  const handleStop = () => {
    setFlag(false);
  };

  return (
    <>
      <span>{time}</span>
      <br />
      <br />
      <button onClick={(e) => handleStart(10)}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};
export default Clock;
