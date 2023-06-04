import { useState, useEffect } from "react";
import Tab from "../../components/tab";
import TimerLayout from "../../components/timerLayout";
import TimerDisplay from "../../components/timerDisplay";
import TimerForm from "../../components/timerForm";

interface TimerInterface {
  hours: number,
  minutes: number,
  seconds: number,
}

const Timer = () => {
  const defaultTimer = {
    hours: 0,
    minutes: 5,
    seconds: 0
  }
  const [timer, setTimer] = useState<TimerInterface>(defaultTimer);
  const [canStartTimer, setCanStartTimer] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [showTimerInput, setShowTimerInput] = useState(false);

  useEffect(() => {
    if (canStartTimer) {
      let timerInterval = setInterval(() => {

        if (timer.seconds > 0) {
          setTimer({...timer, seconds: timer.seconds - 1});
        }
        
        if (timer.seconds === 0) {
          if (timer.minutes === 0) {
            if (timer.hours === 0) {
              setTimerCompleted(true);
              clearInterval(timerInterval);
            } else {
              setTimer({...timer, hours: timer.hours - 1, minutes: 59, seconds: 59});
            }
          } else {
            setTimer({...timer, minutes: timer.minutes - 1, seconds: 59});
          }
        }
      }, 1000);
      
      return () => {
        clearInterval(timerInterval);
      }
    }
  });

  const startTimer = () => {
    setTimerCompleted(false);
    setCanStartTimer(!canStartTimer);
    setShowTimerInput(false);
  }

  const resetTimer = () => {
    setTimerCompleted(false);
    setCanStartTimer(false);
    setTimer(defaultTimer);
    setShowTimerInput(false);
  }

  const getButtonName = () => {
    if (canStartTimer) {
      return "STOP";
   } else {
      return "START";
    }
  }

  const onChangeInputValue = (event: any) => {
    setTimer({...timer, [event.target.name]: event.target.value})
  }

  const timerContent = <div className="text-sm font-medium text-gray-500 mt-10 mb-10 dark:text-gray-400">
    {!showTimerInput && (
      <div data-testid="timer-display" id="timer-display" onClick={() => setShowTimerInput(!showTimerInput)}>
        <TimerDisplay timer={timer} />
      </div>
    )}
    {showTimerInput && (
      <div data-testid="timer-input" id="timer-input">
        <TimerForm onChangeInputValue={(event: any) => onChangeInputValue(event)} />
      </div>
    )}
  </div>

  const stopwatchContent = <></>

  const TabSteps = [
    {
      id: 1,
      name: "timer",
      component: <TimerLayout 
        buttonName={getButtonName()}
        showTimerInput={showTimerInput}
        timerCompleted={timerCompleted}
        resetTimer={resetTimer}
        startTimer={startTimer}
        setShowTimerInput={(showTimerInput) => setShowTimerInput(showTimerInput)} 
        onChangeInputValue={(event:any) => onChangeInputValue(event)}
        content={timerContent}
      />
    },
    {
      id: 2,
      name: "stopwatch",
      component: <TimerLayout 
        buttonName={getButtonName()}
        showTimerInput={showTimerInput}
        timerCompleted={timerCompleted}
        resetTimer={resetTimer}
        startTimer={startTimer}
        setShowTimerInput={(showTimerInput) => setShowTimerInput(showTimerInput)} 
        onChangeInputValue={(event:any) => onChangeInputValue(event)}
        content={stopwatchContent}
      />
    }
  ]

  return (
    <Tab 
      defaultActiveTab="timer"
      steps={TabSteps}
    />
  )
}

export default Timer;
