import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import callLogo from "../assets/call.png";
import smsLogo from "../assets/sms.png";
import locationLogo from "../assets/location.png";

export default function Help({title,img}) {
  return (
    <Grid
      sx={{
        padding: "3rem 0",
        
        margin:"6rem 0"
      }}
    >
      <Container
        sx={{
          color: "#005288",
          fontFamily: "Almarai",
        }}
      >
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid xs={6}>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "54px",
                letterSpacing: "0em",
                textAlign: "justify",
                marginBottom:"1rem"
              }}
            >
             {title}
            </Box>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "36px",
                letterSpacing: "0em",
                textAlign: "justified",
                marginBottom: "2rem",
              }}
            >
              يمكنك التواصل معنا والإتصال بنا عبر الهاتف أو مراستلنا عبر البريد
              الإلكترونى وسيقوم أحد أعضاء فريق خدمة العملاء بالرد على
              استفساراتكم فى أسرع وقت، فهدفنا دوماً راحتكم.
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                display: "flex",
                color: "#213039",
                marginBottom: "1rem",
              }}
            >
              <Box sx={{ marginLeft: "1rem" }}>
                <img src={callLogo} style={{ width: "24px", height: "24px" }} />
              </Box>
              <Box>+9660503394283</Box>
            </Box>

            <Box
              sx={{
                fontSize: "20px",
                display: "flex",
                color: "#213039",
                marginBottom: "1rem",
              }}
            >
              <Box sx={{ marginLeft: "1rem" }}>
                <img src={smsLogo} style={{ width: "24px", height: "24px" }} />
              </Box>
              <Box>email@gmail.com</Box>
            </Box>

            <Box
              sx={{
                fontSize: "20px",
                display: "flex",
                color: "#213039",
                marginBottom: "3rem",
              }}
            >
              <Box sx={{ marginLeft: "1rem" }}>
                <img
                  src={locationLogo}
                  style={{ width: "24px", height: "24px" }}
                />
              </Box>
              <Box>(أضف العنوان)</Box>
            </Box>
            <Button
              sx={{
                border: "solid 2px #005288",
                padding: "15px 22px 15px 22px",
                fontFamily: "Almarai",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "22.32px",
                borderRadius: "11px",
              }}
            >
              اتصل بنا الأن
            </Button>
          </Grid>
          <Grid xs={6}>
            <Box sx={{width:"100%"}}>
              <img src={img} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
