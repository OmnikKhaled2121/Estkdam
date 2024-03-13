import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import { Title } from '@mui/icons-material';


const Data = [
    {
        title: "أكثر من ",
        num: "12000",
        desc: "طلب"
    },
    {
        title: "أكثر من ",
        num: "6500",
        desc: "عقد ناجح"
    },
    {
        title: "أكثر من ",
        num: "120",
        desc: "مكتب استقدام"
    },
    {
        title: "أكثر من ",
        num: "10",
        desc: "جنسيات"
    }
]

function displayData({ children, number }) {
    return (
        <Grid sx={{
            display: "flex",
            padding: "5px"
        }}>
            <Grid >{children}</Grid>
            <Grid >{number}</Grid>
        </Grid>
    )
}

export default function Statistics() {
    return (
        <Grid sx={{
            background: "#DAEAF4",
            display: "flex",
            width: "100%",
            height:"50%",
            justifyContent: "center",
        }}>

            {Data.map((item) => {
                return (<>
                    <Grid sx={{
                        display: "block",
                        flexDirection: "column",
                        display: "flex",
                        padding: "0 5rem",
                        justifyContent: "center",
                        alignItems: "center",
                        color:"#005288",
                        fontFamily:"Almarai",
                        fontWeight:700
                    }}>
                        <Box component="span" sx={{fontWeight:"400"}} > {item.title}</Box>
                        <Box component="span" sx={{fontWeight:"800"}} > {item.num}</Box>
                        <Box component="span"  sx={{fontWeight:"700"}} > {item.desc}</Box>
                    </Grid>


                    {/* <Typography component="pre">{item.title}</Typography>
                    <Typography component="pre">{item.num}</Typography>
                    <Typography component="pre">{item.desc}</Typography> */}

                </>

                )



            })}
        </Grid>
    )
}
