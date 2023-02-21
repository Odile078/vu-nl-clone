import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import {
  MdArrowForwardIos,
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
const Calendar = () => {
  return (
    <Wrapper className=" bg-white shadow-4xl">
      <div className="py-7.5 md:py-[60px] xl:py-[90px] flex flex-col gap-y-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <h2 className="text-3xl text-brandBlue">Calendar</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
            <div className="flex items-center justify-between gap-4 px-5 py-[10px] shadow-3xl bg-white">
              <p className="text-lg leading-[30px] font-medium">
                All categories
              </p>
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex items-center justify-between px-5 py-[10px] shadow-3xl bg-white">
              <p className="text-lg leading-[30px] font-medium">Date</p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>

        <div className=" overflow-x-auto scroll-container">
          <div className="flex gap-3 md:gap-20 flex-nowrap ">
            {[
              {
                title: "Other events",
                date: "20 February 2023",
                description: "ABRI Writing Boost",
              },
              {
                title: "Lectures",
                date: "20 February 2023",
                description: "ABRI lunch seminar Dr. Paula Jarzabkowski",
              },
              {
                title: "Social events",
                date: "20 February 2023",
                description: "Board game night - Life is Better in 3D",
              },
              {
                title: "Other events",
                date: "20 February 2023",
                description: "VU Pride TalkS!",
              },
            ].map((e, i) => (
              <Link href="/" key={i} className="block">
                <div className=" w-40 md:w-56 space-y-1">
                  <p className="text-lg leading-[30px] font-light underline">
                    {e.title}
                  </p>
                  {i == 1 && (
                    <p className="text-lg leading-[30px] font-light underline">
                      Workshop
                    </p>
                  )}
                  {i == 1 && (
                    <p className="text-lg leading-[30px] font-light underline">
                      Sport
                    </p>
                  )}
                  <h5 className="text-lg leading-[30px] font-bold text-brandBlue">
                    {e.date}
                  </h5>
                  <p className="text-lg leading-[30px] font-light">
                    {e.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 3xl:hidden">
          <Link
            href="/"
            className="flex items-center justify-between h-full gap-4 p-4 "
          >
            <span className="text-base font-bold">View Calendar</span>
            <AiOutlineArrowRight className="text-base" />
          </Link>
        </div>
        <div className="hidden 3xl:flex items-center justify-between border-t border-t-brandBlue">
          <Link
            href="/"
            className="flex items-center justify-between h-full gap-4 py-4 "
          >
            <span className="text-base font-bold">View Calendar</span>
            <AiOutlineArrowRight className="text-base" />
          </Link>
          <div className="flex items-center gap-4 p-4 bg-[#dff2fd] h-[60px]">
            <MdOutlineArrowBackIosNew className="cursor-pointer hover:text-white" />
            <MdArrowForwardIos className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calendar;
