import React from "react";
import { ChevronRightCircle } from "lucide-react";
import Image from "next/image";

const CourseSummary = () => {
  return (
    <div className="my-20 relative font-light">
      <Image
        src={"https://cloudboosta.com/images/half-circle.png"}
        alt="pattern"
        width={200}
        height={200}
        className="absolute top-0 right-10 opacity-50"
      />
      <div className="rounded-2xl text-white bg-purple py-10 px-5 md:p-10">
        <h4 className="font-black relative z-10 leading-[50px] text-[50px] w-fit">
          Course Summary:
        </h4>

        <p className="my-5 text-lg">
          An in-depth exploration of Cloud DevOps, catering to individuals
          seeking an extensive understanding of cloud technologies and DevOps
          methodologies.
        </p>

        {summary.map((e, i) => (
          <div
            className="grid grid-cols-2 gap-1 md:gap-10 items-center"
            key={i}
          >
            {e.left && (
              <div className="col-span-2 md:col-span-1">
                <div className="text-lg">
                  <ul className="my-2">
                    <li className="flex items-center gap-5">
                      <ChevronRightCircle
                        fontSize="small"
                        style={{ color: "#fff", minWidth: 24 }}
                      />
                      {e.left}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {e.right && (
              <div className="col-span-2 md:col-span-1">
                <div className="text-lg">
                  <ul className="my-2">
                    <li className="flex items-center gap-5">
                      <ChevronRightCircle
                        fontSize="small"
                        style={{ color: "#fff", minWidth: 24 }}
                      />
                      {e.right}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSummary;

const summary = [
  {
    left: "100% Virtual",
    right: "35 hours of on-demand video",
  },
  {
    left: "Start Building from Day 1 with our Step by Step Labs",
    right: "18 Weeks of Interactive Intense Training (Classroom + Practicals)",
  },
  {
    left: "Weekly Live Classes (Saturdays)",
    right: "Downloadable resources",
  },
  {
    left: "Assessments/Quizzes",
    right: "12 months of free access",
  },
  {
    left: "Supportive Learning Community",
    right: "Job Readiness Training",
  },
  {
    left: "Certificate of Completion",
    // right: "Job Readiness Training",
  },
];
