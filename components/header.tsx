import Image from "next/image";
import React from "react";
import DotPattern from "../public/images/dots.png";
import CirclePattern from "../public/images/circles.png";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-fit relative">
      <Image
        src={DotPattern}
        alt="Circle pattern"
        className="absolute left-[-50px] z-0 top-[-10px]"
      />
      <div className="font-black relative z-10 leading-[40px] md:leading-[60px] text-3xl md:text-[50px] w-fit">
        {children}
      </div>
      <Image
        src={CirclePattern}
        alt="Dot pattern"
        className="absolute right-0 top-6 z-1"
      />
    </div>
  );
};

export default Header;
