import { LinkedIn, Mail, Twitter, YouTube } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import Cd1 from "../public/images/cd1.png";
import Cd3 from "../public/images/cd3.png";
import Image from "next/image";
import Container from "./container";
import Wrapper from "./wrapper";
import Logo from "./logo";

const Footer = () => {
  return (
    <>
      <div
        className="bg-purple-100 text-black relative"
        style={{
          backgroundImage: `url(../images/circles.png)`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src={Cd3} alt="ft" className="absolute bottom-0 left-0" />
        <Image src={Cd1} alt="ft" className="absolute bottom-0 right-0" />
        <Container>
          <Wrapper>
            <div className="rounded-t-2xl py-10 bg-purple-100">
              <div className="grid grid-cols-11 gap-10">
                <div className="col-span-10 md:col-span-5">
                  <Logo />

                  <div className="my-5 text-lg">
                    Cloud App is the ideal launchpad for a career in Cloud
                    DevOps, offering comprehensive training and hands-on
                    experience regardless of your technology background. Our
                    comprehensive programs equip you with the skills to excel in
                    managing cloud infrastructure and safeguarding data.
                  </div>
                </div>
                <div className="col-span-10 sm:col-span-4 md:col-span-2">
                  <div className="font-semibold">Company</div>

                  <div className="my-3 flex flex-col">
                    <Link
                      href="/"
                      className="my-2 border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      Home
                    </Link>
                    <Link
                      href="/#about"
                      className="my-2 border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/courses/beginner"
                      className="my-2 border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      Courses
                    </Link>
                  </div>
                </div>
                <div className="col-span-10 sm:col-span-4 md:col-span-2">
                  <div className="font-semibold">Courses</div>
                  <div className="my-3 flex flex-col">
                    <Link
                      href="/courses/beginner"
                      className="my-2 border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      Beginner
                    </Link>
                    <Link
                      href="/courses/comprehensive"
                      className="my-2 border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      Intermediate
                    </Link>
                    <Link
                      href="/courses/advanced"
                      className="my-2 border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      Advanced
                    </Link>
                  </div>
                </div>
                <div className="col-span-10 sm:col-span-3 md:col-span-2">
                  <div className="font-semibold">Contacts</div>

                  <div className="my-3 flex flex-col">
                    <Link
                      href="/"
                      className="my-2 flex gap-2 items-center border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      <Mail /> Twitter
                    </Link>
                    <Link
                      href="/"
                      className="my-2 border-b flex gap-2 items-center border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      <YouTube /> YouTube
                    </Link>
                    <Link
                      href="/"
                      className="my-2 flex gap-2 items-center border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      <LinkedIn /> LinkedIn
                    </Link>
                    <Link
                      href="/"
                      className="my-2 flex gap-2 items-center border-b border-dotted w-fit border-black hover:border-purple hover:text-purple-500"
                    >
                      <Twitter /> Twitter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </Container>
      </div>
    </>
  );
};

export default Footer;
