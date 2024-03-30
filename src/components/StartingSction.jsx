import { Box, Grid } from "@mui/material";
import React from "react";

import TextKey from "./TextKey";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function StartingSction({
  bg,
  title,
  desc,
  Searchplaceholder,
  SearchKeys,
}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxSizing: "border-box",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "26px",
          padding: "3rem",
          overflow: "hidden",
          position: "relative",
          zIndex: "1",
          "&::after": {
            content: "' '",
            position: "absolute",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: "2",
          },
        }}
      >
        <Grid
          item
          md={7}
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            zIndex: "3",
            position: "relative",
          }}
        >
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "48px",
              fontWeight: "800",
              lineHeight: "53px",
              letterSpacing: "0em",
              textAlign: "justify",
              marginBottom: "1rem",
              color: "white",
            }}
          >

            {title}
          </Box>
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "30px",
              letterSpacing: "0em",
              marginBottom: "1rem",
              color: "white",
              textAlign: "justify",
            }}
          >
            {desc}
          </Box>
          <SearchInput whiteTheme isFooter={false} text={Searchplaceholder} />
          <TextKey white texts={SearchKeys}></TextKey>


          <Link to={'/ContactUs'}>
            <Box
              sx={{
                margin: "3rem 0 1.5rem 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "180px",
                height: "40px",
                borderRadius: "10px",
                border: "2px solid white",
                color: "white",
                padding: "15px 22px",
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "17px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              هل تحتاج إلى مساعدة؟{" "}
            </Box>
          </Link>
        </Grid>
      </Box>
    </>
  );
}
