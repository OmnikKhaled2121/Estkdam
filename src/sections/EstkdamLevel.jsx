import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import icon from "../assets/icons8_Cursor.png";
import shakeImg from "../assets/shakecopy1.png";
import locationLogo from "../assets/Group6892.png";
import papperLogo from "../assets/Group6895.png";
import calLogo from "../assets/Group6890.png";
import arrowLogos from "../assets/arrow-lefts.png";
import { Link } from "react-scroll";
export default function EstkdamLevel({ title, ascending }) {
  return (
    <Container
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "#005288",
        fontFamily: "Almarai",
        padding: "3rem 0",
      }}
    >
      <Grid item xs={10} md={12} container>
        <Grid
          item
          sx={{
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "54px",
            letterSpacing: "0em",
            textAlign: "right",
          }}
        >
          {title}
        </Grid>
        <Grid
          container
          item
          sx={{ marginTop: "2rem", justifyContent: "space-between" }}
        >
          <Grid xs={12} md={3.3} sx={{ order: { xs: "1" } }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <LevelTable
                number={"01"}
                icon={icon}
                title="اختيار العمالة"
                text="اختر العامل الذى تريد بناء على سيرته الذاتية واشتراطاتك"
              />
              <LevelTable
                number={"02"}
                icon={calLogo}
                title="ادفع الرسوم"
                text="قم بدفع رسوم العمالة من خلال احدى بوابات الدفع المتعاقد معها"
              />
            </Grid>
          </Grid>
          <Grid
            xs={12}
            md={5}
            // order={ascending ? 3 : 2}
            sx={{ order: { xs: "3", md: "2" } }}
          >
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <LevelColum number={"05"} />
            </Grid>
          </Grid>
          <Grid
            xs={12}
            md={3.3}
            // order={ascending ? 2 : 3}
            sx={{ order: { xs: "2", md: "3" } }}
          >
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <LevelTable
                number={"03"}
                icon={papperLogo}
                title="تخليص الإجراءات"
                text="تساعدك منصة المصدر الدولي للإستقدام فى تخليص جميع أجراءات  العامل"
              />

              <LevelTable
                number={"04"}
                icon={locationLogo}
                title="وصول العامل"
                text="تصل العمارة المختارة من قبلك إلى أراضى المملكة"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

function LevelTable({ icon, title, text, number }) {
  return (
    <>
      <Grid item xs={12} sx={{ width: "100%", padding: "0.5rem 0" }}>
        <Grid
          container
          sx={{
            background: "#F0F4F6",
            borderRadius: "16px",
            padding: "3rem 1rem",
            textAlign: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: "294px",
            maxHeight: "295px",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <Box
              sx={{
                color: "#005288",
                background: "#0052881A",
                width: "40px",
                height: "40px",
                textAlign: "center",
                borderRadius: "50%",
                padding: "0.3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              {number}
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              "& > div": {
                paddingBottom: ".8rem",
              },
            }}
          >
            <Box sx={{ alignItems: "center" }}>
              <img src={icon} alt="Icon"></img>
            </Box>
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "36px",
                letterSpacing: "0em",
                color: "#005288",
              }}
            >
              {title}
            </Box>
            <Box
              sx={{
                color: "#213039",
                fontSize: "16px",
              }}
            >
              {text}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function LevelColum({ icon, title, text, number }) {
  return (
    <Grid padding={".5rem 0"}>
      <Grid
        sx={{
          background: "#DAEAF4",
          borderRadius: "16px",
          border: "solid 2px #005288",
          minHeight: "605px",
          maxHeight: "605px",
        }}
      >
        <Grid
          container
          sx={{
            background: "#DAEAF4",
            borderRadius: "16px",
            padding: "2.5rem",
            textAlign: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <Box
              sx={{
                color: "#005288",
                background: "#0052881A",
                width: "40px",
                height: "40px",
                textAlign: "center",
                borderRadius: "50%",
                padding: "0.3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              05
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "36px",
                letterSpacing: "0em",
                color: "#213039",
                paddingBottom: "1rem",
              }}
            >
              استلم العمالة
            </Box>
            <Box
              sx={{
                fontSize: "36px",
                lineHeight: "54px",
                fontWeight: "800",
                padding: "1rem",
                paddingBottom: "1rem",
              }}
            >
              واحصل على ضمان لمدة 3 أشهر
            </Box>
            <Box
              sx={{
                color: "#213039",
                fontSize: "16px",
                paddingBottom: "1rem",
              }}
            >
              استلم العامل وأحصل على ضمان لمدة 3 شهور فى حالة وجود أى مشكلة أو
              تقصير من العامل
            </Box>
            <Link to="searchEstkam" smooth={true} duration={500}>
              <Box
                sx={{
                  bgcolor: "#005288",
                  color: "white",
                  width: "129px",
                  height: "18px",
                  margin: "auto",
                  padding: "15px 22px 15px 22px",
                  borderRadius: "10px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                ابدأ الإستقدام الأن
              </Box>
            </Link>
          </Grid>
        </Grid>
        <img src={shakeImg} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
}
