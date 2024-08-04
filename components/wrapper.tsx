import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:gap-8 md:p-10">{children}</div>;
};

export default Wrapper;
