"use client";
import React, { MouseEventHandler } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  className?: string;
}

const CustomButton: React.FC<Props> = ({
  children,
  link,
  onClick,
  color,
  className,
}) => {
  const router = useRouter();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (link) {
      router.push(link);
    } else if (onClick) {
      onClick(event);
    }
  };

  const customClass = clsx({
    "bg-yellow-500 hover:border border-yellow-500 text-purple-500 hover:text-yellow-500":
      color === "yellow",
    "bg-blue-500 hover:border-blue-500 hover:text-blue-500": color === "blue",
    "bg-green-500 hover:border-green-500 hover:text-green-500":
      color === "green",
    "bg-brown-500 hover:border-brown-500 hover:text-brown-500":
      color === "brown",
    "bg-red-500 hover:border-red-500 hover:text-red-500": color === "red",
    "bg-purple-500 border-purple-500 hover:text-purple-500": color === "purple",
    "bg-purple-500 hover:border-purple-500 hover:text-purple-500":
      color !== "yellow" &&
      color !== "blue" &&
      color !== "green" &&
      color !== "brown" &&
      color !== "red",
  });

  return (
    <div>
      <Button
        variant="outline"
        onClick={handleClick}
        className={`rounded text-white ${customClass} ${className}`}
      >
        {children}
      </Button>
    </div>
  );

  // const customClass = clsx({
  //   "bg-yellow-500 hover:border-yellow-500 hover:text-yellow-500":
  //     color === "yellow",
  // });

  // return (
  //   <div>
  //     <Button
  //       variant="outline"
  //       onClick={handleClick}
  //       className={`rounded bg-purple-500 text-white hover:text-purple-500 border-purple-500 ${customClass}`}
  //     >
  //       {children}
  //     </Button>
  //   </div>
  // );
};

export default CustomButton;
