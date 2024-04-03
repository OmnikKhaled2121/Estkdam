import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ageDropDown, experienceDropDown } from "../Data";
import {
  GetAllNationalities,
  GetAllProfessions,
  SearchEmployee,
} from "../lib/api";
import DropDownFeild from "./DropDownFeild";

export default function DropDownFilter({
  type,
  icon,
  request,
  isClear,
  setIsClear,
}) {
  const [flag, setFlag] = useState(false);
  const [value, setValue] = useState("");
  const [professions, setProfessions] = useState({});
  const [nationalities, setNationalities] = useState({});
  console.log("type", type);

  // let dropDownData = useRef(handleDataDropDown(type));
  // let dropDownData = handleDataDropDown(type);
  console.log("clear", isClear);
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
      console.log("isClear", isClear);
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
          console.log("Helloooo");
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

function handleRequestDropDown(type, item, setValue, currentRequest) {
  //   let request = {};
  //   setValue(item.label);
  //   switch (type) {
  //     case "العمر":
  //       request["age_min"] = item.age_min;
  //       request["age_max"] = item.age_max;
  //       break;
  //     case "الخبره":
  //       request["min_experience_years"] = item.min_experience_years;
  //       request["max_experience_years"] = item.max_experience_years;
  //       break;
  //     case "الجنسية":
  //       request["nationality"] = item.nationality;
  //       break;
  //     case "المهنه":
  //       request["profession"] = item.profession;
  //       break;
  //     default:
  //       break;
  //   }
  //   return request;

  let request = { ...currentRequest.current }; // Spread currentRequest to avoid mutation
  setValue(item.label);
  switch (type) {
    case "العمر":
      request = {
        ...request,
        age_min: item.age_min,
        age_max: item.age_max,
      };
      break;
    case "الخبره":
      request = {
        ...request,
        min_experience_years: item.min_experience_years,
        max_experience_years: item.max_experience_years,
      };
      break;
    case "الجنسية":
      request = {
        ...request,
        nationality: item.nationality,
      };
      break;
    case "المهنه":
      request = {
        ...request,
        profession: item.profession,
      };
      break;
    default:
      break;
  }
  return request;
}

async function handleProfessionDropDown() {
  const { data, status } = await GetAllProfessions();
  //   console.log("proo", data);
  const professions = {};
  if (status) {
    data.forEach((item, index) => {
      professions[index + 1] = {
        label: item.name,
        profession: item.name,
      };
    });
  }
  return professions;
}

async function handleNationalitiesDropDown() {
  const { data, status } = await GetAllNationalities();
  //   console.log("naaat", data);
  const nationality = {};
  if (status) {
    data.forEach((item, index) => {
      nationality[index + 1] = {
        label: item.name,
        nationality: item.name,
      };
    });
  }
  return nationality;
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
  // console.log("databbb", data);
  return data;
}
