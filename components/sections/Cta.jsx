import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";

const Cta = ({ title, action, white }) => {
  return (
    <Wrapper className={` px-5 py-7.5 md:py-[60px] ${white ? "bg-white" : ""}`}>
      <div className="flex flex-col justify-between gap-3 px-5 md:px-[60px] pt-7.5 md:pt-[45px] pb-[45px] bg-brandBlue md:flex-row md:items-center">
        <p className="text-2xl leading-[36px] font-semibold text-white text-center md:text-start">
          {title}
        </p>
        <Link
          href="/"
          className="block py-[15px] px-7.5 text-2xl leading-[30px] font-semibold bg-white text-center md:text-start"
        >
          {action}
        </Link>
      </div>
    </Wrapper>
  );
};

export default Cta;
