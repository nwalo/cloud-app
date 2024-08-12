import CustomButton from "@/components/custom/customButton";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import CirclePattern from "../../public/images/circles.png";
import DotPattern from "../../public/images/dots.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="shadow-md rounded-2xl py-10 pl-5 md:pl-20 my-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6">
          <div className="text-purple-500 bg-yellow-400 font-medium w-fit py-2 px-3 text-xs rounded-full">
            Beginner to Pro
          </div>

          <h2 className="text-3xl sm:text-[44px] sm:leading-[60px] lg:text-[50px] text-purple-500 font-black my-5">
            Elevate your tech career with a mastery in Cloud DevOps
          </h2>

          <h3 className="text-2xl my-5">
            Become a highly in-demand Cloud DevOps professional.
          </h3>

          <CustomButton link="#course">Get Started</CustomButton>

          <div className="my-5 flex items-center w-fit text-purple-500 hover:text-purple-600 text-sm cursor-pointer hover:font-medium">
            <ChevronDown className="h-5 w-5" />{" "}
            <Link href="#learn">Scroll down to explore</Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 p-5 relative">
          <div className="rounded-2xl flex shadow-lg relative min-w-[100px] min-h-[350px] w-full h-full">
            <Image
              src={CirclePattern}
              alt="Circle pattern"
              className="absolute right-0 top-0 z-[-1]"
            />
            <div className="rounded-2xl bg-black my-5 shadow-lg w-[90%] relative z-10 overflow-hidden">
              <div
                className="bg-no-repeat bg-cover hover:scale-125 w-full h-full transition-all duration-1000 hover:bg-purple-300 bg-blend-multiply"
                style={{ backgroundImage: "url(../images/learn.jpg)" }}
              ></div>
            </div>
            <Image
              src={DotPattern}
              alt="Dot pattern"
              className="absolute bottom-0 right-0 z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
