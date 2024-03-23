import { Box, Grid } from '@mui/material'
import React from 'react'
import  KeyboardArrowDownIcon  from '@mui/icons-material/KeyboardArrowDown';

export default function DropDownFilter ({type,icon}) {
  return (
    <>
   <Grid sx={{
        width: "149px",
        height: "59px",
        border: "1px solid #BAC8D1",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: ".5rem",
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
        <span style={{ marginRight: ".5rem" }}>{type}</span>
      </Box>
      <KeyboardArrowDownIcon />
    </Grid>
    
    </>
  )
}
