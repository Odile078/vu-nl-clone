import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "../Wrapper/Wrapper";

const Tour = () => {
  return (
    <Wrapper className=" bg-[#faf7f5]">
      <div className="py-7.5 md:py-[60px] xl:py-[90px] space-y-10">
        <h2 className="text-[38px] leading-[56px] font-light text-brandGreen">
          Take a look
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "VU Campus Tour",
            },
          ].map((e, i) => (
            <div
              key={i}
              div
              className="flex flex-col justify-between h-40 p-5 md:p-7.5 bg-white md:h-52"
            >
              <h5 className="text-2xl leading-[36px] font-light text-brandGreen">
                {e.title}
              </h5>
              <div className="flex items-end justify-end w-full">
                <AiOutlineArrowRight className="text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Tour;
