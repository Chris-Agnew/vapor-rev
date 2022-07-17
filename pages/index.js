import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Info from "../components/Info";
import Footer from "../components/Footer";
import { GA_TRACKING_ID } from "../lib/ga/gtag";
import AnimateInView from "../components/AnimateInView";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="VAPOR REV is a vape shop in Willougby Ohio. VAPOR REV is a one stop shop for everything vape related. Stop in today!"
          keywords="Vape,shop,willoughby, ohio,vapor,rev,mentor,eastlake"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${GA_TRACKING_ID}, { page_path: window.location.pathname });
            `,
          }}
        />
        <title>VAPOR REV | Vape shop in Willoughby, Ohio</title>
      </Head>
      <div className="w-full h-full bg-black">
        <Navbar />
        <Hero />
        <AnimateInView content={<Services />} />
        <AnimateInView content={<Info />} />

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
