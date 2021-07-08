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
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9QCVZ0PNMB"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9QCVZ0PNMB', { page_path: window.location.pathname });
            `,
          }}
        />
        <title>Vapor Rev | Vape shop in Willoughby, Ohio</title>
      </Head>
      <div className="w-full h-full font-nunito">
        <Navbar />
        <Hero />
        <Services />
        <Info />
        <Footer />

        <script src="https://www.w3counter.com/tracker.js?id=138271"></script>
        <script
          id="AgeVerifyScript"
          data-template="Vaping 3"
          data-textprompt=""
          data-fontsize="24"
          data-method="Age Button Prompt"
          data-entertext="Yes"
          data-exittext="No"
          data-bfontsize="20"
          data-remembertext="Remember Me"
          src="https://av.ageverify.co/jsv9/av9.1.js"
        ></script>
      </div>
    </>
  );
}
