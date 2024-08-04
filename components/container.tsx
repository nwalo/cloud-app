import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl m-auto">{children}</div>
    </div>
  );
};

export default Container;
