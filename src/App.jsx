import { CacheProvider } from "@emotion/react";
import "./App.css";
import Footer from "./layout/Footer";
import Navber from "./layout/Navber";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import Landing from "./sections/Landing";
import Statistics from "./sections/Statistics";
import EstkdamCountry from "./sections/EstkdamCountry";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  return (
    <>
      <Navber />
      <Landing />
      <Statistics />
      <EstkdamCountry />
      {/* <Footer /> */}
    </>
  );
}

export default App;
