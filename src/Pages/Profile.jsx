import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import ProfileBg from "../assets/settingProfile.jfif";
import OrderInfo from "../components/TrackCard";
import { Link } from "react-router-dom";
import LastUpdatesPopUp from "../components/LastUpdatesPopUp";
import { UserContext } from './../Context/UserContext';
import { ListOrders } from "../lib/api";

const profileData = [
  ["البريد الإلكتروني", "mohamed.ahmed.abdg453@gmail.com"],
  ["رقم الجوال", "+966551548415152"],
  [" الموقع", "جدة، المملكة العربية السعودية"],
];
export default function Profile() {
  const { accessToken, currentUser } = useContext(UserContext);

  window.scrollTo(0, 0);


  return (
    <Container>
      <Box
        sx={{
          fontSize: "32px",
          fontWeight: "700",
          lineHeight: "58.99px",
          textAlign: "right",
          paddingBottom: "1.5rem",
        }}
      >
        منصة التحكم
      </Box>
      <Grid
        container
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <ProfileInfo item md={3.6} xs={12} img={ProfileBg} currentUser={currentUser} />
        <Grid
          item
          container
          xs={12}
          md={8.2}
          sx={{
            display: "flex",
            alignContent: "space-between",
            "& > div": {
              minHeight: { xs: "auto", md: "48.5%" },
              borderRadius: "15px",
              padding: "1.5em",
              boxSizing: "border-box",
              boxShadow: "0px 0px 20px 6px #26282A26",
            },
          }}
        >
          <Latest item md={12} xs={12} />
          <Orders item md={12} xs={12} />
        </Grid>
      </Grid>
    </Container>
  );
}
export function ProfileInfo({ item, xs, img, md, currentUser }) {
  return (
    <Grid
      item
      xs={xs}
      md={md}
      sx={{
        borderRadius: "15px",
        padding: "1rem",
        boxSizing: "border-box",
        boxShadow: "0px 0px 20px 6px #26282A26",
        marginBottom: "1rem"
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.5rem 0",
          borderBottom: "2px solid #005288",
        }}
      >
        <Box
          sx={{
            width: "222px",
            height: "222px",
            backgroundImage: `url(${currentUser.image ? currentUser.image : img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#005288",
              border: "2px solid #fff",
              position: "absolute",
              left: "0",
              bottom: "0",
              transform: " translate(15px, -10px)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.2397 22.75H6.75969C3.95969 22.75 2.17969 21.08 2.01969 18.29L1.49969 10.04C1.41969 8.79 1.84969 7.59 2.70969 6.68C3.55969 5.77 4.75969 5.25 5.99969 5.25C6.31969 5.25 6.62969 5.06 6.77969 4.76L7.49969 3.33C8.08969 2.16 9.56968 1.25 10.8597 1.25H13.1497C14.4397 1.25 15.9097 2.16 16.4997 3.32L17.2197 4.78C17.3697 5.06 17.6697 5.25 17.9997 5.25C19.2397 5.25 20.4397 5.77 21.2897 6.68C22.1497 7.6 22.5797 8.79 22.4997 10.04L21.9797 18.3C21.7997 21.13 20.0697 22.75 17.2397 22.75ZM10.8597 2.75C10.1197 2.75 9.17969 3.33 8.83969 4L8.11969 5.44C7.69969 6.25 6.88969 6.75 5.99969 6.75C5.15969 6.75 4.37968 7.09 3.79969 7.7C3.22969 8.31 2.93969 9.11 2.99969 9.94L3.51969 18.2C3.63968 20.22 4.72969 21.25 6.75969 21.25H17.2397C19.2597 21.25 20.3497 20.22 20.4797 18.2L20.9997 9.94C21.0497 9.11 20.7697 8.31 20.1997 7.7C19.6197 7.09 18.8397 6.75 17.9997 6.75C17.1097 6.75 16.2997 6.25 15.8797 5.46L15.1497 4C14.8197 3.34 13.8797 2.76 13.1397 2.76H10.8597V2.75Z"
                fill="white"
              />
              <path
                d="M13.5 8.75H10.5C10.09 8.75 9.75 8.41 9.75 8C9.75 7.59 10.09 7.25 10.5 7.25H13.5C13.91 7.25 14.25 7.59 14.25 8C14.25 8.41 13.91 8.75 13.5 8.75Z"
                fill="white"
              />
              <path
                d="M12 18.75C9.79 18.75 8 16.96 8 14.75C8 12.54 9.79 10.75 12 10.75C14.21 10.75 16 12.54 16 14.75C16 16.96 14.21 18.75 12 18.75ZM12 12.25C10.62 12.25 9.5 13.37 9.5 14.75C9.5 16.13 10.62 17.25 12 17.25C13.38 17.25 14.5 16.13 14.5 14.75C14.5 13.37 13.38 12.25 12 12.25Z"
                fill="white"
              />
            </svg>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "34.41px",
            padding: "1rem 0",
          }}
        >
          {currentUser.business_name}
        </Box>
        <Box
          sx={{
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "18.43px",
            color: "#005288",
          }}
        >
          عضو منذ : أكتوبر 2023
        </Box>
      </Grid>




      <Grid
        sx={{
          "& > div:not(:last-child)": {
            borderBottom: "1px solid #E4E4E4",
          },
        }}
      >
        <Grid>
          <Box sx={{ color: "#878787", padding: "1rem 0 0 0" }}>البريد الإلكتروني</Box>
          <Box padding={"1rem 0"}>{currentUser.email}</Box>
        </Grid>
        <Grid>
          <Box sx={{ color: "#878787", padding: "1rem 0 0 0" }}>رقم الجوال  </Box>
          <Box padding={"1rem 0"}>{currentUser.phone}</Box>
        </Grid>
        <Grid>
          <Box sx={{ color: "#878787", padding: "1rem 0 0 0" }}> الموقع </Box>
          <Box padding={"1rem 0"}>{currentUser.location ? currentUser.location : "غير متوفر "}</Box>
        </Grid>
      </Grid>
      <Link to={'/ProfileSettings'}>
        <Box
          sx={{
            cursor: "pointer",
            marginTop: "3rem",
            fontWeight: "700",
            lineHeight: "24px",
            padding: "10px 27px",
            boxSizing: "border-box",
            borderRadius: "10px",
            border: "2px solid #005288",
            color: "#005288",
            background: "white",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              background: "#005288",
              color: "#FFF",
            },
          }}
        >
          تعديل المعلومات الشخصية{" "}
        </Box></Link>
    </Grid>
  );
}

function InfoItem({ property, value }) {
  return (
    <Grid>
      <Box sx={{ color: "#878787", padding: "1rem 0 0 0" }}>{property}</Box>
      <Box padding={"1rem 0"}>{value}</Box>
    </Grid>
  );
}

function Orders({ item, xs, md }) {
  const [order, setOrders] = useState()
  const { accessToken, currentUser } = useContext(UserContext);
  var userId = currentUser.id
  async function getAllOrders(userId, accessToken) {
    const { data, status } = await ListOrders(userId, accessToken);
    if (status) {
      setOrders(data);
    }
    // console.log(order)
  }
  useEffect(() => {
    getAllOrders(userId, accessToken)
  }, [])
  return (
    <Grid
      item
      container
      xs={xs}
      md={md}
      sx={{
        boxSizing: "border-box",
        "& > div:not(:last-child)": {
          marginBottom: "1rem",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "24.3px",
            textAlign: "right",
          }}
        >
          الطلبات{" "}
        </Box>
        <Link to={'/TrackOrders'}>
          <Box
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              lineHeight: "16.2px",
              textAlign: "left",
              color: "#005288",
              cursor: "pointer"
            }}
          >
            شاهد الكل
          </Box>
        </Link>
      </Grid>
      {order?.length > 0 ? order?.map((order, index) => {
        if (index > 1) {
          return
        }
        return <Grid sx={{ width: "100%" }}>
          <OrderInfo orderDetails={order} />

        </Grid>;
      }) : <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "54px",
          textAlign: "center",
        }}
      >
        "لا يوجد لديك طلبات"
      </Grid>}


    </Grid>
  );
}
function Latest({ item, xs, md }) {
  return (
    <Grid
      item
      container
      xs={xs}
      md={md}
      sx={{
        boxSizing: "border-box",
        marginBottom: "1rem",
        "& > div:not(:last-child)": {
          marginBottom: "0rem",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: "flex", justifyContent: "space-between",
          marginBottom: '0.5rem'
        }}
      >

        <Box
          sx={{
            fontSize: "18px",
            fontWeight: "700",
            lineHeight: "24.3px",
            textAlign: "right",
          }}
        >
          أخر الأحداث
        </Box>

        <LastUpdatesPopUp />


      </Grid>
      <LatestItem />
      <LatestItem />
      <LatestItem />
    </Grid>
  );
}

export function LatestItem() {
  return (
    <Grid
      container
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <Grid
        item
        sx={{
          width: {
            xs: "25px",
            md: "50px",
          },
          height: {
            xs: "25px",
            md: "50px",
          },
          borderRadius: "5px",
          background: "#005288",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M12.5199 21.0299C10.1899 21.0299 7.85987 20.6599 5.64987 19.9199C4.80987 19.6299 4.16987 19.0399 3.88987 18.2699C3.59987 17.4999 3.69987 16.6499 4.15987 15.8899L5.30987 13.9799C5.54987 13.5799 5.76987 12.7799 5.76987 12.3099V9.41992C5.76987 5.69992 8.79987 2.66992 12.5199 2.66992C16.2399 2.66992 19.2699 5.69992 19.2699 9.41992V12.3099C19.2699 12.7699 19.4899 13.5799 19.7299 13.9899L20.8699 15.8899C21.2999 16.6099 21.3799 17.4799 21.0899 18.2699C20.7999 19.0599 20.1699 19.6599 19.3799 19.9199C17.1799 20.6599 14.8499 21.0299 12.5199 21.0299ZM12.5199 4.16992C9.62987 4.16992 7.26987 6.51992 7.26987 9.41992V12.3099C7.26987 13.0399 6.96987 14.1199 6.59987 14.7499L5.44987 16.6599C5.22987 17.0299 5.16987 17.4199 5.29987 17.7499C5.41987 18.0899 5.71987 18.3499 6.12987 18.4899C10.3099 19.8899 14.7399 19.8899 18.9199 18.4899C19.2799 18.3699 19.5599 18.0999 19.6899 17.7399C19.8199 17.3799 19.7899 16.9899 19.5899 16.6599L18.4399 14.7499C18.0599 14.0999 17.7699 13.0299 17.7699 12.2999V9.41992C17.7699 6.51992 15.4199 4.16992 12.5199 4.16992Z"
              fill="white"
            />
            <path
              d="M14.3796 4.43969C14.3096 4.43969 14.2396 4.42969 14.1696 4.40969C13.8796 4.32969 13.5996 4.26969 13.3296 4.22969C12.4796 4.11969 11.6596 4.17969 10.8896 4.40969C10.6096 4.49969 10.3096 4.40969 10.1196 4.19969C9.92963 3.98969 9.86963 3.68969 9.97963 3.41969C10.3896 2.36969 11.3896 1.67969 12.5296 1.67969C13.6696 1.67969 14.6696 2.35969 15.0796 3.41969C15.1796 3.68969 15.1296 3.98969 14.9396 4.19969C14.7896 4.35969 14.5796 4.43969 14.3796 4.43969Z"
              fill="white"
            />
            <path
              d="M12.5195 23.3096C11.5295 23.3096 10.5695 22.9096 9.86953 22.2096C9.16953 21.5096 8.76953 20.5496 8.76953 19.5596H10.2695C10.2695 20.1496 10.5095 20.7296 10.9295 21.1496C11.3495 21.5696 11.9295 21.8096 12.5195 21.8096C13.7595 21.8096 14.7695 20.7996 14.7695 19.5596H16.2695C16.2695 21.6296 14.5895 23.3096 12.5195 23.3096Z"
              fill="white"
            />
          </svg>
        </span>
      </Grid>
      <Grid
        item
        md={9.8}
        xs={10}
        sx={{
          fontSize: {
            xs: "12px",
            md: "14px",
          },
          fontWeight: "700",
          lineHeight: "18.9px",
          color: "#005288",
        }}
      >
        <Box
          sx={{
            fontWeight: "700",
          }}
        >
          العمالة الخاصة بحضراتكم ستكون جاهزة غداً
        </Box>
        <Box
          sx={{
            fontWeight: "400",
            color: "#000",
          }}
        >
          تهانينا! ، العمالة الخاصة بحضراتكم ستكون جاهزة غداً يمكنك التواصل معنا
          اذا اردت على المزيد من التفاصيل
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={1}
        sx={{
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "16.2px",
          textAlign: "left",
          color: "#878787",
        }}
      >
        12 يناير 2024
      </Grid>
    </Grid>
  );
}
