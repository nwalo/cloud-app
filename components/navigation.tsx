"use client";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CustomButton from "./custom/customButton";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import { useEffect, useState } from "react";

export function Navigation() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
  ];

  const courses = [
    { name: "Beginner", path: "/courses/beginner" },
    { name: "Comprehensive", path: "/courses/comprehensive" },
    { name: "Advanced", path: "/courses/advance" },
  ];

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background p-4 md:gap-8 md:p-10">
      <nav className="hidden gap-6 text-lg font-medium justify-between w-full md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Logo />
        <div className="gap-6 md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {navs.map((nav, i) => (
            <Link
              key={i}
              href={nav.path}
              className={`text-muted-foreground transition-colors py-2 hover:text-purple border-purple-500 ${
                pathname === nav.path ? "text-purple-500 border-b" : ""
              } hover:border-b`}
            >
              {nav.name}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`hover:text-purple border-purple-500 hover:border-b py-2 ${
                pathname.includes("courses") ? "text-purple-500 border-b" : ""
              }`}
            >
              Courses
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white font-medium rounded-lg cursor-pointer">
              {courses.map((nav, i) => (
                <DropdownMenuItem key={i} className="p-0">
                  <span
                    onClick={() => router.push(nav.path)}
                    className={`text-muted-foreground block w-full transition-colors md:text-sm px-2 py-2 hover:bg-purple-50 hover:text-purple ${
                      nav.path === pathname
                        ? "text-purple-500 border-b"
                        : "text-[#333333]"
                    }`}
                  >
                    {nav.name}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <CustomButton link="/#join"> Enrol Now</CustomButton>
        </div>
      </nav>
      <div className="flex md:hidden">
        <Logo />
      </div>

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="text-purple-500 bg-white">
          <nav className="grid gap-2 text-lg font-medium w-full">
            <Link
              href="/"
              className="flex items-center gap-2 mb-5 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" /> Logo
              <span className="sr-only">Cloud App Inc</span>
            </Link>
            {navs.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className={`text-muted-foreground block w-full transition-colors md:text-sm m-0 px-2 py-2 hover:bg-purple-50 ${
                  nav.path === pathname ? "bg-purple-200" : ""
                }`}
              >
                {nav.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`hover:text-purple border-purple-500 hover:bg-purple-50 w-full text-left p-2 ${
                  pathname.includes("courses") ? "bg-purple-200" : ""
                }`}
              >
                Courses
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-full font-medium rounded-lg cursor-pointer">
                {courses.map((nav, i) => (
                  <DropdownMenuItem key={i} className="p-0">
                    <span
                      onClick={() => router.push(nav.path)}
                      className={`text-muted-foreground block w-full transition-colors md:text-sm px-2 py-2 hover:bg-purple-50 hover:text-purple ${
                        nav.path === pathname
                          ? "text-purple-500 border-b"
                          : "text-[#333333]"
                      }`}
                    >
                      {nav.name}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <CustomButton link="#join"> Enrol Now</CustomButton>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
