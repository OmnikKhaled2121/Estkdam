import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TitleSearch } from "../lib/api";
import { Link, useNavigate } from "react-router-dom";

export default function SearchInput({
  isFooter,
  text,
  whiteTheme,
  setAllEmployee,
  to,
}) {
  const [profession, setProfession] = useState("");
  let navigate = useNavigate();

  async function getAll(input) {
    const { data, status } = await TitleSearch(input);
    console.log("Essss", data);
    setAllEmployee(data);
  }

  useEffect(() => {}, []);
  return (
    <Box
      md={8}
      xs={10}
      sx={{
        width: {
          md: "500px",
          xs: "300px",
        },
        height: "50px",
        border: isFooter ? "solid 1px #005288" : "",
        borderRadius: "35px",
        background: isFooter
          ? "#DAEAF4"
          : whiteTheme
          ? "rgba(255, 255, 255, 0.35)"
          : "white",
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
          <Link
            to={`/EstkdamRequest${
              profession ? "?profession=" + profession : ""
            }`}
          >
            <SearchIcon
              sx={{
                color: "inherit",
                fontSize: "2rem",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Link>
        </Grid>
      ) : (
        <Box></Box>
      )}
      <style>
        {`::placeholder { color: ${isFooter ? "#005288" : "black"};}`}
      </style>
      <input
        id="searchInput"
        onChange={(e) => {
          setProfession(e.target.value);
          console.log("e.target.value", e.target.value);
        }}
        placeholder={`${isFooter ? "اكتب بريدك الإلكترونى" : text}`}
      />
      <Link
        to={`/EstkdamRequest${profession ? "?profession=" + profession : ""}`}
      >
        <Grid
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: isFooter
              ? "#005288"
              : whiteTheme
              ? "#DAEAF4"
              : "#213039",
            color: whiteTheme ? "#005288" : "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <ArrowBackIcon />
        </Grid>
      </Link>
    </Box>
  );
}
