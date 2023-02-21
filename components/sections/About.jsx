import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import {
  HiOutlineGlobeEuropeAfrica,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { CiMedal } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import Wrapper from "../Wrapper/Wrapper";
const About = () => {
  return (
    <div className="relative overflow-hidden">
      <Wrapper className=" bg-white relative z-20">
        <div className="flex md:items-center justify-between px-2 gap-2 md:px-6 py-[15px] md:py-7.5 md:-mt-[60px]">
          {[
            {
              icon: <FaGraduationCap className="text-3xl text-brandBlue" />,
              description: "31.704 students",
            },
            {
              icon: (
                <HiOutlineGlobeEuropeAfrica className="text-3xl text-brandBlue" />
              ),
              description: "5.190 international students",
            },
            {
              icon: <CiMedal className="text-4xl text-brandBlue" />,
              description: "459 PhD defences",
            },
            {
              icon: (
                <IoExtensionPuzzleOutline className="text-3xl text-brandBlue" />
              ),
              description: "9 faculties",
            },
          ].map((e, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 lg:flex-row md:justify-center"
            >
              {e.icon}
              <p className="text-lg leading-[20px] font-medium text-center md:text-start">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>

      <Wrapper className=" bg-white relative z-20">
        <div className="p-[85px]"></div>
      </Wrapper>
      <Wrapper className=" shadow-none relative z-20">
        {/* <div className="hidden md:block mx-auto z-10 absolute inset-0 h-full bg-[#faf7f5] w-5.5xl 3xl:w-[1252px] 4xl:w-[1700px]"></div> */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 -mt-[200px] md:-mb-[10px] -mb[7.5px] py-[30px] md:py-[60px]">
          {[
            {
              title: "Education",
              lists: [
                "Bachelor's programmes",
                "Master's programmes",
                "Honours programme",
                "Education for professionals",
                "Study guide",
              ],
            },
            {
              title: "Research",
              lists: [
                "Research highlights",
                "Valorisation",
                "Our scientists",
                "Prizes and distinctions",
                "Interdisciplinary research institutes",
              ],
            },
          ].map((e, i) => (
            <div key={i} className="space-y-4 bg-white shadow-3xl">
              <div>
                <Link
                  href="/"
                  className="flex items-center justify-between h-full p-5 md:p-7.5 bg-white"
                >
                  <span className="text-[38px] leading-[56px] text-brandBlue">
                    {e?.title}
                  </span>
                  <HiOutlineArrowRight className="text-4xl text-brandBlue" />
                </Link>
              </div>
              <ul className="p-5 md:p-7.5 space-y-2">
                {e?.lists?.map((e, i) => (
                  <li key={i} className="">
                    <Link
                      href="/"
                      className="flex items-center justify-between h-full bg-white"
                    >
                      <span className="text-lg leading-[30px] ">{e}</span>
                      <HiOutlineArrowRight className="ml-[5px] text-lg mt-[5px]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
      <Wrapper>
        <div className="hidden md:block mx-auto z-10 absolute inset-0 h-full bg-[#faf7f5] w-5.5xl 3xl:w-[1252px] 4xl:w-[1600px]"></div>
      </Wrapper>
    </div>
  );
};

export default About;
