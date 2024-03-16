import "./App.css";
import FooterSection from "./layout/Footer";
import Navber from "./layout/Navber";
import { Grid } from "@mui/material";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Statistics from "./sections/Statistics";
import WhatOffer from "./sections/WhatOffer";
import EstkdamCountry from "./sections/EstkdamCountry";
import Sponsers from "./sections/Sponsers";
import JoinUs from "./sections/JoinUs";
import Help from "./sections/Help";
import SearchEstkdam from "./sections/SearchEstkdam";
import EstkdamLevel from "./sections/EstkdamLevel";

function App() {
  return (
    <>
      <Grid
        sx={{
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
