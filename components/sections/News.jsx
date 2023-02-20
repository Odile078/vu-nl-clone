import Image from "next/image";
import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
const News = () => {
  return (
    <Wrapper className=" bg-[#faf7f5]">
      <div className="py-10 space-y-10">
        <h2 className="text-[38px] leading-[56px] font-light text-brandPurple">
          News
        </h2>
        <div className="hidden grid-cols-2 gap-3 md:grid">
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                img: "/images/2N3337X.jpeg",
                date: "08 Feb 2023",
                title: "Earthquakes Turkey and Syria",
              },
              {
                img: "/images/2N3337X.jpeg",
                date: "08 Feb 2023",
                title: "Earthquakes Turkey and Syria",
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
          <div className="grid grid-cols-1 m-2 gap3 md:m-0">
            {[
              {
                img: "/images/2N3337X.jpeg",
                date: "08 Feb 2023",
                title: "Earthquakes Turkey and Syria",
              },
              {
                img: "/images/2N3337X.jpeg",
                date: "08 Feb 2023",
                title: "Earthquakes Turkey and Syria",
              },
              {
                img: "/images/2N3337X.jpeg",
                date: "08 Feb 2023",
                title: "Earthquakes Turkey and Syria",
              },
            ].map((e, i) => (
              <div key={i} className="flex gap-6 ">
                <Image
                  src={e.img}
                  width={600}
                  height={600}
                  alt="person"
                  className="object-cover object-center w-32 h-32"
                />
                <div className="flex-1 p-4 space-y-6">
                  <h5 className="text-lg leading-[30px] font-bold text-brandPurple">
                    {e.date}
                  </h5>
                  <p className="text-lg leading-[30px] font-light">{e.title}</p>
                  <div className="flex items-end justify-end w-full">
                    <AiOutlineArrowRight className="text-base" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 m-2 gap3 md:m-0 md:hidden">
          {[
            {
              img: "/images/2N3337X.jpeg",
              date: "08 Feb 2023",
              title: "Earthquakes Turkey and Syria",
            },
            {
              img: "/images/2N3337X.jpeg",
              date: "08 Feb 2023",
              title: "Earthquakes Turkey and Syria",
            },
            {
              img: "/images/2N3337X.jpeg",
              date: "08 Feb 2023",
              title: "Earthquakes Turkey and Syria",
            },
            {
              img: "/images/2N3337X.jpeg",
              date: "08 Feb 2023",
              title: "Earthquakes Turkey and Syria",
            },
            {
              img: "/images/2N3337X.jpeg",
              date: "08 Feb 2023",
              title: "Earthquakes Turkey and Syria",
            },
          ].map((e, i) => (
            <div key={i} className="flex gap-6 ">
              <Image
                src={e.img}
                width={600}
                height={600}
                alt="person"
                className="object-cover object-center w-32 h-32"
              />
              <div className="flex-1 p-4 space-y-6">
                <h5 className="text-lg leading-[30px] font-bold text-brandPurple">
                  {e.date}
                </h5>
                <p className="text-lg leading-[30px] font-light">{e.title}</p>
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
            <span className="text-base font-bold">News overview</span>
            <AiOutlineArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
