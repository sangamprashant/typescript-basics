import React from "react";

const MutableRef = () => {
  const [timer, setTimer] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);

  const stopTime = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  React.useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTime();
    };
  }, []);

  return (
    <div>
      Hook Timmer - {timer}
      <button onClick={stopTime}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
