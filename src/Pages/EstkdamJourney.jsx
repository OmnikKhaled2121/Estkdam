import React from "react";
import Bg from "../assets/estkdamTrip.jfif";
import BackgroundLayout from "../components/BackgroundLayout";
import { Box, Container, Grid } from "@mui/material";
import EstkdamLevel from "../sections/EstkdamLevel";
import Statistics from "./../sections/Statistics";
import SalaryAndArrive from "../sections/SalaryAndArrive";

export default function EstkdamJourney() {
  return (
    <>
      <Grid>
        <Grid sx={{ marginBottom: "2rem" }}>
          <BackgroundLayout
            img={Bg}
            title={"رحلة الإستقدام"}
            desc={
              <>
                تمتع بتجربة مثالية فى اختيار العمالة منزلية الخاصة بك
                <br />
                من خلال خطوات بسيطة عبر منصة المصدر الدولي <br />
                للإستقدام
              </>
            }
          />
          <EstkdamLevel ascending title={"رحلة الإستقدام"} />
          <Statistics />
        </Grid>
        <SalaryAndArrive />
      </Grid>
    </>
  );
}
