import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-nunito">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
