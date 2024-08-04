import Image from "next/image";
import React from "react";
import DotPattern from "../../public/images/dots.png";
import CirclePattern from "../../public/images/circles.png";
import { CloudCog } from "lucide-react";
import CustomButton from "@/components/custom/customButton";

const WhyCloud = () => {
  return (
    <div className="my-20">
      <div className="w-fit relative" id="learn">
        <Image
          src={DotPattern}
          alt="Circle pattern"
          className="absolute left-[-50px] z-0 top-[-10px]"
        />
        <div className="font-black relative z-10 leadin-[20px] text-[50px] w-fit">
          <p className="leading-0">Why Learn Devops </p> with Cloud-App
        </div>
        <Image
          src={CirclePattern}
          alt="Dot pattern"
          className="absolute right-0 top-6"
        />
      </div>

      <div className="mt-20 mb-14 grid grid-cols-12 gap-8">
        {cards.map((card, i) => (
          <div
            className="col-span-12 md:col-span-4 rounded-2xl shadow-2xl p-8"
            key={i}
          >
            <CloudCog className="h-16 w-16 text-purple-500" />

            <h4 className="font-bold text-2xl my-5">{card.title}</h4>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>

      <div>
        <CustomButton link="#course">Learn More</CustomButton>
      </div>

      <div className="my-20 flex justify-center max-w-[640px] m-auto">
        <div className="border rounded-2xl shadow-2xl w-full p-5 md:p-10">
          <iframe
            src="https://www.youtube.com/embed/N0SYCyS2xZA"
            title="Cloud Computing in 2 Minutes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-2xl aspect-video w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WhyCloud;

const cards = [
  {
    title: "No Tech Experience Needed",
    description:
      "CloudBoosta provides extensive support from the basics of Cloud  DevOps to advanced classes.",
  },
  {
    title: "Industry demand on the rise",
    description:
      "According to LinkedIn, Cloud Computing and DevOps are among the top 5 most sought-after Tech abilities in 2023.",
  },
  {
    title: "Access to Opportunities",
    description:
      "Becoming a competent cloud professional provides access to new job opportunities with a corresponding hike in income.",
  },
];
