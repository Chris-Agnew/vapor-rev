import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Info from "../components/Info";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Vapor Rev is a vape shop in Willougby Ohio. Vapor Rev is a one stop shop for everything vape related. Stop in today!"
          keywords="Vape,shop,willoughby, ohio,vapor,rev"
        />
        <meta
          property="og:image"
          content="https://www.chris-agnew.com/logo.webp"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Vapor Rev | Vape shop in Willoughby, Ohio</title>
      </Head>
      <div className="w-full h-full font-nunito">
        <Navbar />
        <Hero />
        <Services />
        <Info />
        <Footer />
      </div>
    </>
  );
}
