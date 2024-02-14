import { useState, useEffect } from "react";
import Header from "../pages/home/header/Header";
import Hero from "../pages/home/hero/Hero";
import Lodingpage from "../components/commen/pages/loding/Lodingpage";
import ScrollToTop from "../utils/ScrollToTop";

const HomeLayout = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loaded) {
    return <Lodingpage />;
  }

  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default HomeLayout;