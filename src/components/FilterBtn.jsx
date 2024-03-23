import { Grid } from '@mui/material'
import React from 'react'

export default function FilterBtn() {
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
        "&:hover": {
          background: "#fff",
          color: "#005288",
        },
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
        "&:hover": {
          color: "#fff",
          background: "#BD295E",
        },
      }}
    >
      إلغاء التصنيف
    </Grid>


  </>
  )
}
