import Head from "next/head";
import React, { useState } from "react";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MobileNav from "./MobileNav";

const Layout = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div>
      <Head>
        <title>Perry Jurick Photography</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@400;700&family=Cormorant:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fffeef" />
        <meta name="msapplication-TileColor" content="#fffeef" />
        <meta name="theme-color" content="#fffeef" />

        {/* React Slick */}

        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <Brand setShow={() => setShowMobileNav(!showMobileNav)} />
      <Navbar />
      <MobileNav show={showMobileNav} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
