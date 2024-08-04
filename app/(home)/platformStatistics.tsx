"use client";
import React from "react";
import CountUp from "react-countup";

const PlatformStatistics = () => {
  const counters = [
    { title: "Registered Students", stat: 100 },
    { title: "Graduates", stat: 100 },
    { title: "Hands-on-Labs", stat: 50 },
    { title: "Topics", stat: 20 },
  ];

  return (
    <div className="my-20">
      <h4 className="text-3xl font-medium my-10">Cloud App in numbers:</h4>

      <div className="grid grid-cols-4 shadow-lg rounded-2xl p-10">
        {counters.map((count, i) => (
          <div
            key={i}
            className="col-span-2 lg:col-span-1 my-3 flex flex-col items-center justify-center"
          >
            <div className="text-purple-500 font-black text-[50px]">
              <CountUp start={0} end={count.stat} duration={2.75} />+
            </div>
            <div className="text-xl">{count.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformStatistics;
