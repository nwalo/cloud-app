import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CustomCard from "@/components/custom/customCard";

interface Props {
  data: string[] | undefined;
}

const CourseEmpowerment: React.FC<Props> = ({ data }) => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="col-span-2 md:col-span-1">
          <div
            className="rounded-2xl bg-cover bg-center bg-no-repeat bg-blend-multiply h-[200px] md:h-[400px]"
            style={{
              backgroundImage: `url(https://cloudboosta.com/images/pm.jpg)`,
            }}
          />
        </div>

        <div className="col-span-2 md:col-span-1">
          <CustomCard>
            <h4 className="font-black relative z-10 leading-[50px] text-[40px] w-fit">
              You will get empowered to:
            </h4>

            <div className="text-lg my-5">
              <ul className="my-5">
                {data?.map((item, i) => (
                  <li className="flex items-center gap-5 my-3" key={i}>
                    <CheckBoxIcon
                      fontSize="small"
                      style={{ color: "#6A1B9A" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CustomCard>
        </div>
      </div>
    </div>
  );
};

export default CourseEmpowerment;
