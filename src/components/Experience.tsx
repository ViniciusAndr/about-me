import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Styles from "../styles/Experience.module.css";

interface IExperienceProps {
  company: String;
  startDate: String;
  endDate: String;
  stacks?: Array<String>;
  children: String;
}

export default function Experience({
  company,
  startDate,
  endDate,
  stacks,
  children,
}: IExperienceProps) {
  const [open, setOpen] = useState(false);

  function renderStacks() {
    if (!stacks) return;

    return (
      <div className="flex mt-2 gap-2 items-center ">
        <span className="font-bold">Stacks:</span>
        <ul className="gap-2 list-disc flex justify-between">
          {stacks.map((stack: String, idx) => (
            <li
              key={idx}
              className="float-left ml-6 first:list-none first:ml-0"
            >
              {stack}
            </li>
          ))}
        </ul>
      </div>
    );
  }

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
        <span className="flex items-center">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      <div
        className={`text-sm mt-2 ${Styles.description} ${
          open ? "" : Styles.collapsedDescription
        }`}
      >
        {children}

        {stacks ? renderStacks() : ""}
      </div>
    </div>
  );
}
