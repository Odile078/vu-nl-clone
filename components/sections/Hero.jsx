import Wrapper from "@/components/Wrapper/Wrapper";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiSearchLine, RiUser3Fill } from "react-icons/ri";
const Hero = () => {
  return (
    <section className=" bg-slate-100">
      <Wrapper>
        <div className="relative max-w-[80%] py-7.5 md:py-20 mx-2 md:mx-10">
          <h1 className="text-4xl font-light">
            You don’t just become something, you become someone
          </h1>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="grid grid-cols-1 px-5 md:grid-cols-2 md:-mb-10">
          <div className="p-10 bg-brandBlue ">
            <form className="flex items-center justify-between border-b border-white">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="text-lg text-white bg-transparent placeholder:text-white focus:text-white focus:bg-transparent focus:border-0 focus:outline-none"
                />
              </div>
              <button type="button" className="p-1">
                <RiSearchLine className="text-white" />
              </button>
            </form>
          </div>
          <div>
            <Link
              href="/"
              className="flex items-center justify-between h-full p-4 bg-white"
            >
              <span className="text-lg text-brandBlue">About VU Amsterdam</span>
              <AiOutlineArrowRight className="text-brandBlue" />
            </Link>
          </div>
        </div>
      </Wrapper>
      <div
        className="bg-center bg-cover bg-heroImage w-screen h-[170px] md:h-[460px] xl:h-[720px] max-w-[2200px] mx-auto"
        title="Students studying and laughing together outside"
      ></div>
    </section>
  );
};

export default Hero;
