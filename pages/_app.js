import "tailwindcss/tailwind.css";
import "../public/styles/globals.css";
import "../public/styles/output.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
