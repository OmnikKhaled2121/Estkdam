import React from 'react'
import { Box, Grid, Typography } from "@mui/material";



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



export default function Statistics() {
    return (
        <Grid sx={{
            background: "#DAEAF4",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            margin:"2rem 0",
            padding:"3rem 0"
        }}>

            {Data.map((item) => {
                return (<>
                    <Grid sx={{
                        flexDirection: "column",
                        display: "flex",
                        padding: "0 5rem",
                        justifyContent: "center",
                        alignItems: "center",
                        color:"#005288",
                        fontFamily:"Almarai",
                        textAlign:"center",
                        fontWeight:700
                    }}>
                        <Box component="span" sx={{fontWeight:"400",fontSize:"20px"}} > {item.title}</Box>
                        <Box component="span" sx={{fontWeight:"800" ,fontSize:"48px"}} > {item.num}</Box>
                        <Box component="span"  sx={{fontWeight:"700",fontSize:"36px"}} > {item.desc}</Box>
                    </Grid>

                </>

                )



            })}
        </Grid>
    )
}
