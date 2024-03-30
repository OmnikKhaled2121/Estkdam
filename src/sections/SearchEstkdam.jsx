import { Box, Container, Grid } from "@mui/material";
import React from "react";
import pplLogo from "../assets/profile-2user.png";
import arrowLogo from "../assets/arrow-left.png";
import arrowLogos from "../assets/arrow-lefts.png";
import { Link } from "react-router-dom";
export default function SearchEstkdam() {
  return (
    <Grid
      id={"about"}
      sx={{
        display: { xs: "none", md: "block" },
        padding: "3rem 0",
        margin: "6rem 0",
      }}
    >
      <Container
        sx={{
          color: "#005288",
          fontFamily: "Almarai",
        }}
      >
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid xs={5}>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "72px",
                letterSpacing: "0em",
                textAlign: "right",
                color: "#005288",
              }}
            >
              ابحث عن الإستقدام الذى تريد الأن
            </Box>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                letterSpacing: "0em",
                textAlign: "justified",
                color: "#000000",
              }}
            >
              يحرص فريق منصة المصدر الدولي للإستقدام على توفير السرعة والجودة،
              ويقم بالإشراف على وصول العمالة المدربة واستقبالها، من خلال مجموعة
              كبيرة من الوظائف التي يمكنك الاختيار من بينها حسب رغبتك
              واحتياجاتك، كل ما عليك فعله فقط اختيار العمالة المنزلية الملائمة
              لك.
            </Box>
            <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Link to={"/EstkdamRequest"} style={{ display: "flex" }}>
                <Box
                  sx={{
                    fontFamily: "Almarai",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "#005288",
                    marginLeft: "0.2rem",
                  }}
                >
                  شاهد جميع الوظائف
                </Box>
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                  }}
                >
                  <img src={arrowLogos} />
                </Box>
              </Link>
            </Box>
          </Grid>

          <Grid xs={7} sx={{ paddingRight: "2rem" }}>
            <Box
              sx={{
                boxShadow: "0px 0px 20px 6px #26282A26",
                borderRadius: "15px",
                padding: "1.5rem",
              }}
            >
              <Box
                sx={{
                  fontFamily: "Almarai",
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: "25px",
                  letterSpacing: "0em",
                  textAlign: "right",
                  color: "#005288",
                  marginBottom: "1rem",
                }}
              >
                ابحث عن الإستقدام الذى تريد خلال أقل من 20 ثانية!!
              </Box>
              <Box
                sx={{
                  fontFamily: "Almarai",
                  fontSize: "16px",
                  fontWeight: 700,
                  lineHeight: "18px",
                  letterSpacing: "0em",
                  textAlign: "right",
                  color: "#213039",
                }}
              >
                برجاء اختيار نوع الإستقدام
              </Box>
              <Grid container>
                <Grid xs={6} sx={{ marginTop: "1rem" }}>
                  <RowIcon title={"مهنة العامل"} />
                  <RowIcon title={"جنس العامل "} />
                  <RowIcon title={"عمر العامل"} />
                  <RowIcon title={"جنسية العامل"} />
                </Grid>
                <Grid xs={6} sx={{ marginTop: "4rem" }}>
                  <Box
                    sx={{
                      paddingRight: "1rem",
                      paddingLeft: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        fontFamily: "Almarai",
                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "27px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#005288",
                        marginBottom: "1rem",
                      }}
                    >
                      برنامج تحديد <br />
                      الإستقدام المناسب
                    </Box>
                    <Box
                      sx={{
                        fontFamily: "Almarai",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "18px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#213039",
                      }}
                    >
                      كل ما عليك هو ملئ اختيار ما تريد من كل تصنيف وسيقوم الموقع
                      بإقتراح أفضل العمالة التى تناسب احتياجاتك
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

function RowIcon({ title }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "249px",
          height: "60px",
          padding: "10",
          border: "solid 1px #EBEBEB ",
          backgroundColor: " #FAFAFA",
          marginBottom: "0.2rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: "1" }}>
          <Box sx={{ width: "24px", height: "24px", padding: "1rem" }}>
            <img src={pplLogo} />
          </Box>
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "right",
              color: "#213039",
            }}
          >
            {title}
          </Box>
        </Box>
        <Box sx={{ marginLeft: "1rem" }}>
          <img src={arrowLogo} />
        </Box>
      </Box>
    </>
  );
}
