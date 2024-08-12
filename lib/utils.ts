import { IMail } from "@/models/mail";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sendMail = ({ name, email, course }: IMail) => {
  const emailTo = "okechukwu.nwalo@tenece.com";
  const subject = encodeURIComponent(
    `Cloud Course Enrollment ${course ? `- ${course}` : ""}`
  );
  const body = `Dear Admin,
  %0A%0AI, ${name ? name : ""} ${email ? `(${email})` : ""} 
  wish to enroll for ${course ? course : "a cloud course"}.
  %0A%0AI look forward to your reply soon.`;

  return (window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`);
};
