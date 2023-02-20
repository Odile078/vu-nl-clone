import Link from "next/link";
import Wrapper from "../Wrapper/Wrapper";

const Cta = ({ title, action, white }) => {
  return (
    <Wrapper className={` p-6 ${white ? "bg-white" : ""}`}>
      <div className="flex flex-col justify-between gap-3 p-12 px-6 py-10 m-3 bg-brandBlue md:flex-row md:items-center">
        <p className="text-2xl font-bold text-white">{title}</p>
        <Link href="/" className="block px-6 py-4 text-2xl font-bold bg-white">
          {action}
        </Link>
      </div>
    </Wrapper>
  );
};

export default Cta;
