import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "../Wrapper/Wrapper";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
const Impact = () => {
  return (
    <div>
      <Wrapper>
        <div className="py-10 space-y-10">
          <h2 className="text-[38px] leading-[56px] font-light text-brandOrange">
            impact
          </h2>
          <div className="h-[188px] md:h-[575px] relative">
            <Image
              src="/images/com_Davide-Ianuzzi.jpeg"
              width={900}
              height={600}
              alt="person"
              className="object-cover object-center w-full h-[188px] md:h-[575px]"
            />
          </div>
          <div className="items-center justify-center md:flex">
            <div className="p-4 space-y-6 bg-white md:w-4/6 md:-mt-24 md:z-20">
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
              <div className="flex items-center justify-end gap-4 mt-6">
                <div className="flex items-center">
                  <RxDotFilled className="text-6xl text-brandOrange" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                  <RxDotFilled className="text-4xl text-orange-300" />
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#fcd3b6]">
                  <MdOutlineArrowBackIosNew />
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="bg-white ">
        <div className="grid grid-cols-1 gap-3 px-10 py-[90px] xl:grid-cols-2">
          <Link href="/" className="flex">
            <div className="w-full p-[25px] px-7.5 space-y-6 bg-white shadow-3xl">
              <h5 className="text-[24px] leading-[36px] text-brandGreen font-light">
                Ukraine
              </h5>
              <p className="text-lg leading-[30px] font-light">
                Information and support
              </p>
              <div className="flex items-end justify-end w-full">
                <AiOutlineArrowRight className="text-base" />
              </div>
            </div>
          </Link>
          <Link href="/" className="flex">
            <div className="w-full p-4 space-y-6 bg-white shadow-3xl">
              <h5 className="text-[24px] leading-[36px] font-light text-brandPurple">
                VU & Corona
              </h5>
              <div className="flex items-end justify-end w-full">
                <AiOutlineArrowRight className="text-base" />
              </div>
            </div>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Impact;
