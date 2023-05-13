'use client';

import { useEffect, useRef, useState } from 'react';

export const Status = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative hidden h-8 items-center bg-gray-500 text-black after:absolute after:right-full after:border-b-[16px] after:border-r-[16px] after:border-t-[16px] after:border-b-transparent after:border-r-gray-500 after:border-t-transparent md:flex">
      {true ? (
        // TODO: implement logic for conditionally showing feedback based on results from the route handlers
        <span className="mr-4 px-2 text-green">✔</span>
      ) : (
        <span className="mr-4 px-2 text-red">✗</span>
      )}

      <div className="relative flex h-8 items-center bg-gray-400 px-2 after:absolute after:right-full after:border-b-[16px] after:border-r-[16px] after:border-t-[16px] after:border-b-transparent after:border-r-gray-400 after:border-t-transparent">
        <time>
          at{' '}
          {new Intl.DateTimeFormat('nl-NL', {
            timeStyle: 'short',
          }).format(time)}
        </time>

        <Clock time={time} />
      </div>
    </div>
  );
};

interface ClockProps {
  time: Date;
}

const Clock = ({ time }: ClockProps) => {
  const hoursArm = useRef<HTMLDivElement>(null);
  const minutesArm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
      const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

      hoursArm.current!.style.transform = `rotate(${hourDegrees}deg)`;
      minutesArm.current!.style.transform = `rotate(${minuteDegrees}deg)`;
    }, 100);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="relative ml-2 h-1.5 w-1.5 rounded-full border-2 border-black p-1.5">
      <div
        ref={hoursArm}
        className="hand hours absolute right-1/2 top-1/2 z-10 h-[1px] w-1 origin-[100%] rotate-90 transform-gpu rounded bg-black"
      />
      <div
        ref={minutesArm}
        className="hand minutes absolute right-1/2 top-1/2 h-[1px] w-[40%] origin-[100%] rotate-90 transform-gpu rounded bg-black"
      />
    </div>
  );
};
