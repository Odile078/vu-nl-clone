import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "../Wrapper/Wrapper";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
const Impact = () => {
  return (
    <div>
      <Wrapper className=" bg-[#faf7f5] shadow-4xl">
        <div className="-mx-5 py-10 space-y-10">
          <h2 className="px-5 text-[38px] leading-[56px] font-light text-brandOrange">
            Impact
          </h2>
          <div className="h-[188px] md:h-[575px] relative">
            <Image
              src="/images/com_Davide-Ianuzzi.jpeg"
              width={900}
              height={600}
              alt="person"
              className="object-cover object-center w-full h-[188px] md:h-[575px]"
            />
            <div className="flex items-center justify-end gap-4 mt-6 absolute bottom-0 right-0 md:hidden">
              <div className="flex items-center gap-4 p-4 bg-[#fcd3b6]">
                <MdOutlineArrowBackIosNew className="cursor-pointer" />
                <MdArrowForwardIos className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="items-center justify-center md:flex ">
            <div className="p-4 md:px-7.5 py-[35px] space-y-6 bg-white md:w-4/6 md:-mt-24 md:z-20 card-cut">
              <h5 className="text-[24px] leading-[36px] font-light text-brandOrange">
                Science to impact
              </h5>
              <p className="text-lg leading-[30px]">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <Link
                href="/"
                className="flex items-center h-full gap-4 bg-white"
              >
                <span className="text-base font-bold">Read more</span>
                <AiOutlineArrowRight className="text-base" />
              </Link>
              <div className="hidden md:flex items-center justify-end gap-4 mt-6">
                <div className="flex items-center">
                  <RxDotFilled className="text-6xl text-brandOrange" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#fcd3b6]">
                  <MdOutlineArrowBackIosNew className="cursor-pointer" />
                  <MdArrowForwardIos className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className=" bg-white shadow-4xl">
        <div className="grid grid-cols-1 gap-3 md:px-10 py-7.5 md:py-[60px] xl:py-[90px] xl:grid-cols-2">
          <Link href="/" className="flex">
            <div className="w-full py-[25px] px-7.5 flex flex-col gap-5 bg-white shadow-3xl">
              <h5 className="text-[24px] leading-[36px] text-brandGreen font-light">
                Ukraine
              </h5>
              <p className="text-lg leading-[30px] font-light">
                Information and support
              </p>
              <div className="flex items-end justify-end w-full">
                <AiOutlineArrowRight className="text-base ml-[15px] mt-[5px]" />
              </div>
            </div>
          </Link>
          <Link href="/" className="flex">
            <div className="w-full py-[25px] px-7.5 flex flex-col justify-between gap-5 bg-white shadow-3xl">
              <h5 className="text-[24px] leading-[36px] font-light text-brandPurple">
                VU & Corona
              </h5>
              <div className="flex items-end justify-end w-full">
                <AiOutlineArrowRight className="text-base ml-[15px] mt-[5px]" />
              </div>
            </div>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Impact;
