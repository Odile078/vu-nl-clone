import Wrapper from "@/components/Wrapper/Wrapper";
const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="relative max-w-lg mt-10 lg:mt-20 py-7.5 mx-2 md:mx-10">
          <h1 className="text-3xl font-bold text-brandBlack">
            You don’t just become something, you become someone
          </h1>
          <p className="text-base text-white">Project A. The Operational VC.</p>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="bg-brandBlue h-14"></div>
      </Wrapper>
      <div
        className="bg-center bg-cover bg-heroImage w-screen h-[170px] md:h-[460px] xl:h-[720px] max-w-[2200px] mx-auto"
        title="Students studying and laughing together outside"
      ></div>
    </section>
  );
};

export default Hero;
