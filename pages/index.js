import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vapor Rev | Vape shop in Willougby, Ohio</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          description="Vapor Rev is a vape shop in Willougby Ohio. Vapor Rev is a one stop shop for everything vape related. Stop in today!"
          keywords="Vape,shop,willoughby, ohio,vapor,rev"
        />
      </Head>
      <div className="w-full h-full font-nunito">
        <Navbar />
        <Hero />
        <Services />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
