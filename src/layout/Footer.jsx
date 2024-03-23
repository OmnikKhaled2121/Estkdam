import { Box, Container, Grid } from "@mui/material";
import React from "react";
import footerLogo from "../assets/logo1Footer.png";
import facebookLogo from "../assets/facebook.png";
import insta from "../assets/insta.png";
import pins from "../assets/pin.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import SearchInput from "../components/SearchInput";


export default function Footer() {
  return (
    <Grid
      sx={{
        background: "#DAEAF4",
        padding: "2rem 0",
        marginTop: "1rem",
      }}
    >
      <Container
        sx={{
          color: "#005288",
          fontFamily: "Almarai",
        }}
      >
        <Box
          sx={{
            fontFamily: "Almarai",
            fontSize: "48px",
            fontWeight: "700",
          }}
        >
          <img src={footerLogo} />
        </Box>

        <Grid container justifyContent="space-between" alignItems="flex-start">
          <Grid item xs={8}>
            <Box sx={{ fontSize: "20px", color: "#005288", fontWeight: "700" }}>
              اشترك معنا لتكون مطلع على احدث الإضافات
            </Box>
            <Box sx={{ marginTop: "1rem" }}>
              <SearchInput isFooter={true} />
            </Box>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              marginTop: "1rem",
              color: "#213039",
              lineHeight: "40px",
              fontSize: "30.01px",
              fontWeight: "800",
            }}
          >
            <Box sx={{ color: "#005288", fontSize: "20px" }}>التواصل</Box>
            <Box>email@gmail.com</Box>
            <Box sx={{ fontSize: "30.01px" }}>+96 15 754411184</Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ fontSize: "20px", color: "#005288" }}>
              منصة المصدر الدولي للإستقدام
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              <Box sx={{ marginLeft: "1.5rem" }}>الرئيسية</Box>
              <Box sx={{ marginLeft: "1.5rem" }}>مكاتب الإستقدام</Box>
              <Box sx={{ marginLeft: "1.5rem" }}>الخدمات</Box>
              <Box sx={{ marginLeft: "1.5rem" }}>تواصل معنا</Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderBottom: "solid 1px #213039",
            marginTop: "1.5rem",
          }}
        ></Box>

        <Grid
          container
          sx={{ marginTop: "1rem" }}
          justifyContent="space-between"
        >
          <Grid item xs={9}>
            <Box
              sx={{ color: "#213039", fontSize: "12px", lineHeight: "19.92px" }}
            >
              © حقوق الطبع والنشر محفوظة لدى منصة المصدر الدولي للإستقدام
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconTab iconTab={facebookLogo} />
            <IconTab iconTab={youtube} />
            <IconTab iconTab={insta} />
            <IconTab iconTab={linkedin} />
            <IconTab iconTab={pins} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

function IconTab({ iconTab }) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#0C293533",
          width: "40px",
          height: "40px",
          textAlign: "center",
          borderRadius: "20px",
          padding: "0px 0.01px 0px 0.01px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "1rem",
        }}
      >
        <img src={iconTab} alt="FacebookLogo" />
      </Box>
    </>
  );
}
