"use client";
import LearnCloud from "@/app/(home)/learnCloud";
import JobCard from "@/components/cards/jobCard";
import TechSkillCard from "@/components/cards/techSkillCard";
import Container from "@/components/container";
import CustomButton from "@/components/custom/customButton";
import CustomCard from "@/components/custom/customCard";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import Wrapper from "@/components/wrapper";
import { courses } from "@/data/courses";
import React, { useMemo } from "react";
import CourseSummary from "./courseSummary";
import CourseEmpowerment from "./courseEmpowerment";
import CourseHero from "./hero";
import { title } from "process";

interface Props {
  params: { course: string };
}

const Course: React.FC<Props> = ({ params: { course } }) => {
  const chosenCourse = useMemo(() => {
    const found = courses.find((e, i) => e.link.includes(course));
    return found;
  }, [course]);

  return (
    <Container>
      <Wrapper>
        <CourseHero title={chosenCourse?.title} />

        <div className="my-5 lg:my-20">
          <Header>
            <p className="leading-0 w-max">By the end of this course,</p>
            you’ll be proficient in:
          </Header>
          <div className="my-16 grid grid-cols-12 gap-8">
            {chosenCourse?.tools.map((tool, i) => (
              <div key={i} className="col-span-12 md:col-span-6 xl:col-span-4">
                <TechSkillCard data={tool} />
              </div>
            ))}
          </div>
        </div>

        <CourseEmpowerment data={chosenCourse?.empowerment} />

        <div className="my-20 ">
          <Header>
            <p className="leading-0 w-max">Get Launched into</p>
            your dream Tech Career
          </Header>
          <div className="my-16 grid grid-cols-12 gap-8 h-full">
            {teachingMethods.map((e, i) => (
              <div key={i} className="col-span-12 md:col-span-6 h-full">
                <CustomCard>
                  <div className="font-bold text-lg">{e.title}</div>
                  <p className="my-5">{e.description}</p>

                  <div className="">
                    <CustomButton>Enroll Now</CustomButton>
                  </div>
                </CustomCard>
              </div>
            ))}
          </div>
        </div>

        <CourseSummary />
      </Wrapper>
    </Container>
  );
};

export default Course;

const teachingMethods = [
  {
    title: "80% Practical Courses",
    description:
      "With 80% practical, you’ll start building on the Cloud from day one",
  },
  {
    title: "Hands-on Labs",
    description:
      "You will learn to apply concepts, solve real-world challenges, gain valuable skills, and build your portfolio",
  },
  {
    title: "Self-Paced Classes",
    description:
      "Enjoy learning at your own pace with 35 hours of on-demand video.",
  },
  {
    title: "Free Access",
    description:
      "This course will be available to all learners for 12 months for free.",
  },
  {
    title: "Mock Interviews",
    description:
      "At the end of your program, we will create interview simulations to help get you ready for a job",
  },
  {
    title: "CV & LinkedIn Reviews",
    description:
      "You’ll be taught to put everything you’ve learnt into your CV and portfolio. We’ll also help you level up your LinkedIn page",
  },
];
