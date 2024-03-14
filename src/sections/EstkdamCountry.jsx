import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import mapPic from '../assets/map1.png'
import flag from '../assets/FlagIndia.png'


export default function EstkdamCountry() {
    return (
        <>

            <Grid sx={{
                background: "#DAEAF4",
                padding: "3rem 0"
            }}>
                <Container sx={{

                    color: "#005288",
                    fontFamily: "Almarai",

                }}>
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "48px",
                        fontWeight: "700",
                        padding: "4rem 1rem"
                    }}>دول الإستقدام</Box>
                    <Grid container sx={{

                        backgroundImage: `url(${mapPic})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "auto 60%",
                        backgroundPosition: "center",
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                        <CityCard></CityCard>
                        <CityCard></CityCard>
                        <CityCard></CityCard>
                        <CityCard></CityCard>
                        <CityCard></CityCard>
                        <CityCard></CityCard>
                        <CityCard></CityCard>
                    </Grid>
                </Container>
            </Grid>

        </>
    )
}


function CityCard() {
    return (<>
        <Grid xs={3} sx={{
            padding: "1rem",
            color: "#005288",
          

        }}>
            <Grid sx={{
                background: "white",
                borderRadius: "26px",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center"
            }} >
                <Box>
                    <img src={flag}></img>
                </Box>
                <Box sx={{
                    fontSize: "36px",
                    fontWeight: "700",
                    padding: "0.5rem"
                }}>بنجلاديش</Box>
                <Box sx={{ padding: "0.5rem 0" }}>سرعة وصول لعمالة مدربة وكفاءات عالية</Box>
                <Box sx={{
                    fontSize: "22px",
                    "&>span": {
                        fontWeight: "700",
                        fontSize: "32px",
                    }
                }}> <span>11500</span> ر.س</Box>
            </Grid></Grid>
    </>)
}