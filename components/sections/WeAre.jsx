import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
const WeAre = () => {
  return (
    <div className="py-7.5 md:py-[60px] lg:py-[90px] space-y-10 bg-white max-w-5.5xl 3xl:max-w-[1252px] 4xl:max-w-[1600px] mx-auto">
      <Wrapper className="bg-white ">
        <h2 className="text-3xl text-brandOrange font-light">
          We are VU Amsterdam
        </h2>
      </Wrapper>

      <div className="overflow-hidden ">
        <div className="-ml-52 flex flex-nowrap gap-7.5">
          {[
            {
              img: "/images/2N3337X.jpeg",
              title: "NWO Spinoza Prize winner Yvette van Kooyk",
            },
            {
              img: "/images/2N3337X.jpeg",
              title: "NWO Spinoza Prize winner Yvette van Kooyk",
            },
            {
              img: "/images/2N3337X.jpeg",
              title: "NWO Spinoza Prize winner Yvette van Kooyk",
            },
            {
              img: "/images/2N3337X.jpeg",
              title: "NWO Spinoza Prize winner Yvette van Kooyk",
            },
          ].map((e, i) => (
            <Link
              key={i}
              href="/"
              className="flex transition-all duration-200 ease-in-out w-96 hover:shadow-3xl all lg:w-96"
            >
              <div className="space-y-6 bg-white w-52 lg:w-96">
                <Image
                  src={e.img}
                  width={600}
                  height={600}
                  alt="person"
                  className="object-cover object-center h-80"
                />
                <div className="space-y-6 bg-white ">
                  <h5 className="text-[22px] leading-[32px] text-orange-600 font-light">
                    {e.title}
                  </h5>
                  <p className="text-lg leading-[30px] font-medium">
                    Read more
                  </p>
                  <div className="flex items-end justify-end w-full">
                    <AiOutlineArrowRight className="text-base" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <div className="flex items-center gap-4 p-4 bg-[#fcd3b6]">
            <MdOutlineArrowBackIosNew className="cursor-pointer" />
            <MdArrowForwardIos className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link
          href="/"
          className="flex items-center justify-between h-full gap-4 p-4 "
        >
          <span className="text-lg leading-[30px] font-medium">
            News overview
          </span>
          <AiOutlineArrowRight className="text-base" />
        </Link>
      </div>
    </div>
  );
};

export default WeAre;
