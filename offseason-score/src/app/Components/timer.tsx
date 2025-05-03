import React, { useState, useEffect, useRef } from "react";

interface TimerProps {
  label: string;
  initialSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ label, initialSeconds }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current as NodeJS.Timeout);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning && secondsLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    handleStop();
    setSecondsLeft(initialSeconds);
  };

  const formatTime = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="border rounded-4xl p-4 shadow-md w-64 text-center m-4 bg-white">
      <h2 className="text-6xl font-semibold mb-2">{label} Timer</h2>
      <div className="text-6xl font-mono mb-4">{formatTime(secondsLeft)}</div>
      <div className="flex justify-center gap-2">
        <button
          onClick={handleStart}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-4l flex flex-col items-center justify-center">
      <Timer label="30-Second" initialSeconds={30} />
      <Timer label="2-Minute" initialSeconds={120} />
    </div>
  );
};

export default App;
