import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
const Feature = () => {
  return (
    <Wrapper className="bg-white ">
      <div className="grid grid-cols-1 gap-3 py-10 md:grid-cols-3">
        {[
          {
            title: "VU main menu",
            titleColor: "text-brandBlue",
            list: [
              "Home",
              "Education",
              "Research",
              "About VU Amsterdam",
              " University Library",
              "VU Press Office",
              "Alumni",
            ],
          },
          {
            title: "Most Searched",
            titleColor: "text-orange-600",
            list: [
              "Home",
              "Education",
              "Research",
              "About VU Amsterdam",
              " University Library",
              "VU Press Office",
              "Alumni",
            ],
          },
          {
            title: "Featured",
            titleColor: "text-green-900",
            list: [
              "Home",
              "Education",
              "Research",
              "About VU Amsterdam",
              " University Library",
              "VU Press Office",
              "Alumni",
            ],
          },
        ].map((e, i) => (
          <div key={i} className="space-y-4 bg-white">
            <div>
              <Link
                href="/"
                className="flex items-center justify-between h-full p-4 bg-white"
              >
                <span className={`text-2xl text-brandBlue ${e.titleColor}`}>
                  {e.title}
                </span>
              </Link>
            </div>
            <ul className="p-4 space-y-2 shadow-3xl">
              {e?.list?.map((e, i) => (
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
        ))}
      </div>
    </Wrapper>
  );
};

export default Feature;
