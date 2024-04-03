import { FormControl, MenuItem } from "@mui/material";
import React, { useRef } from "react";
import { ageDropDown, experienceDropDown } from "../Data";
import { GetAllNationalities, GetAllProfessions } from "../lib/api";

export default function DropDownFeild({
  type,
  request,
  setValue,
  dropDownData,
}) {
  //   console.log("Dropdowndata", dropDownData);
  return (
    <>
      <FormControl fullWidth sx={{ maxHeight: "200px", overflowY: "auto" }}>
        {Object.keys(dropDownData).map((item) => {
          const dropDownFeild = dropDownData[item];
          return (
            <>
              <MenuItem
                onClick={() => {
                  request.current = handleRequestDropDown(
                    type,
                    dropDownFeild,
                    setValue,
                    request
                  );
                }}
              >
                {dropDownFeild.label}
              </MenuItem>
            </>
          );
        })}
      </FormControl>
    </>
  );
}

// function handleDataDropDown(type) {
//   let data = {};
//   switch (type) {
//     case "العمر":
//       data = ageDropDown;
//       break;
//     case "الخبره":
//       data = experienceDropDown;
//       break;
//     case "الجنسية":
//       data = handleNationalitiesDropDown();
//       break;
//     case "المهنه":
//       data = handleProfessionDropDown();
//       break;
//     default:
//       break;
//   }
//   return data;
// }

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
  console.log("Iteeem", item);
  console.log("nationality", item.nationality);
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

// async function handleProfessionDropDown() {
//   const { data, status } = await GetAllProfessions();
//   console.log("proo", data);
//   if (status) {
//     return data.map((item) => {
//       return item.name;
//     });
//   }
// }

// async function handleNationalitiesDropDown() {
//   const { data, status } = await GetAllNationalities();
//   console.log("naaat", data);
//   if (status) {
//     return data.map((item) => {
//       return item.name;
//     });
//   }
// }
