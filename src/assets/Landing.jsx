import { Box, Grid } from "@mui/material";
import joly1 from "../assets/joley.jfif";
import joly from "../assets/Rectangle 1131 (1).png";
import le from "../assets/Rectangle 1130.png";
import Ahmed from "../assets/Rectangle 1133.png";
import young from "../assets/Rectangle 1132 (1).png";
import React from "react";

export default function Landing() {
  return (
    <Grid
      id="Landing"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#DAEAF4",
        padding: "5rem 0",
        overflow:"hidden"
      }}
    >
      <Grid
        container
        sx={{ width: "85%", display: "flex", justifyContent: "space-between" }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "80px",
              fontWeight: "800",
              lineHeight: "89px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "linear-gradient(45deg, #9A46B8, #19547B)",
            }}
          >
            سرعة..ثقة..امان
          </Box>
        </Grid>
        <LandingImages />
      </Grid>
    </Grid>
  );
}

function LandingImages() {
  return (
    <Grid
      item
      container
      xs={4}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        alignItems: "center",
      }}
    >
      <Grid>
        {/* <img src={joly} /> */}
        <ImgBorder Img={joly1} />
      </Grid>
      {/* <Grid sx={{ margin: "0 1rem" }}>
        <Box>
          <img src={le} />
        </Box>
        <Box>
          <img src={Ahmed} />
        </Box>
      </Grid> */}
      {/* <Grid>
        <Box>
          <img src={young} />
        </Box>
      </Grid> */}
    </Grid>
  );
}
function ImgBorder({ Img }) {
  return (
    <Grid
      sx={{
        overflow: "hidden",
        width: "150px",
        height: "600px",
        borderRadius: "98.5px",
        position: "relative",
        border: "5px solid #213039",
        borderTop: "0",
        borderLeft: "0",
      }}
    >
      <Box sx={{ position: "absolute", transform: "translate (20 % , -10%)",backgroundImage:`url(${"../../public/joley.jfif"})` }}>
        {/* <img src={Img} /> */}
      </Box>
    </Grid>
  );
}
