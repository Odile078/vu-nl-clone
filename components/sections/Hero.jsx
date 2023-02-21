import Wrapper from "@/components/Wrapper/Wrapper";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiSearchLine, RiUser3Fill } from "react-icons/ri";
const Hero = () => {
  return (
    <section className="">
      <Wrapper className="bg-white ">
        <div className="relative mx-2 md:mx-auto max-w-[80%] py-7.5  md:mx-10-">
          <h1 className="text-[33px] leading-[40px] md:text-[45px] md:leading-[60px] font-light">
            You don’t just become something, you become someone
          </h1>
        </div>
      </Wrapper>
      <Wrapper className="bg-white ">
        <div className="-mx-5 grid 2xl:max-w-[83%] grid-cols-1 md:mx-auto shadow-3xl md:grid-cols-2 md:-mb-10">
          <div className="p-6 bg-brandBlue ">
            <form className="flex items-center justify-between border-b border-white">
              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="text-[22px] font-light leading-[34px] text-white bg-transparent placeholder:text-white focus:text-white focus:bg-transparent focus:border-0 focus:outline-none"
                />
              </div>
              <button type="button" className="p-1">
                <RiSearchLine className="text-2xl text-white" />
              </button>
            </form>
          </div>
          <div>
            <Link
              href="/"
              className="flex items-center justify-between h-full p-4 bg-white"
            >
              <span className="text-[22px] leading-[30px] font-light text-brandBlue">
                About VU Amsterdam
              </span>
              <AiOutlineArrowRight className="text-lg text-brandBlue" />
            </Link>
          </div>
        </div>
      </Wrapper>
      <div
        className="bg-center bg-cover bg-heroImage w-screen h-[170px] md:h-[460px] 2xl:h-[720px] max-w-[2200px] mx-auto"
        title="Students studying and laughing together outside"
      ></div>
    </section>
  );
};

export default Hero;
