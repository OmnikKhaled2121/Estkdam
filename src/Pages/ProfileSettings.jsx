import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import settingProfile from "../assets/settingProfile.jfif";
import EditProfilePopUp from "../components/EditProfilePopUp";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function ProfileSettings() {
  const { currentUser } = useContext(UserContext);
  const profileData = [

    ["صورة المستخدم", currentUser.image ? currentUser.image: settingProfile],
    ["اسم المستخدم", currentUser.business_name ? currentUser.business_name:"غيرمتوفر"],
    ["البريد الإلكتروني", currentUser.email?currentUser.email:"غير متوفر"],
    ["رقم الجوال", currentUser.phone?currentUser.phone:"غير متوفر "],
    [" الموقع", currentUser.loaction?currentUser.loaction:"غير متوفر"],
  ];
  const [open, setOpen] = useState(false);
  const [property, setproperty] = useState("");
  const [value, setvalue] = useState("");
  const handleClickOpen = (property, value) => {
    console.log("first")
    setproperty(property);
    setvalue(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
          إعدادات الملف الشخصى
        </Box>
        <Grid
          sx={{
            width: "100%",
            borderRadius: "15px",
            padding: "1rem",
            boxSizing: "border-box",
            boxShadow: " 0px 0px 20px 6px #26282A26",
            "& > div:not(:last-child)": {
              borderBottom: "1px solid #B1ADAD",
            },
          }}
        >
          {profileData.map((item, index) => {
            return (
              <Field
                property={item[0]}
                value={item[1]}
                key={index}
                handlePopupOpen={handleClickOpen}
              />
            );
          })}
        </Grid>
        <Grid
          sx={{ margin: "3rem 0", display: "flex", justifyContent: "center" }}
        >
          <Link to={"/Profile"}>
            <Box
              sx={{
                fontWeight: "700",
                lineHeight: "24px",
                padding: "10px 27px",
                boxSizing: "border-box",
                borderRadius: "54px",
                border: "2px solid #005288",
                background: "#005288",
                color: "#FFF",
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  color: "#005288",
                  background: "white",
                },
              }}
            >
              حفظ الإعدادات
            </Box>
          </Link>
        </Grid>
      </Container>
      <EditProfilePopUp
        open={open}
        handleClose={handleClose}
        property={property}
        value={value}
      />
    </>
  );
}

function Field({ property, value, handlePopupOpen }) {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem .5rem",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "24px",
        color: "#878787",
      }}
    >
      <Grid item md={3} xs={12}>
        {property}
      </Grid>
      <Grid item md={3} xs={12} color={"#000"}>
        {property == "صورة المستخدم" ? (
          <Box
            sx={{
              height: "65px",
              width: "65px",
              borderRadius: "50%",
              overflow: "hidden",
              "& > img ": {
                transform: "translateY(-15%)",
              },
            }}
          >
            <img width={"100%"} src={value} />
          </Box>
        ) : (
          value
        )}
      </Grid>
      <Grid item md={3} xs={12} sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          onClick={() => {
            handlePopupOpen(property, value);
          }}
          sx={{
            padding: "10px 27px",
            boxSizing: "border-box",
            borderRadius: "54px",
            border: "2px solid #005288",
            color: "#005288",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              background: "#005288",
              color: "#FFF",
            },
          }}
        >
          تغير
        </Box>
      </Grid>
    </Grid>
  );
}
