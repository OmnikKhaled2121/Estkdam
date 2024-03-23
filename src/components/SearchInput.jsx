import { Box, Grid } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function SearchInput({ isFooter, text, whiteTheme }) {
  return (
    <Box
      sx={{
        width: "500px",
        height: "50px",
        border: isFooter ? "solid 1px #005288" : "",
        borderRadius: "35px",
        background: isFooter ? "#DAEAF4" : whiteTheme ? "rgba(255, 255, 255, 0.35)" : "white",
        overflow: "hidden",
        color: isFooter ? "#DAEAF4" : whiteTheme ? "white" : "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".4rem",
        marginBottom: "1rem",
      }}
    >
      {!isFooter ? (
        <Grid
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",


          }}
        >
          <SearchIcon sx={{ fontSize: "2rem" }} />
        </Grid>
      ) : (
        <Box></Box>
      )}
      <style>
        {`::placeholder { color: ${isFooter ? "#005288": "black"};}`}
      </style>
      <input
        id="searchInput"
        placeholder={`${isFooter ? "اكتب بريدك الإلكترونى" : text
          }`}
      />
      <Grid
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: isFooter ? "#005288" : whiteTheme ? "#DAEAF4" : "#213039",
          color: whiteTheme ? "#005288" : "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        <ArrowBackIcon />
      </Grid>
    </Box>
  );
}
