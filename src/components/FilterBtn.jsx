import { Grid } from "@mui/material";
import React from "react";
import { SearchEmployee } from "../lib/api";

export default function FilterBtn({ request, setAllEmployee, setIsClear }) {
  async function getAll(request) {
    const { data, status } = await SearchEmployee(request);
    if (status) {
      setAllEmployee(data);
    }
  }
  return (
    <>
      <Grid
        sx={{
          background: "#005288",
          color: "white",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #005288",
          height: "58px",
          width: "124px",
          transition: ".3s",
          cursor:"pointer",
          "&:hover": {
            background: "#fff",
            color: "#005288",
          },
        }}
        onClick={() => {
          getAll(request.current);
        }}
      >
        تطبيق
      </Grid>
      <Grid
        sx={{
          border: "2px solid #BD295E",
          color: "#BD295E",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "58px",
          width: "148px",
          transition: ".3s",
          cursor:"pointer",
          "&:hover": {
            color: "#fff",
            background: "#BD295E",
          },
        }}
        onClick={() => {
          request.current = {};
          setIsClear(true);
        }}
      >
        إلغاء التصنيف
      </Grid>
    </>
  );
}
