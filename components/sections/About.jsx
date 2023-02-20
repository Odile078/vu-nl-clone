import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import Wrapper from "../Wrapper/Wrapper";
const About = () => {
  return (
    <Wrapper>
      <div className="px-4 py-10 space-y-10 ">
        <div className="flex items-center justify-between px-6">
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">31.704 students</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">5.190 international students</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">31.704 students</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">31.704 students</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="space-y-4 bg-white">
            <div>
              <Link
                href="/"
                className="flex items-center justify-between h-full p-4 bg-white"
              >
                <span className="text-2xl text-brandBlue">Education</span>
                <AiOutlineArrowRight className="text-3xl text-brandBlue" />
              </Link>
            </div>
            <ul className="p-4 space-y-2">
              {[
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
              ].map((e, i) => (
                <li key={i} className="">
                  <Link
                    href="/"
                    className="flex items-center justify-between h-full bg-white"
                  >
                    <span className="text-base ">{e}</span>
                    <AiOutlineArrowRight className="" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 bg-white">
            <div>
              <Link
                href="/"
                className="flex items-center justify-between h-full p-4 bg-white"
              >
                <span className="text-2xl text-brandBlue">Research</span>
                <AiOutlineArrowRight className="text-3xl text-brandBlue" />
              </Link>
            </div>
            <ul className="p-4 space-y-2">
              {[
                "Research highlights",
                "Valorisation",
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
              ].map((e, i) => (
                <li key={i} className="">
                  <Link
                    href="/"
                    className="flex items-center justify-between h-full bg-white"
                  >
                    <span className="text-base ">{e}</span>
                    <AiOutlineArrowRight className="" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
