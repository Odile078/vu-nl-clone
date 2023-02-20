import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
const WeAre = () => {
  return (
    <Wrapper className="bg-white ">
      <div className="py-10 space-y-10">
        <h2 className="text-3xl text-orange-600">We are VU Amsterdam</h2>
        <div className="overflow-hidden">
          <div className="flex flex-nowrap">
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
                className="flex w-5/6 transition-all duration-200 ease-in-out hover:shadow-3xl all lg:w-96"
              >
                <div className="w-5/6 p-5 space-y-6 bg-white lg:w-96">
                  <Image
                    src={e.img}
                    width={600}
                    height={600}
                    alt="person"
                    className="object-cover object-center h-80"
                  />
                  <div className="space-y-6 bg-white ">
                    <h5 className="text-lg text-orange-600">{e.title}</h5>
                    <p className="text-base">Read more</p>
                    <div className="flex items-end justify-end w-full">
                      <AiOutlineArrowRight className="text-base" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Link
            href="/"
            className="flex items-center justify-between h-full gap-4 p-4 "
          >
            <span className="text-base font-bold">News overview</span>
            <AiOutlineArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default WeAre;
