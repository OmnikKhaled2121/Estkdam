import { FormControl, MenuItem } from "@mui/material";
import React, { useRef } from "react";
import { handleRequestDropDown } from "../Utils/DropDownHelper";

export default function DropDownFeild({
  type,
  request,
  setValue,
  dropDownData,
 
}) {
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
                    request,
                    
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
