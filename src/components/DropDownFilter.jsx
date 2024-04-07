import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ageDropDown, experienceDropDown } from "../Data";

import DropDownFeild from "./DropDownFeild";
import {
  handleInitial,
  handleNationalitiesDropDown,
  handleProfessionDropDown,
} from "../Utils/DropDownHelper";

export default function DropDownFilter({
  type,
  icon,
  request,
  isClear,
  setIsClear,
  initial,
}) {
  // console.log("initial", initial);
  
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState(handleInitial({type,initial}));
  const [professions, setProfessions] = useState({});
  const [nationalities, setNationalities] = useState({});

  const fetchData = async () => {
    const professions = await handleProfessionDropDown();
    const nationalities = await handleNationalitiesDropDown();
    setProfessions(professions);
    setNationalities(nationalities);
  };

  const dropDownData = handleDataDropDown(type, nationalities, professions);
  useEffect(() => {
    fetchData();
    if (isClear) {
      setValue("");
      setIsClear(false);
    }
  }, [isClear]);

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
          position: "relative",
        }}
        onClick={() => {
          setFlag((prev) => !prev);
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
        <Grid
          sx={{
            position: "absolute",
            bgcolor: "white",
            top: "100%",
            zIndex: "6666",
            display: flag ? "block" : "none",
          }}
        >
          <DropDownFeild
            type={type}
            request={request}
            setValue={setValue}
            dropDownData={dropDownData}
            
          />
        </Grid>
      </Grid>
    </>
  );
}

function handleDataDropDown(type, allNat, allPro) {
  let data = {};
  switch (type) {
    case "العمر":
      data = ageDropDown;
      break;
    case "الخبره":
      data = experienceDropDown;
      break;
    case "الجنسية":
      data = allNat;
      break;
    case "المهنه":
      data = allPro;
      break;
    default:
      break;
  }

  return data;
}
