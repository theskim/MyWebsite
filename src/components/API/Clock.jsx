import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {time.toLocaleTimeString("en", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        hour12: true,
        minute: "numeric",
        second: "numeric",
      })}
    </>
  );
};

export default Clock;
