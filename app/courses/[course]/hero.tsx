import CustomButton from "@/components/custom/customButton";
import { Rocket } from "lucide-react";
import React from "react";

const CourseHero = ({ title }: { title: string | undefined }) => {
  return (
    <div className="shadow-md rounded-2xl mt-5 mb-10">
      <div
        className="rounded-2xl py-10 md:p-20 bg-no-repeat bg-cover bg-center bg-opacity-50 bg-black bg-blend-multiply"
        style={{ backgroundImage: "url(../images/learn.jpg)" }}
      >
        <div className="text-center">
          <div className="text-purple-500 m-auto bg-yellow-400 font-medium w-fit p-2 px-3 text-xs rounded-full">
            Transition to a Cloud Expert
          </div>

          <h2 className="text-3xl sm:text-[44px] sm:leading-[60px] lg:text-[50px] text-slate-200 font-bold my-10 md:my-20">
            {title}
          </h2>

          <CustomButton enroll enrollCourse={title}>
            <div className="flex gap-2">
              Enroll Now{" "}
              <Rocket className="h-5 w-5 text-yellow-400 transition-all animate-bounce" />
            </div>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
