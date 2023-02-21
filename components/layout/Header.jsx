import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/VU-logo-nobg.svg";
import { RiSearchLine, RiUser3Line, RiMenuFill } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import Wrapper from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { CiUser, CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen]);
  return (
    <header className="h-[75px] mx-auto max-w-5.5xl 3xl:max-w-[1252px] 4xl:max-w-[1600px] relative">
      <div className="fixed w-full z-30 h-[75px]  top-0 max-w-5.5xl 3xl:max-w-[1252px] 4xl:max-w-[1600px] m-auto flex bg-white">
        <nav className="flex items-center justify-between w-full bg-white shadow-3xl">
          <div className="ml-5 md:ml-[30px]">
            <Link href={"/"} className="block">
              <Image
                src={Logo}
                alt="logo"
                className="object-cover object-center "
              />
            </Link>
          </div>
          <ul className="flex gap-2 md:gap-[30px] px-5 md:px-[30px] bg-brandGrey h-full items-center">
            <li>
              <Link href="/" className="block text-2xl font-light">
                NL
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <CiUser className="text-2xl text-brandBlack " />
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <CiSearch className="text-2xl  text-brandBlack" />
              </Link>
            </li>
            <li>
              <button onClick={handleOpenMenu}>
                {/* <RiMenuFill className="mt-1 text-2xl text-brandBlack" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.1}
                  stroke="currentColor"
                  className="w-8 h-8 text-brandBlack"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {menuIsOpen ? (
        <section className="fixed inset-0 z-50 grid h-screen mx-auto bg-white max-w-7xl">
          <div className="overflow-y-auto">
            <div
              onClick={handleOpenMenu}
              className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0 group"
            >
              <MdClose className="text-4xl group-hover:rotate-180 transform rotate-icon duration-700 ease-in-out " />
            </div>
            <div className="">
              <div className="flex flex-col justify-between space-y-10 cursor-pointer pt-52 px-36">
                {[
                  "Study at VU Amsterdam",
                  "Research",
                  "About VU Amsterdam",
                  "VU press office",
                  "Alumni",
                  "Student",
                  "Employee",
                ].map((e, i) => {
                  return (
                    <Link key={i} href={e}>
                      <div className="flex justify-between max-w-sm">
                        <p className="text-[24px] leading-[30px] whitespace-nowrap font-semibold">
                          {" "}
                          {e}
                        </p>
                        {i === 0 || i === 1 ? (
                          <AiOutlinePlus className="text-2xl" />
                        ) : (
                          <BsArrowRight className="text-2xl" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}
      <div className=""></div>
    </header>
  );
};

export default Header;
