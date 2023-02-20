import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import Wrapper from "../Wrapper/Wrapper";
const About = () => {
  return (
    <>
      <Wrapper className="bg-white ">
        <div className="flex items-center justify-between px-2 gap-2 md:px-6 py-7.5 -mt-[60px]">
          <div className="flex flex-col items-center gap-2 lg:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">31.704 students</p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">5.190 international students</p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">31.704 students</p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row md:justify-center">
            <FaGraduationCap className="text-3xl text-brandBlue" />
            <p className="text-base font-bold">31.704 students</p>
          </div>
        </div>
      </Wrapper>
      <Wrapper className=" bg-white p-[85px]"></Wrapper>
      <Wrapper>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 -mt-[200px] -mb-[10px] py-[60px]">
          {[
            {
              title: "Education",
              lists: [
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
              ],
            },
            {
              title: "Research",
              lists: [
                "Research highlights",
                "Valorisation",
                "Bachelor's programmes",
                "Bachelor's programmes",
                "Bachelor's programmes",
              ],
            },
          ].map((e, i) => (
            <div key={i} className="space-y-4 bg-white shadow-3xl">
              <div>
                <Link
                  href="/"
                  className="flex items-center justify-between h-full p-4 bg-white"
                >
                  <span className="text-[38px] leading-[56px] text-brandBlue">
                    {e?.title}
                  </span>
                  <AiOutlineArrowRight className="text-4xl text-brandBlue" />
                </Link>
              </div>
              <ul className="p-4 space-y-2">
                {e?.lists?.map((e, i) => (
                  <li key={i} className="">
                    <Link
                      href="/"
                      className="flex items-center justify-between h-full bg-white"
                    >
                      <span className="text-lg leading-[30px] ">{e}</span>
                      <AiOutlineArrowRight className="" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <div className="space-y-4 bg-white">
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
          </div> */}
        </div>
      </Wrapper>
    </>
  );
};

export default About;
