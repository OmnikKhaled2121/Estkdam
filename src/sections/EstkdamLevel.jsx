import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import icon from "../assets/icons8_Cursor.png";
import shakeImg from "../assets/shakecopy1.png";
import locationLogo from "../assets/Group6892.png";
import papperLogo from "../assets/Group6895.png";
import calLogo from "../assets/Group6890.png";
import arrowLogos from "../assets/arrow-lefts.png";

export default function EstkdamLevel() {
  return (
    <Grid
      sx={{
        padding: "3rem 0",
        // marginTop: "1rem",
        margin:"6rem 0"
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
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "54px",
            letterSpacing: "0em",
            textAlign: "right",
          }}
        >
          مراحل الإستقدام
        </Box>
        <Container>
          <Grid container sx={{ marginTop: "2rem" }} justifyContent={"center"}>
            <Grid xs={3} sx={{ paddingLeft: "0.9rem" }}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid xs={12} sx={{ paddingBottom: "1rem" }}>
                  <LevelTable
                    number={"01"}
                    icon={icon}
                    title="اختيار العمالة"
                    text="اختر العامل الذى تريد بناء على سيرته الذاتية واشتراطاتك"
                  />
                </Grid>
                <Grid xs={12} sx={{ paddingBottom: "1rem" }}>
                  <Box>
                    <LevelTable
                      number={"02"}
                      icon={calLogo}
                      title="ادفع الرسوم"
                      text="قم بدفع رسوم العمالة من خلال احدى بوابات الدفع المتعاقد معها"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={5} sx={{ paddingLeft: "0.9rem" }}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid xs={12} sx={{ paddingBottom: "1rem" }}>
                  <Box>
                    {" "}
                    <LevelColum number={"05"} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid xs={12} sx={{ paddingBottom: "1rem" }}>
                  <Box>
                    {" "}
                    <LevelTable
                      number={"03"}
                      icon={papperLogo}
                      title="تخليص الإجراءات"
                      text="تساعدك منصة المصدر الدولي للإستقدام فى تخليص جميع أجراءات  العامل"
                    />
                  </Box>
                </Grid>
                <Grid xs={12}>
                  <Box>
                    {" "}
                    <LevelTable
                      number={"04"}
                      icon={locationLogo}
                      title="وصول العامل"
                      text="تصل العمارة المختارة من قبلك إلى أراضى المملكة"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                marginTop: "1.5rem",
                border: "solid 2px #005288 ",
                borderRadius: "58px",
                padding:"13px 18px"
              }}
            >
              <Box
                sx={{
                  fontFamily: "Almarai",
                  fontSize: "15px",
                  fontWeight: 700,
                  lineHeight: "21px",
                  // letterSpacing: "0em",
                  textAlign: "right",
                  color: "#005288",
                  marginLeft: "0.2rem",
                 
                }}
              >
                تعرف على المزيد
              </Box>
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                }}
              >
                <img src={arrowLogos} />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Container>
    </Grid>
  );
}

function LevelTable({ icon, title, text, number }) {
  return (
    <>
      {/* <Grid xs={4}> */}
      <Grid
        container
        sx={{
          background: "#F0F4F6",
          borderRadius: "16px",
          padding: "4rem",
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
            {number}
          </Box>
        </Grid>
        <Grid item>
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

      {/* </Grid> */}
    </>
  );
}

function LevelColum({ icon, title, text, number }) {
  return (
    <>
      <Grid
        sx={{
          background: "#DAEAF4",
          borderRadius: "16px",
          border: "solid 2px #005288",
        }}
      >
        <Grid
          container
          sx={{
            background: "#DAEAF4",
            borderRadius: "16px",
            padding: "3.7rem",
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
          <Grid item sx={{ paddingBottom: "2rem" }}>
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
            <Box
              sx={{
                bgcolor: "#005288",
                color: "white",
                width: "129px",
                height: "18px",
                margin: "auto",
                padding: "15px 22px 15px 22px",
                borderRadius: "10px",
              }}
            >
              ابدأ الإستقدام الأن
            </Box>
          </Grid>
        </Grid>
        <img src={shakeImg} style={{ width: "100%" }} />
      </Grid>
    </>
  );
}
