import { Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" /> Logo
      <span className="sr-only">Cloud App Inc</span>
    </Link>
  );
};

export default Logo;
