import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Wrapper from "../Wrapper/Wrapper";

const Tour = () => {
  return (
    <Wrapper>
      <div className="py-10 space-y-10">
        <h2 className="text-3xl text-green-900">Take a look</h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              title: "VU Campus Tour",
            },
          ].map((e, i) => (
            <div
              key={i}
              div
              className="flex flex-col justify-between p-4 bg-white h-52"
            >
              <h5 className="text-lg text-green-900">{e.title}</h5>

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
