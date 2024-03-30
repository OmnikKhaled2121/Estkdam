import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function DropDownFilter({ type, icon }) {
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState("");
  const x = ["20 year", "30 year", "29 year", "15 year"];
  return (
    <>
      <Grid
        sx={{
          width: "149px",
          height: "59px",
          border: "1px solid #BAC8D1",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginLeft: ".5rem",
          // position: "relative",
        }}
        onClick={() => {
          console.log("Helloooo");
          // setFlag((prev) => !prev);
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {icon}
          <span style={{ marginRight: ".5rem" }}>{value ? value : type}</span>
        </Box>
        <KeyboardArrowDownIcon />
        {/* <Grid
          sx={{
            position: "absolute",
            bgcolor: "red",
            top: "100%",
            zIndex: "6666",
            display: flag ? "block" : "none",
          }}
        >
          {x.map((item, index) => {
            return (
              <>
                <Box
                  key={index}
                  sx={{
                    width: "149px",
                    height: "59px",
                    border: "1px solid #BAC8D1",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginLeft: ".5rem",
                  }}
                  onClick={() => {
                    // setFlag((prev) => !prev);
                    setValue(item);
                  }}
                >
                  {item}
                </Box>
              </>
            );
          })}
        </Grid> */}
      </Grid>
    </>
  );
}
