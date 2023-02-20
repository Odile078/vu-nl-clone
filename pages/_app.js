import "@/styles/globals.css";
// pages/_app.js
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const roboto = localFont({
  src: [
    {
      path: "../public/fonts/roboto-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${roboto.variable} font-sans bg-brandGrey relative top-0`}>
      <div className="">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
