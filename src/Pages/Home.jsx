import React from "react";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Statistics from "../sections/Statistics";
import WhatOffer from "../sections/WhatOffer";
import EstkdamCountry from "../sections/EstkdamCountry";
import Sponsers from "../sections/Sponsers";
import JoinUs from "../sections/JoinUs";
import Help from "../sections/Help";
import SearchEstkdam from "../sections/SearchEstkdam";
import EstkdamLevel from "../sections/EstkdamLevel";
import boyLogo from "../assets/Rectangle1137.png";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      {/* <Statistics /> */}
      <WhatOffer />
      <EstkdamCountry />
      <EstkdamLevel title={"مراحل الإستقدام"} />
      <Sponsers />
      <div id="searchEstkam">
        <SearchEstkdam />
      </div>
      <JoinUs />
      <Help title={"تحتاج إلى مساعدة؟"} img={boyLogo} />
    </>
  );
}
