import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

export default function Root() {
  return (
    <>
      <Navber />
      <Grid
        sx={{
          minWidth: "100vw",
        }}
      >
        <Outlet />
      </Grid>
      <Footer />
    </>
  );
}
