import React, {useState,useEffect} from "react";

function TimerCountdown({initialTime,onTimerZero}){

    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);

      return () => clearInterval(timer); // Cleanup on component unmount
    }, []);
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };
    
    if(timeLeft===0){
        onTimerZero();
    }

    return (
      <>
        {formatTime(timeLeft)}
      </>
    );
    
}

export default TimerCountdown;