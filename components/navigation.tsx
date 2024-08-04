"use client";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import CustomButton from "./custom/customButton";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { useEffect, useState } from "react";

export function Navigation() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();
  const navs = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
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
                pathname == nav.path ? "text-purple-500 border-b" : ""
              } hover:border-b`}
            >
              {nav.name}
            </Link>
          ))}

          <CustomButton link="#join"> Enrol Now</CustomButton>
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
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" /> Logo
              <span className="sr-only">Cloud App Inc</span>
            </Link>
            {navs.map((nav, i) => (
              <Link
                key={i}
                href={nav.path}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {nav.name}
              </Link>
            ))}
            <CustomButton link="#join"> Enrol Now</CustomButton>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
