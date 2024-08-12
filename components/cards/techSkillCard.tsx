import React from "react";
import CustomCard from "../custom/customCard";
import Image from "next/image";

interface TechSkillData {
  img: string;
  title: string;
  description: string;
}

interface Props {
  data: TechSkillData;
}

const TechSkillCard: React.FC<Props> = ({ data }) => {
  const { img, title, description } = data;

  return (
    <CustomCard>
      <div className="grid grid-cols-12 gap-1 items-center">
        {img && (
          <div className="col-span-3">
            <Image src={img} width={50} height={50} alt={title} />
          </div>
        )}
        <div className={`${img ? "col-span-9" : "col-span-12"}  `}>
          <div className="font-bold text-xl my-2">{title}</div>
          <div className="text-gray-400">{description}</div>
        </div>
      </div>
    </CustomCard>
  );
};

export default TechSkillCard;
