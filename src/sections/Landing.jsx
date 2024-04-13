import { Box, Container, Grid } from "@mui/material";
import joly1 from "../assets/joley.jfif";
import ImgC2 from "../assets/imgCircle.jfif";
import ImgC3 from "../assets/imgCir3.jfif";
import human2 from "../assets/human2.png";
import human3 from "../assets/human3.png";
import human4 from "../assets/human4.png";
import le from "../assets/le.jfif";
import ahmed from "../assets/ahmed.jfif";
import young from "../assets/young.jfif";
import tooltip1 from "../assets/Group1.png";
import tooltip2 from "../assets/Group2.png";
import tooltip3 from "../assets/Group3.png";
import tooltip4 from "../assets/Group4.png";
import lepop from "../assets/lepop.png";
import youngpop from "../assets/youngpop.png";
import ahmedpop from "../assets/ahmedpop.png";
import jolypop from "../assets/jolypop.png";
import background from "../assets/netBackgroung.png";
import warp from "../assets/cyanBackground.png";
import React, { useState } from "react";

import { Link } from "react-scroll";

import SearchInput from "../components/SearchInput";
import TextKey from "../components/TextKey";
import { TitleSearch } from "../lib/api";

export default function Landing() {
  const [profession, setProfession] = useState("");
  return (
    <Grid
      id="Landing"
      sx={{
        width: "100%",
        padding: "3rem 0",
        boxSizing: "border-box",
        backgroundImage: `url(${warp})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 95%",
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
            position: "relative",
            padding: "1rem 0",
            flexBasis: {
              xs: "140%",
            },
            maxWidth: {
              xs: "150%",
            },
          }}
        >
          <Grid
            item
            xs={11}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "start" },
            }}
          >
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: { xs: "45px", md: "70px" },
                fontWeight: "800",
                lineHeight: "89px",
                letterSpacing: "0em",
                textAlign: "center",
                background: "linear-gradient(90deg, #9A46B8, #19547B)",
                marginBottom: "1rem",
              }}
              id="LandingTitle"
            >
              سرعة..ثقة..امان
            </Box>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: "700",
                lineHeight: "27px",
                letterSpacing: "0em",
                textAlign: "right",
                marginBottom: "1rem",
              }}
            >
              ابدأ الأن الإستقدام الخاص بك
            </Box>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "400",
                lineHeight: "30px",
                letterSpacing: "0em",
                marginBottom: "1rem",
              }}
            >
              تقدم لك منصة المصدر الدولي للإستقدام الفرصة للبحث عن الإستقدام
              الذى تريده بسرعة وسهولة ويناسب احتياجاتك.
            </Box>
            <Grid sx={{ marginBottom: "1rem" }}>
              <Texts>وظائف متعددة</Texts>
              <Texts>سرعة الإنجاز، ودقة الإختيار</Texts>
              <Texts>أكثر من 10 جنسيات يمكنك الإختيار من بينها</Texts>
            </Grid>
            <Grid
              sx={{
                display: { xs: "none", md: "block" },
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 100%",
                backgroundPositionX: "100%",
                backgroundPositionY: "100%",
                marginBottom: "1rem",
              }}
            >
              <TextKey
                texts={["مديره منزل", "مساعد شخصي", "ربه منزل", "سائق خاص"]}
                to="EstkdamRequest"
              ></TextKey>
              <SearchInput
                isFooter={false}
                to="EstkdamRequest"
                text={"ابحث عن الإستقدام الذى تريده"}
                colorIcon={"#292D32"}
                placeHolderColor={"#placeholderLanding"}
              />
            </Grid>

            {/* <Link to="searchEstkam" smooth={true} duration={500}>
              <Box
                sx={{
                  margin: "3rem 0 1.5rem 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "180px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#005288",
                  color: "white",
                  padding: "15px 22px",
                  fontFamily: "Almarai",
                  fontSize: "20px",
                  fontWeight: "700",
                  lineHeight: "22px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                ابدأ الإستقدام الأن
              </Box>
            </Link> */}
            {/* <Grid
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <ImgCricle imgArr={[ImgC3, ImgC2, ImgC2, ImgC2, ImgC2]} />
              <Box
                sx={{
                  transform: `translate(75px, 0)`,
                  fontFamily: "Almarai",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "27px",
                  letterSpacing: "0em",
                  textAlign: "justified",
                  width: "220px",
                }}
              >
                أكثر من 10 ألاف فرصة عمل
              </Box>
            </Grid> */}
          </Grid>
          <LandingImages xs={12} md={6} />
          <LandingImagesMob xs={12} />
        </Grid>
      </Container>
    </Grid>
  );
}

function LandingImages({ xs, md }) {
  const imgBorder = (H, imgSrc) => {
    return {
      overflow: "hidden",
      width: "100%",
      height: { xs: "440px", md: H },
      borderRadius: "98.5px",
      border: "5px solid #213039",
      borderTop: "0",
      borderLeft: "0",
      backgroundImage: `url(${imgSrc})`,
      backgroundPosition: "75% 25%",
    };
  };
  return (
    <Grid
      item
      container
      xs={xs}
      md={md}
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",
        flexWrap: "nowrap",
        alignItems: "center",
        // overflow: "hidden",
        position: "relative",
      }}
    >
      <Grid item xs={3.5}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: "-10%",
            top: "22%",
          }}
        >
          <img src={tooltip2}></img>
        </Box>
        <Grid sx={imgBorder("690px", joly1)} />
      </Grid>
      <Grid item xs={3.5}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: " 8%",
            left: "55%",
          }}
        >
          <img src={tooltip3}></img>
        </Box>
        <Grid sx={imgBorder("449px", human2)} mb={2} />
        <Grid sx={imgBorder("449px", human3)} mt={2} />
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            bottom: "7%",
            left: "60%",
          }}
        >
          <img src={tooltip4}></img>
        </Box>
      </Grid>
      <Grid item xs={3.5}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: "34%",
            left: "-12%",
          }}
        >
          <img src={tooltip1}></img>
        </Box>
        <Grid sx={imgBorder("690px", human4)} />
      </Grid>
    </Grid>
  );
}
function LandingImagesMob({ xs, md }) {
  const imgBorder = (H) => {
    return {
      overflow: "hidden",
      width: "100%",
      height: H,
      borderRadius: "98.5px",
      border: "5px solid #213039",
      borderTop: "0",
      borderLeft: "0",
      position: "relative",
    };
  };
  return (
    <Grid
      item
      container
      xs={xs}
      md={md}
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",
        flexWrap: "nowrap",
        alignItems: "center",
        position: "relative",
        marginTop: "5rem",
      }}
    >
      <Grid item xs={3.9}>
        <Box
          sx={{
            display: "block",
            position: "absolute",
            right: "-13px",
            top: "15px",
            zIndex: "5",
          }}
        >
          <img src={jolypop}></img>
        </Box>
        <Grid sx={imgBorder("365px")}>
          <img
            width={"370%"}
            src={joly1}
            style={{ position: "absolute", transform: "translate(20%, -10%)" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={3.9}>
        <Box
          sx={{
            display: "block",
            position: "absolute",
            top: "-45px",
            left: "50%",
            zIndex: "5",
          }}
        >
          <img src={lepop}></img>
        </Box>
        <Grid sx={imgBorder("237px")} mb={2}>
          <img
            width={"310%"}
            src={le}
            style={{ position: "absolute", transform: "translate(40%, -35%)" }}
          />
        </Grid>
        <Grid sx={imgBorder("237px")} mt={2}>
          <img
            width={"350%"}
            src={ahmed}
            style={{ position: "absolute", transform: "translate(40%, 0%)" }}
          />
        </Grid>
        <Box
          sx={{
            display: "block",
            position: "absolute",
            bottom: "0",
            left: "50%",
            zIndex: "5",
          }}
        >
          <img src={ahmedpop}></img>
        </Box>
      </Grid>
      <Grid item xs={3.9}>
        <Box
          sx={{
            display: "block",
            position: "absolute",
            top: "15px",
            left: "-13px",
            zIndex: "5",
          }}
        >
          <img src={youngpop}></img>
        </Box>
        <Grid sx={imgBorder("365px")}>
          <img
            width={"475%"}
            src={young}
            style={{ position: "absolute", transform: "translate(55%, -3%)" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

function Texts({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem",
        "&>span": { marginRight: "1rem" },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M25.8735 13.8668L24.3407 11.4346L25.247 8.70481C25.3731 8.33185 25.2194 7.92318 24.8805 7.72479L22.402 6.28849L21.9449 3.44365C21.8818 3.05482 21.5548 2.76517 21.1686 2.7493L18.3078 2.63821L16.5898 0.329009C16.3573 0.0155607 15.9317 -0.0875988 15.585 0.0790439L13 1.31697L10.415 0.0790439C10.0643 -0.0875988 9.64271 0.0155607 9.40628 0.329009L7.69218 2.63821L4.83139 2.7493C4.44522 2.76517 4.11816 3.05482 4.05512 3.44365L3.59802 6.28452L1.11946 7.72479C0.780577 7.91921 0.626898 8.32788 0.749053 8.70085L1.6593 11.4346L0.126457 13.8668C-0.0823878 14.2001 -0.0272211 14.6326 0.252553 14.9063L2.31736 16.9021L2.08882 19.7707C2.05729 20.1635 2.3016 20.5206 2.67595 20.6317L5.4264 21.4292L6.5455 24.0796C6.69918 24.4407 7.0814 24.651 7.46363 24.5677L10.2653 23.9884L12.4799 25.8135C12.6296 25.9365 12.8148 26 13 26C13.1852 26 13.3665 25.9365 13.5201 25.8135L15.7347 23.9884L18.5364 24.5677C18.9186 24.651 19.3048 24.4447 19.4545 24.0796L20.5736 21.4292L23.3241 20.6317C23.6984 20.5246 23.9427 20.1635 23.9112 19.7707L23.6826 16.9021L25.7474 14.9063C26.0272 14.6326 26.0824 14.2001 25.8735 13.8668ZM18.9304 9.89512L13.1891 18.5566C12.9724 18.878 12.6335 19.0962 12.3025 19.0962C11.9676 19.0962 11.5972 18.9058 11.3568 18.6677L7.14445 14.3548C6.85679 14.0612 6.85679 13.5851 7.14445 13.2875L8.18474 12.2242C8.47239 11.9306 8.93737 11.9306 9.22502 12.2242L11.9676 15.0293L16.4913 8.20489C16.7159 7.8597 17.1769 7.77241 17.5118 8.0065L18.7334 8.85162C19.0683 9.08175 19.155 9.5539 18.9304 9.89512Z"
          fill="#213039"
        />
      </svg>
      <span> {children} </span>
    </Box>
  );
}

function ImgCricle({ imgArr }) {
  return (
    <Grid sx={{ display: "flex" }}>
      {imgArr.map((imgSrc, index) => {
        return (
          <>
            <Box
              sx={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                overflow: "hidden",
                transform: `translate(${index * 25}px, 0)`,
                color: "white",
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: "cover",
                border: "2px solid white",
              }}
            >
              {index == imgArr.length - 1 ? (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  +10K
                </Box>
              ) : (
                ""
                // <img src={ImgC2} width={"100%"} />
              )}
            </Box>
          </>
        );
      })}
    </Grid>
  );
}
