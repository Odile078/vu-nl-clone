import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaGraduationCap,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const Feature = () => {
  return (
    <Wrapper className=" bg-white shadow-4xl">
      <div className="grid grid-cols-1 gap-3 -mx-3 md:mx-0  py-10 md:grid-cols-3">
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
            list: ["Campus tour", "Study guide", "VU Magazine"],
          },
        ].map((e, i) => (
          <div key={i} className="flex flex-col space-y-4 bg-white">
            <div>
              <Link
                href="/"
                className="flex items-center justify-between h-full p-4 bg-white"
              >
                <span
                  className={`text-[38px] leading-[56px] font-light text-brandBlue ${e.titleColor}`}
                >
                  {e.title}
                </span>
              </Link>
            </div>
            <div
              className={`flex flex-col justify-between flex-1 bg-white ${
                i == 2 ? "md:shadow-3xl" : ""
              }`}
            >
              <ul className={`p-4 space-y-2  ${i == 2 ? "" : "md:shadow-3xl"}`}>
                {e?.list?.map((e, i) => (
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
              {i == 2 && (
                <ul className="flex gap-2 px-4 py-6">
                  <li>
                    <Link href="/" className="block p-1 rounded bg-brandBlue">
                      <BsInstagram className="text-4xl text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="block p-1 rounded bg-brandBlue">
                      <FaLinkedinIn className="text-4xl text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="block p-1 rounded bg-brandBlue">
                      <FaFacebookF className="text-4xl text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="block p-1 rounded bg-brandBlue">
                      <FaTwitter className="text-4xl text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="block p-1 rounded bg-brandBlue">
                      <FaYoutube className="text-4xl text-white" />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Feature;
