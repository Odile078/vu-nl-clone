import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/VU-logo-nobg.svg";
import { RiSearchLine, RiUser3Fill } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import Wrapper from "../Wrapper/Wrapper";

const Header = () => {
  return (
    <header className="h-[75px] mx-auto max-w-5.5xl relative">
      <div className="fixed w-full z-30 h-[75px] shadow-3xl top-0 max-w-5.5xl m-auto flex bg-white">
        <nav className="flex items-center justify-between w-full bg-white">
          <div className="ml-5 md:ml-[30px]">
            <Link href={"/"} className="block">
              <Image
                src={Logo}
                alt="logo"
                className="object-cover object-center"
              />
            </Link>
          </div>
          <ul className="flex gap-[30px] px-5 md:px-[30px] bg-brandGrey h-full items-center">
            <li>
              <Link href="/" className="block text-2xl text-brandBlack">
                NL
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <RiUser3Fill className="text-brandBlack" />
              </Link>
            </li>
            <li>
              <Link href="/" className="block">
                <RiSearchLine className="text-brandBlack" />
              </Link>
            </li>
            <li>
              <button>
                <BiMenu className="text-brandBlack" />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* <nav className="flex items-center justify-between">
            <Link
              href="/team"
              className="block p-2 text-base font-bold text-white border-2 border-white"
            >
              Project A
            </Link>
            <ul className="hidden gap-6 text-lg text-white lg:flex">
              {[
                "Portfolio",
                "Team",
                "Cases",
                "Career",
                "News",
                "Knowledge",
              ].map((e, i) => (
                <li
                  key={i}
                  className="relative font-normal hover:after:content-['']  hover:after:slide-out-right hover:after:absolute after:-bottom-2 hover:after:w-full after:h-0.5 after:inset-x-0 after:bg-white"
                >
                  {e}
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <BiMenu className="text-white" />
            </div>
          </nav> */}
    </header>
  );
};

export default Header;
