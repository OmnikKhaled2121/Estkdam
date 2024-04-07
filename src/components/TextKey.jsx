import { Box, Grid } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TextKey({ texts, white, to }) {
  let navigate = useNavigate();
  // console.log(texts);
  return (
    <>
      <Grid
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          "& > div": { marginLeft: "1rem" },
        }}
      >
        <Box
          sx={{
            fontFamily: "Almarai",
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "18px",
            color: white ? "white" : null,
          }}
        >
          كلمات مفتاحية:
        </Box>

        <Grid sx={{ display: "flex" }}>
          {texts.map((item) => {
            return (
              <>
                <Link to={`/${to}?profession=${item}`} replace style={{color:"#000000"}}>
                  <Box
                    sx={{
                      padding: "10px 13px 10px 13px",
                      background: "#FFFFFFB2",
                      borderRadius: "37px",
                      border: "0.7px solid #21303999",
                      fontFamily: "Almarai",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineHeight: "18px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: ".5rem",
                      boxSizing: "border-box",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      navigate(`/${to}/${item}`);
                    }}
                  >
                    {item}
                  </Box>
                </Link>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
