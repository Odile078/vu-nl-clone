import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Cta from "@/components/sections/Cta";
import Impact from "@/components/sections/Impact";
import News from "@/components/sections/News";
import Calendar from "@/components/sections/Calendar";
import WeAre from "@/components/sections/WeAre";
import Tour from "@/components/sections/Tour";
import Feature from "@/components/sections/Feature";
import Footer from "@/components/layout/Footer";
import Wrapper from "@/components/Wrapper/Wrapper";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vu-nl/en</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-hidden ">
        <Hero />
        <About />
        <Cta
          title="Do you also want to change your world?"
          action="Visit the VU Master’s Event"
          white={true}
        />
        <Impact />
        <News />
        <Calendar />
        <Wrapper className=" bg-[#faf7f5] shadow-none">
          <Cta
            title="Working at VU Amsterdam?"
            action="Take a look at our vacancies!"
            className="shadow-none"
          />
        </Wrapper>

        <WeAre />
        <Tour />
        {/* <Feature /> */}
      </main>
      <Footer />
    </>
  );
}
