import { CacheProvider } from "@emotion/react";
import "./App.css";
import Footer from "./layout/Footer";
import Navber from "./layout/Navber";
import createCache from "@emotion/cache";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CssBaseline } from "@mui/material";
import Landing from "./sections/Landing";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  return (
    <>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        <Navber />
        <Landing />
        {/* <Footer /> */}
      </CacheProvider>
    </>
  );
}

export default App;
