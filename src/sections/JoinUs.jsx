import { Box, Container, Grid } from "@mui/material";
import React from "react";
import map2 from "../assets/Map2.svg";
import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <>
      <Container
        sx={{
          padding: "3rem 0",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={9}
          md={12}
          container
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "Almarai",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              fontSize: "32px",
              fontWeight: "800",
              color: "#005288",
              paddingBottom: "2rem",
              textAlign: "center",
            }}
          >
            انضم الأن لمنصتنا الأكبر الأن
          </Grid>

          <Grid item xs={12} md={5.8}>
            توفر لك منصة المضدر الدولى القدرة على التواصل مع أكبر مكاتب
            الإستقدام والتوصول إلى الراغبين فى العمل واختيار الشخص المناسب
            لإحتياجاتك ما بين أكثر من 10 جنسيات مختلفة حول العالم
          </Grid>
          <Grid sx={{ padding: "2rem 0" }}>
            <img width={"100%"} src={map2} />
          </Grid>
          <Link
            to={"/Login"}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                background: "#005288",
                borderRadius: "10px",
                width: "186px",
                height: "63px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              انضم الأن
            </Box>
          </Link>
        </Grid>
      </Container>
    </>
  );
}
