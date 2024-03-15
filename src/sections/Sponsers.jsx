import { Box, Container, Grid } from "@mui/material";
import React from "react";
import sponser1 from "../assets/Frame3653.svg";
import sponser2 from "../assets/surface1.svg";
import sponser3 from "../assets/musaned1.svg";
import sponser4 from "../assets/white-logo-ar1.svg";

const data = [sponser1, sponser2, sponser3, sponser4];
export default function Sponsers() {
  return (
    <>
      <Grid sx={{ padding: "3rem 0", bgcolor: "#DAEAF4" }}>
        r
        <Container>
          <Grid container>
            {data.map((item) => {
              return (
                <>
                  {" "}
                  <SponserData img={item}></SponserData>
                </>
              );
            })}
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

function SponserData({ img }) {
  return (
    <>
      <Grid xs={3}>
        <Box>
          <img src={img}></img>
        </Box>
      </Grid>
    </>
  );
}
