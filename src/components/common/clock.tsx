import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString(["en-us"], {
      hour: "numeric",
      minute: "numeric",
    })
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString(["en-us"], {
          hour: "numeric",
          minute: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{time}</div>;
};
export default Clock;
