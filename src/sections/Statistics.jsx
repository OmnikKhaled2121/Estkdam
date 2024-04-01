import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { StatisticsData } from "../lib/api";

const DummyData = [
  {
    id: "orders",
    title: "أكثر من ",
    num: "0",
    desc: "طلبات",
  },
  {
    id: "contracts",
    title: "أكثر من ",
    num: "0",
    desc: "عقد ناجح",
  },
  {
    id: "offices",
    title: "أكثر من ",
    num: "0",
    desc: "مكتب استقدام",
  },
  {
    id: "nationalities",
    title: "أكثر من ",
    num: "0",
    desc: "جنسية",
  },
];

export default function Statistics() {
  const [Data, setData] = useState([...DummyData]);
  async function DynamicData() {
    let { data, status } = await StatisticsData();
    console.log(data);
    if (status) {
      DummyData.map((item) => {
        item.num = data[`${item.id}`];
      });
      setData([...DummyData]);
    }
  }

  useEffect(() => {
    DynamicData();
  }, []);

  return (
    <Grid sx={{ background: "#DAEAF4" }}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          xs={11}
          md={12}
          sx={{
            background: "#DAEAF4",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: "1rem  0",
          }}
        >
          {Data.map((item) => {
            return (
              <>
                <Grid
                  item
                  xs={6}
                  md={3}
                  sx={{
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#005288",
                    fontFamily: "Almarai",
                    textAlign: "center",
                    fontWeight: 700,
                    padding: "1rem",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    component="span"
                    sx={{ fontWeight: "400", fontSize: "20px" }}
                  >
                    {item.title}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "800",
                      fontSize: "48px",
                      paddingTop: "1rem",
                    }}
                  >
                    {item.num}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "19px", md: "30px" },
                    }}
                  >
                    {item.desc}
                  </Box>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}
