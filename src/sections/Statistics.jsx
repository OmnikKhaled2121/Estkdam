import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import axios from "axios";





export default function Statistics() {
  const [number, setNumber] = useState([])

  async function DynamicData() {
    let { data } = await axios.get(`https://estikdam.jacadix.net/api/statistics`)
    setNumber(data.data[0])
    console.log("number", number)
    return number

  }

  useEffect(() => {
    DynamicData()
  }, [])

  return (
    <Grid sx={{
      background: "#DAEAF4",
      marginBottom: "6rem"
    }}>
      <Container>
        <Grid container >
          <Grid
            sx={{
              background: "#DAEAF4",
              display: "flex",
              width: "100%",
              justifyContent: "center",
              margin: "2rem 0",
              padding: "3rem 0",
            }}
          >

            <Grid xs={3}
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#005288",
                fontFamily: "Almarai",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Box
                component="span"
                sx={{ fontWeight: "400", fontSize: "20px" }}
              >
                أكثر من
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "800", fontSize: "48px", paddingTop: "1rem" }}
              >
                { number? number.orders:""}
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "700", fontSize: "36px" }}
              >
                طلب
              </Box>
            </Grid>

            <Grid xs={3}
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#005288",
                fontFamily: "Almarai",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Box
                component="span"
                sx={{ fontWeight: "400", fontSize: "20px" }}
              >
                أكثر من
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "800", fontSize: "48px", paddingTop: "1rem" }}
              >
                { number? number.contracts:""}
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "700", fontSize: "36px" }}
              >
                عقد ناجح
              </Box>
            </Grid>

            <Grid xs={3}
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#005288",
                fontFamily: "Almarai",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Box
                component="span"
                sx={{ fontWeight: "400", fontSize: "20px" }}
              >
                أكثر من
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "800", fontSize: "48px", paddingTop: "1rem" }}
              >
                {number.offices}
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "700", fontSize: "36px" }}
              >
                مكتب استقدام
              </Box>
            </Grid>

            <Grid xs={3}
              sx={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#005288",
                fontFamily: "Almarai",
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              <Box
                component="span"
                sx={{ fontWeight: "400", fontSize: "20px" }}
              >
                أكثر من
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "800", fontSize: "48px", paddingTop: "1rem" }}
              >
                {number.nationalities}
              </Box>
              <Box
                component="span"
                sx={{ fontWeight: "700", fontSize: "36px" }}
              >
                جنسيات
              </Box>
            </Grid>





            {/* {Data.map((item) => {
              console.log("item", item)
              return (
                <>
                  <Grid xs={3}
                    sx={{
                      flexDirection: "column",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      color: "#005288",
                      fontFamily: "Almarai",
                      textAlign: "center",
                      fontWeight: 700,
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
                      sx={{ fontWeight: "800", fontSize: "48px", paddingTop: "1rem" }}
                    >
                      {item.num}
                    </Box>
                    <Box
                      component="span"
                      sx={{ fontWeight: "700", fontSize: "36px" }}
                    >
                      {item.desc}
                    </Box>
                  </Grid>
                </>
              );
            })} */}
          </Grid>

        </Grid>
      </Container>
    </Grid>

  );
}
