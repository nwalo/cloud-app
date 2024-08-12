"use client";
import CustomButton from "@/components/custom/customButton";
import React, { useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Input } from "@/components/ui/input";
import { sendMail } from "@/lib/utils";

const JoinCommunity = () => {
  const initialState = { name: "", email: "" };
  const [input, setInput] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email } = input;
    sendMail({ name, email });
    setInput(initialState);
  };

  return (
    <div className="my-20" id="join">
      <div className="rounded-2xl bg-slate-200 py-10 px-5 md:p-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-black relative z-10 leadin-[20px] text-[50px] w-fit">
              Join our community
            </h4>

            <div className="text-lg my-5">
              <p>
                Be part of a supportive network and unlock exclusive
                opportunities such as:
              </p>
              <ul className="my-5">
                <li className="flex items-center gap-5">
                  <CheckBoxIcon fontSize="small" style={{ color: "#6A1B9A" }} />
                  Access to free monthly masterclasses
                </li>
                <li className="flex items-center gap-5">
                  <CheckBoxIcon fontSize="small" style={{ color: "#6A1B9A" }} />
                  Free webinars
                </li>
                <li className="flex items-center gap-5">
                  <CheckBoxIcon fontSize="small" style={{ color: "#6A1B9A" }} />
                  Network with professionals
                </li>
                <li className="flex items-center gap-5">
                  <CheckBoxIcon fontSize="small" style={{ color: "#6A1B9A" }} />
                  Soft skills training
                </li>
              </ul>
            </div>

            <form className="max-w-[300px]" onSubmit={handleSubmit}>
              <Input
                type="text"
                className="border-purple text-purple my-5 rounded-[4px] hover:bg-[#6A1B9A14]"
                placeholder="Name"
                value={input.name}
                name="name"
                onChange={handleChange}
              />

              <Input
                type="email"
                className="border-purple text-purple my-5 rounded-[4px] hover:bg-[#6A1B9A14]"
                placeholder="Email"
                value={input.email}
                name="email"
                onChange={handleChange}
              />

              <CustomButton className="px-20">Join</CustomButton>
            </form>
          </div>

          <div className="col-span-1">
            <div
              className="rounded-2xl bg-cover bg-center bg-no-repeat bg-blend-multiply bg-purple-400 h-full "
              style={{ backgroundImage: `url(../images/group.jpg)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
