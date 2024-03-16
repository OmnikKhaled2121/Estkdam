import { CacheProvider } from "@emotion/react";
import "./App.css";
import Footer from "./layout/Footer";
import Navber from "./layout/Navber";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CssBaseline, Grid } from "@mui/material";
import Landing from "./sections/Landing";
import About from "./sections/About";
import { useState } from "react";
import { useEffect } from "react";
import Statistics from "./sections/Statistics";
import WhatOffer from "./sections/WhatOffer";
import EstkdamCountry from "./sections/EstkdamCountry";
import Sponsers from "./sections/Sponsers";
import JoinUs from "./sections/JoinUs";
import FooterSection from "./sections/FooterSection";
import Help from "./sections/Help";
import SearchEstkdam from "./sections/SearchEstkdam";
import EstkdamLevel from "./sections/EstkdamLevel";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  console.log("seee", screenWidth);
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  useEffect(() => {
    console.log("screenWidth", screenWidth);
  }, [screenWidth]);

  return (
    <>
      <Grid
        sx={{
          // overflow: "hidden",
          minWidth: "100vw",
        }}
      >
        <Navber />
        <Landing />
        <About />
        <Statistics />
        <div id="whatOffer">
          <WhatOffer />
        </div>
        <EstkdamCountry />
        <EstkdamLevel />
        <Sponsers />
        <div id="searchEstkam">
          <SearchEstkdam />
        </div>
        <JoinUs />
        <Help />
        <FooterSection />
      </Grid>
    </>
  );
}

export default App;
