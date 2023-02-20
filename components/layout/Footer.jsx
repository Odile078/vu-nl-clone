import Link from "next/link";
import Feature from "../sections/Feature";
import Wrapper from "../Wrapper/Wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <Feature />
      <Wrapper className=" bg-brandBlue py-7.5">
        <ul className="flex flex-wrap  gap-[15px]">
          {[
            "Privacy Statement",
            "Disclaimer",
            "Safety at VU Amsterdam",
            "Colofon",
            "Cookie Settings",
            "Web archive",
          ].map((e, i) => (
            <li key={i}>
              {" "}
              <Link
                href="/"
                className="flex items-center justify-between gap-[5px]"
              >
                <span className="text-sm text-white ">{e}</span>
                <AiOutlineArrowRight className="text-base text-white" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <span className="text-base text-white">
            Copyright © 2023 - Vrije Universiteit Amsterdam
          </span>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
