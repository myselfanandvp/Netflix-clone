import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TrendingNow from "../components/TrendingNow";
import EmailSignupForm from "../components/EmailForm";
import FaqAccordion from "../components/FAQ";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center ">

      <Navbar />
      <main className="flex-1 flex w-full flex-col">
       <Hero/>
       <TrendingNow/>
       
      </main>
      <FaqAccordion/>
      <EmailSignupForm/>
      <Footer />
    </div>
  );
}
