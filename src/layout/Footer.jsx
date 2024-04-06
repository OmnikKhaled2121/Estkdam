import { Box, Container, Grid } from "@mui/material";
import React from "react";
import footerLogo from "../assets/logo1Footer.png";
import facebookLogo from "../assets/facebook.png";
import insta from "../assets/insta.png";
import pins from "../assets/pin.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import SearchInput from "../components/SearchInput";
import { LibraryAdd } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            item
            xs={10}
            md={12}
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "start" },
            }}
          >
            <Grid
              xs={12}
              sx={{
                fontFamily: "Almarai",
                fontSize: "48px",
                fontWeight: "700",
              }}
            >
              <img src={footerLogo} />
            </Grid>
            <Grid
              container
              sx={{
                justifyContent: { xs: "center", md: "start" },
                alignItems: "center",
                paddingBottom: "1.5rem",
                borderBottom: "solid 1px #213039",
              }}
            >
              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center", md: "start" },
                  textAlign: { xs: "center", md: "start" },
                }}
              >
                <Box
                  sx={{ fontSize: "20px", color: "#005288", fontWeight: "700" }}
                >
                  اشترك معنا لتكون مطلع على احدث الإضافات
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "start" },
                    marginTop: "1rem",
                  }}
                >
                 
                  <SearchInput isFooter={true} placeHolderColor={"placeholderFooter"} />
                </Box>
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem 0",
                  }}
                >
                  <IconTab iconTab={facebookLogo} />
                  <IconTab iconTab={youtube} />
                  <IconTab iconTab={insta} />
                  <IconTab iconTab={linkedin} />
                  <IconTab iconTab={pins} />
                </Grid>
                <Box sx={{
                  fontSize: "20px", color: "#005288",
                  fontWeight: "700"
                }}>
                  منصة المصدر الدولي للإستقدام
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: { xs: "center", md: "start" },
                    marginTop: "1rem",
                    "& > div": {
                      padding: "1rem ",
                    },
                  }}
                >
                  <Box sx={{ paddingRight: "0 !important" }}>
                    <Link
                      to={"/"}
                      style={{
                        color: "#213039",
                      }}
                    >
                      الرئيسية
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to={"/EstkdamRequest"}
                      style={{
                        color: "#213039",
                      }}
                    >
                      طلب الإستقدام
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to={"/KafalaTransfer"}
                      style={{
                        color: "#213039",
                      }}
                    >
                      نقل كفالة
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to={"/ContactUs"}
                      style={{
                        color: "#213039",
                      }}
                    >
                      تواصل معنا
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={10}
                md={3}
                sx={{
                  marginTop: "1rem",
                  color: "#213039",
                  lineHeight: "40px",
                  fontSize: "30.01px",
                  fontWeight: "800",
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "start" },
                }}
              >
                <Box sx={{ color: "#005288", fontSize: "20px" }}>التواصل</Box>
                <Box sx={{ direction: "ltr" }}>Info@selsela.tech</Box>
                <Box sx={{ fontSize: "30px", direction: "ltr" }}>
                  {" "}
                  +966 53 454 4333{" "}
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ marginTop: "1rem" }}
              justifyContent="space-between"
            >
              <Grid item xs={12} md={9}>
                <Box
                  sx={{
                    color: "#213039",
                    fontSize: "12px",
                    lineHeight: "19.92px",
                  }}
                >
                  © حقوق الطبع والنشر محفوظة لدى منصة المصدر الدولي للإستقدام
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  display: { xs: "none", md: "flex" },
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
          borderRadius: "50%",
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
