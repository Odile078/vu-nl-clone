import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "../Wrapper/Wrapper";

const Impact = () => {
  return (
    <div>
      <Wrapper>
        <div className="py-10 space-y-10">
          <h2 className="text-3xl text-orange-600">impact</h2>
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
              <h5 className="text-3xl text-orange-600">Science to impact</h5>
              <p className="text-base">
                An interview with entrepreneurial scientist Davide Iannuzzi,
                Chief Impact Officer of Vrije Universiteit Amsterdam
              </p>
              <Link
                href="/"
                className="flex items-center justify-between h-full p-4 bg-white"
              >
                <span className="text-base ">Read more</span>
                <AiOutlineArrowRight className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="space-y-3 bg-gray-100 ">
        <div className="px-10 py-6 space-y-4">
          <Link href="/" className="block">
            <div className="p-4 space-y-6 bg-white">
              <h5 className="text-lg text-green-700">Ukraine</h5>
              <p className="text-base">Information and support</p>
              <div className="flex items-end justify-end w-full">
                <AiOutlineArrowRight className="text-base" />
              </div>
            </div>
          </Link>
          <Link href="/" className="block">
            <div className="p-4 space-y-6 bg-white">
              <h5 className="text-lg text-violet-800">VU & Corona</h5>
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
