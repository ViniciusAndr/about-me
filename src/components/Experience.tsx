import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Styles from "../styles/Experience.module.css";

interface IExperienceProps {
  company: String;
  startDate: String;
  endDate: String;
  children: String;
}

export default function Experience({
  company,
  startDate,
  endDate,
  children,
}: IExperienceProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-w-0 h-auto">
      <div
        className="flex gap-4 mt-4 hover:cursor-pointer align-middle"
        onClick={() => setOpen(!open)}
      >
        <span className="bg-gray-700 px-2 py-0.5 rounded-2xl">
          {startDate} - {endDate}
        </span>
        <div>{company}</div>
        <span>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </div>
      <div
        className={`text-sm mt-2 ${Styles.description} ${
          open ? "" : Styles.collapsedDescription
        }`}
      >
        {children}
      </div>
    </div>
  );
}
