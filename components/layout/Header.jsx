import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/VU-logo-nobg.svg";
import { RiSearchLine, RiUser3Line, RiMenuFill } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import Wrapper from "../Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => setMenuIsOpen(!menuIsOpen);
  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "scroll");
  }, [menuIsOpen]);
  return (
    <header className="h-[75px] mx-auto max-w-5.5xl relative">
      <div className="fixed w-full z-30 h-[75px]  top-0 max-w-5.5xl m-auto flex bg-white">
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
                <RiUser3Line className="text-xl text-brandBlack" />
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <RiSearchLine className="text-xl" />
              </Link>
            </li>
            <li>
              <button onClick={handleOpenMenu}>
                <RiMenuFill className="mt-1 text-2xl text-brandBlack" />
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
              className="bg-[#F2EFED] ml-auto p-5 cursor-pointer absolute top-0 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="30px"
                height="30px"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#000000"
              >
                <line x1="16" y1="16" x2="48" y2="48" />
                <line x1="48" y1="16" x2="16" y2="48" />
              </svg>
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
    </header>
  );
};

export default Header;
