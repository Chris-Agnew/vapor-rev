import Head from "next/head";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Info from "../components/Info";
import { GA_TRACKING_ID } from "../lib/ga/gtag";
import AnimateInView from "../components/AnimateInView";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Vapor Rev | Vape Shop in Willoughby, Ohio"
        description="Vapor Rev is a vape shop in Willoughby, Ohio. We carry a wide variety of vape products and accessories. We also offer a wide variety of e-juice flavors."
        canonical="https://www.vaporrevshop.com/"
        openGraph={{
          title: "Open Graph Video Title",
          description:
            "VAPOR REV is a vape shop in Willoughby, Ohio. We carry a wide variety of vape products and accessories. We also offer a wide variety of e-juice flavors.",
          url: "https://www.vaporrevshop.com/",
          video: "/vapor-rev-og.mp4",

          site_name: "VAPOR REV INC",
        }}
      />
      <div className="w-full h-full bg-black">
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
