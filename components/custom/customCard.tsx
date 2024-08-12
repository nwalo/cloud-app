import React from "react";
import { Card } from "@/components/ui/card";

const CustomCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="rounded-2xl shadow p-8 hover:scale-[103%] duration-500 transition-all h-full">
      {children}
    </Card>
  );
};

export default CustomCard;
