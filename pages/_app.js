import "tailwindcss/tailwind.css";
import "../public/styles/globals.css";
import "../public/styles/output.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
