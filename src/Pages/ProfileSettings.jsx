import { CircularProgress, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import settingProfile from "../assets/settingProfile.jfif";
import EditProfilePopUp from "../components/EditProfilePopUp";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { UpdateEmployee } from "../lib/api";

export default function ProfileSettings() {
  window.scrollTo(0, 0);
  const { currentUser, accessToken, setCurrentUser } = useContext(UserContext);
  let navigate = useNavigate();
  console.log(" currentUser.image", currentUser.image);
  const [editedProfileData, seteditedProfileData] = useState({
    status: "clean",
    data: {
      image: {
        label: "صورة المستخدم",
        value: currentUser.image ? currentUser.image : settingProfile,
        status: "clean",
      },
      business_name: {
        label: "اسم المستخدم",
        value: currentUser.business_name
          ? currentUser.business_name
          : "غيرمتوفر",
        status: "clean",
      },
      email: {
        label: "البريد الإلكتروني",
        value: currentUser.email ? currentUser.email : "غير متوفر",
        status: "clean",
      },
      phone: {
        label: "رقم الجوال",
        value: currentUser.phone ? currentUser.phone : "غير متوفر ",
        status: "clean",
      },
      location: {
        label: "الموقع",
        value: currentUser.location ? currentUser.location : "غير متوفر",
        status: "clean",
      },
    },
  });

  const [open, setOpen] = useState(false);
  const [property, setproperty] = useState("");
  const [value, setvalue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClickOpen = (property, value) => {
    setproperty(property);
    setvalue(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveChanges = () => {
    if (editedProfileData.status == "touched") {
      let obj = {};
      Object.keys(editedProfileData.data).forEach((item) => {
        if (editedProfileData.data[item].status == "touched") {
          obj[`${item}`] = editedProfileData.data[item].value;
        }
      });
      handleUpdateProfile(obj);
    }
  };

  const handleUpdateProfile = async (obj) => {
    console.log("currentUser", currentUser);
    setIsLoading(true)
    const { data, status } = await UpdateEmployee(
      currentUser.id,
      accessToken,
      obj
    );
    if (status) {
      setCurrentUser(data);
      setIsLoading(false)
      navigate("/profile");
    } else {
      console.log("Not Done");
    }
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
          {Object.keys(editedProfileData.data).map((item, index) => {
            return (
              <Field
                property={item}
                value={editedProfileData.data[`${item}`]}
                key={index}
                handlePopupOpen={handleClickOpen}
                seteditedProfileData={seteditedProfileData}
              />
            );
          })}
        </Grid>
        <Grid
          sx={{ margin: "3rem 0", display: "flex", justifyContent: "center" }}
        >
          <Box
            onClick={() => {
              if (editedProfileData.status == "touched") {
                saveChanges();
              }
              //  ?  : ""
            }}
            sx={{
              fontWeight: "700",
              lineHeight: "24px",
              padding: "10px 27px",
              boxSizing: "border-box",
              borderRadius: "54px",
              border: "2px solid #005288",
              background:
                editedProfileData.status == "touched" ? "#005288" : "#586974",
              cursor:
                editedProfileData.status == "touched"
                  ? "pointer"
                  : "not-allowed",
              color: "#FFF",
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                color:
                  editedProfileData.status == "touched" ? "#005288" : "white",
                background:
                  editedProfileData.status == "touched" ? "white" : "#586974",
              },
            }}
            // onClick={handleUpdateProfile}
          >
          {isLoading ?   <CircularProgress size={"2.5rem"} /> : " حفظ الإعدادات"}   
          </Box>
        </Grid>
      </Container>
      <EditProfilePopUp
        open={open}
        handleClose={() => {
          handleClose();
        }}
        property={property}
        value={value}
        seteditedProfileData={seteditedProfileData}
      />
    </>
  );
}

function Field({ property, value, handlePopupOpen, seteditedProfileData }) {
  const [image, setImage] = useState(value.value);

  if (property == "image" && typeof value.value == "object") {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };

    // Pass the File object directly to readAsDataURL
    reader.readAsDataURL(value.value);
  }
  console.log("imageee", image);
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
        {value.label}
      </Grid>
      <Grid item md={3} xs={12} color={"#000"}>
        {property == "image" ? (
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
            <img width={"100%"} src={image} />
          </Box>
        ) : (
          value.value
        )}
      </Grid>
      <Grid item md={3} xs={12} sx={{ display: "flex", justifyContent: "end" }}>
        <Box
          onClick={() => {
            handlePopupOpen(property, value, seteditedProfileData);
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
