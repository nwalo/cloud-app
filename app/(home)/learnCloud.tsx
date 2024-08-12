import Image from "next/image";
import React from "react";
import DotPattern from "../../public/images/dots.png";
import CirclePattern from "../../public/images/circles.png";
import { GraduationCap } from "lucide-react";
import CustomButton from "@/components/custom/customButton";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { link } from "fs";

const LearnCloud = () => {
  const cards = [
    {
      title: "Beginners Guide to Cloud DevOps",
      description:
        "An introduction to Cloud DevOps, helping beginners grasp the basics of cloud computing and DevOps while laying the groundwork for future learning.",
      lists: [
        "Understand the fundamentals of cloud computing, its benefits and applications.",
        "Gain hands-on experience with essential tools and techniques used in Cloud DevOps environments.",
        "Develop a foundation for further learning in advanced Cloud DevOps practices.",
      ],
      link: "courses/beginner",
    },
    {
      title: "Comprehensive Cloud DevOps Course",
      description:
        "A detailed exploration of Cloud DevOps for those seeking to gain a thorough and deeper understanding of cloud technologies and DevOps methodologies.",
      lists: [
        "Master the principles of cloud computing and its various service models.",
        "Design and build end-to-end DevOps pipelines using cloud resources and tools.",
        "Develop skills to manage complex Cloud environments while ensuring security and reliability.",
      ],
      link: "courses/comprehensive",
    },
    {
      title: "Advanced Cloud DevOps Course",
      description:
        "An advanced course for experienced Cloud DevOps professionals looking to refine their expertise and elevate their skills in complex environments.",
      lists: [
        "Explore advanced cloud security strategies and container technologies",
        "Design and implement complex cloud-based microservices architectures.",
        "Gain proficiency in automating advanced DevOps workflows and continuous monitoring.",
      ],
      link: "courses/advanced",
    },
  ];

  return (
    <div className="my-20 text-slate-200" id="course">
      <div className="w-fit relative">
        <Image
          src={DotPattern}
          alt="Circle pattern"
          className="absolute left-[-50px] z-0 top-[-10px]"
        />
        <div className="font-black relative z-10 leadin-[20px] text-[50px] w-fit">
          <p className="leading-0">Learn Cloud by </p> Doing Cloud
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
            className="col-span-12 xl:col-span-4 rounded-2xl border shadow-2xl p-8 hover:bg-white hover:text-purple-500 hover:scale-105 transition-all duration-500"
            key={i}
          >
            <GraduationCap className="h-16 w-16 text-yellow-500 stroke-[1.2]" />

            <h4 className="font-bold  text-2xl my-5">{card.title}</h4>
            <p className="text-lg">{card.description}</p>

            <ul className="my-5">
              {card.lists.map((list, index) => (
                <li key={index} className="flex gap-2 my-2">
                  <CheckBoxIcon style={{ color: " rgb(234 179 8 )" }} /> {list}
                </li>
              ))}
            </ul>

            <div className="my-5">
              <CustomButton color="yellow" link={card.link}>
                Learn More
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnCloud;
