import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
const Calendar = () => {
  return (
    <Wrapper className="bg-white ">
      <div className="py-10 space-y-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <h2 className="text-3xl text-cyan-900">Calendar</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex items-center justify-between px-4 py-2 bg-white">
              <p className="text-lg font-bold">All categories</p>
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-white">
              <p className="text-lg font-bold">Date</p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-20 flex-nowrap ">
            {[
              {
                title: "PhD Defences",
                date: "20 February 2023",
                description: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "PhD Defences",
                date: "20 February 2023",
                description: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "PhD Defences",
                date: "20 February 2023",
                description: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "PhD Defences",
                date: "20 February 2023",
                description: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "PhD Defences",
                date: "20 February 2023",
                description: "PhD defence by T.J.H. Jonkers",
              },
              {
                title: "PhD Defences",
                date: "20 February 2023",
                description: "PhD defence by T.J.H. Jonkers",
              },
            ].map((e, i) => (
              <Link href="/" key={i} className="block">
                <div className="w-56 p-4 space-y-3">
                  <h5 className="text-lg text-brandBlue">{e.date}</h5>
                  <p className="text-base underline">{e.title}</p>
                  <p className="text-2xl">{e.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Link
            href="/"
            className="flex items-center justify-between h-full gap-4 p-4 "
          >
            <span className="text-base font-bold">View Calendar</span>
            <AiOutlineArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calendar;
