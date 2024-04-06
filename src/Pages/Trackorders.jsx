import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SocialLogos from "../components/SocialLogos";
import OrderInfo from "../components/TrackCard";
import { Link } from "react-router-dom";


export default function Trackorders() {
  window.scrollTo(0, 0);
  const orders = [1];
  return (
    <Container>
      <Grid container>
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to={'/Profile'}>

            <Box sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem"
            }}>
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  border: "0.3px solid #C4C4C4",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.675 3.63716C7.305 3.63716 7.995 3.83966 8.6925 4.24466L12.165 6.24716C13.3875 6.95966 14.0625 7.93466 14.0625 8.99966C14.0625 10.0647 13.3875 11.0397 12.165 11.7447L8.6925 13.7472C7.47 14.4522 6.2925 14.5497 5.3625 14.0172C4.44 13.4847 3.93 12.4122 3.93 11.0022L3.93 6.99716C3.93 5.58716 4.44 4.51466 5.3625 3.98216C5.76 3.74966 6.2025 3.63716 6.675 3.63716ZM6.675 13.2297C7.11 13.2297 7.605 13.0797 8.13 12.7722L11.6025 10.7697C12.465 10.2747 12.9375 9.64466 12.9375 8.99966C12.9375 8.35466 12.465 7.72466 11.6025 7.22966L8.13 5.22716C7.2675 4.73216 6.4875 4.63466 5.925 4.95716C5.3625 5.27966 5.055 6.00716 5.055 6.99716L5.055 11.0022C5.055 11.9922 5.3625 12.7197 5.925 13.0422C6.15 13.1697 6.405 13.2297 6.675 13.2297Z"
                    fill="#292D32"
                  />
                </svg>
              </Box>
              <Box sx={{
                marginRight: "0.5rem",
                color: "#000000",
                fontWeight: 700,
                fontSize: "15px"
              }}>الصفحة الشخصية </Box>
            </Box>
          </Link>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            fontFamily: "Almarai",
            fontSize: "32px",
            fontWeight: "700",
            lineHeight: "35.71px",
            textAlign: "right",
            color: "#005288",
            paddingBottom: "2rem",
            display: "block",
          }}
        >
          تتبع الطلبات
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {orders.length ? (
            orders.map((order, index) => {
              return <CardTrack item md={12} xs={12} bgcolor={"#005288"} key={index} />;
            })
          ) : (
            <Box
              sx={{
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "54px",
                textAlign: "center",
              }}
            >
              لا يوحد طلبات لديك فى الوقت الحالى
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

function ButtonTrack({ title, backColor, direct }) {
  return (
    <>
      <Link to={direct}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "43.5px",
            border: "1.5px  solid",
            borderRadius: "8px",
            color: backColor ? "white" : "#005288",
            bgcolor: backColor ? backColor : "white",
            cursor: "pointer",
            marginBottom: "1rem"
          }}
        >
          {title}
        </Box>
      </Link>
    </>
  );
}
function CardTrack({ bgcolor }) {
  return (
    <>
      <Grid item md={7.9} xs={12} sx={{ boxSizing: "border-box", padding: "0.5rem" }}>
        <OrderInfo />
      </Grid>
      <Grid
        item
        md={3.9}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          padding: "0.5rem",
          "& > div:not(:last-child)": { marginBottom: ".5rem" },
        }}
      >
        <ButtonTrack title="التواصل مع خدمة العملاء" direct={'/ContactUs'} />
        <ButtonTrack title="هل تواجه مشكلة مع الطلب؟" direct={'/ContactUs'} />
        <ButtonTrack title="إلغاء الطلب" backColor={bgcolor} direct={'/'} />
      </Grid>
    </>
  );
}
