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
          <div className="grid grid-cols-2 gap-10 items-center" key={i}>
            {e.left && (
              <div className="col-span-2 md:col-span-1">
                <div className="text-lg">
                  <ul className="my-2">
                    <li className="flex items-center gap-5">
                      <ChevronRightCircle
                        fontSize="small"
                        style={{ color: "#fff" }}
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
                        style={{ color: "#fff" }}
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
  { left: "100% Virtual", right: "Job Readiness Training" },
  {
    left: "18 Weeks of Intense Training (Classroom + Practicals)",
    right: "Supportive Learning Community",
  },
  {
    left: "Weekly Live Classes (Saturdays)",
    right: "Certificate of Completion",
  },
  {
    left: "Start Building from Day 1 with our Step by Step Labs",
    // right: "Job Readiness Training",
  },
];
