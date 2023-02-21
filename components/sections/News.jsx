import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
const News = () => {
  return (
    <Wrapper className=" bg-[#faf7f5] shadow-4xl">
      <div className="py-7.5 md:py-[60px] xl:py-[90px] space-y-[15px]">
        <h2 className="text-[38px] leading-[56px] font-light text-brandPurple">
          News
        </h2>
        <div className="hidden grid-cols-3 gap-10 md:grid">
          <div className="grid grid-cols-1 col-span-2 gap-6">
            {[
              {
                img: "/images/2N3337X.jpeg",
                date: "08 Feb 2023",
                title: "Earthquakes Turkey and Syria",
              },
              {
                img: "/images/birds.png",
                date: "08 Feb 2023",
                title: "Robot bird gives singing lessons to zebra finches",
              },
            ].map((e, i) => (
              <div key={i} className="grid grid-cols-2 gap-3">
                <Image
                  src={e.img}
                  width={600}
                  height={600}
                  alt="person"
                  className="object-cover object-center h-52"
                />
                <div className="p-4 space-y-6 ">
                  <h5 className="text-lg leading-[30px] font-bold text-brandPurple">
                    {e.date}
                  </h5>
                  <p className="text-2xl leading-[30px] font-light">
                    {e.title}
                  </p>
                  <div className="flex items-end justify-end w-full">
                    <AiOutlineArrowRight className="text-base" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 m-2 gap-3 md:m-0">
            {[
              {
                img: "/images/flag.jpeg",
                date: "08 Feb 2023",
                title:
                  "EU grant to improve mental well-being of Ukrainian refugees",
              },
              {
                img: "/images/city.jpeg",
                date: "08 Feb 2023",
                title: "Sapiens partnership ended",
              },
              {
                img: "/images/laughing.png",
                date: "08 Feb 2023",
                title: "ERC Consolidator Grant for Wouter...",
              },
            ].map((e, i) => (
              <div key={i} className="flex gap-3 ">
                <Image
                  src={e.img}
                  width={600}
                  height={600}
                  alt="person"
                  className="object-cover object-center w-32 h-32"
                />
                <div className="flex-1  space-y-6">
                  <h5 className="text-lg leading-[30px] font-bold text-brandPurple">
                    {e.date}
                  </h5>

                  <div className="flex items-end gap-4 justify-between ">
                    <p className="text-lg leading-[30px] font-light w-[80%]">
                      {e.title}
                    </p>
                    <AiOutlineArrowRight className="text-base block" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[35px] md:m-0 md:hidden">
          {[
            {
              img: "/images/2N3337X.jpeg",
              date: "08 Feb 2023",
              title: "Earthquakes Turkey and Syria",
            },
            {
              img: "/images/birds.png",
              date: "08 Feb 2023",
              title: "Robot bird gives singing lessons to zebra finches",
            },
            {
              img: "/images/flag.jpeg",
              date: "08 Feb 2023",
              title:
                "EU grant to improve mental well-being of Ukrainian refugees",
            },
            {
              img: "/images/city.jpeg",
              date: "08 Feb 2023",
              title: "Sapiens partnership ended",
            },
            {
              img: "/images/laughing.png",
              date: "08 Feb 2023",
              title: "ERC Consolidator Grant for Wouter...",
            },
          ].map((e, i) => (
            <div key={i} className="flex gap-[15px] ">
              <Image
                src={e.img}
                width={600}
                height={600}
                alt="person"
                className="object-cover object-center w-32 h-32"
              />
              <div className="flex-1 space-y-6">
                <h5 className="text-lg leading-[30px] font-bold text-brandPurple">
                  {e.date}
                </h5>
                <p className="text-lg leading-[30px] font-light mr-[25px]">
                  {e.title}
                </p>
                <div className="flex items-end justify-end w-full">
                  <AiOutlineArrowRight className="text-base" />
                </div>
              </div>
            </div>
          ))}
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
    </Wrapper>
  );
};

export default News;
