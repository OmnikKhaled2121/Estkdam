import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import mapPic from '../assets/map1.png'
import flag1 from '../assets/FlagIndia.png'
import flag2 from '../assets/FlagKenea.png'
import flag3 from '../assets/FlagPlihipin.png'
import flag4 from  '../assets/FlagIndia.png'
import flag5 from '../assets/FlagSerelanka.png'
import flag6 from '../assets/FlagOganda.png'
import flag7 from '../assets/FlagAthyouba.png'
 
const cardData = [{
    img: flag1,
    city: "بنجلاديش",
    price: "11500"
},
{
    img: flag2,
    city: "كينيا",
    price: "12500"
},
{
    img: flag3,
    city: "الفلبين",
    price: "10000"
},
{
    img: flag4,
    city: "الهند",
    price: "11000"
},
{
    img: flag5,
    city: "سيرلانكا",
    price: "11500"
},
{
    img: flag6,
    city: "اوغندا",
    price: "10500"
},
{
    img: flag7,
    city: "اثيوبيا",
    price: "13500"
},
]

export default function EstkdamCountry() {
    return (
        <>

            <Grid sx={{
                background: "#DAEAF4",
                padding: "3rem 0",
                margin:"6rem 0"
            }}>
                <Container sx={{

                    color: "#005288",
                    fontFamily: "Almarai",

                }}>
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "48px",
                        fontWeight: "700",
                        padding: "2rem 1rem"
                    }}>دول الإستقدام</Box>
                    <Grid container sx={{

                        backgroundImage: `url(${mapPic})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "auto 60%",
                        backgroundPosition: "center",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                        {cardData.map((item)=>{
                            return(<> <CityCard  img={item.img} city={item.city} price={item.price} ></CityCard></>)
                           

                        })}

                    </Grid>
                </Container>
            </Grid>

        </>
    )
}


function CityCard({img,city,price}) {
 
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
                    <img src={img}></img>
                </Box>
                <Box sx={{
                    fontSize: "36px",
                    fontWeight: "700",
                    padding: "0.5rem"
                }}>{city}</Box>
                <Box sx={{ padding: "0.5rem 0" }}>سرعة وصول لعمالة مدربة وكفاءات عالية</Box>
                <Box sx={{
                    fontSize: "22px",
                    "&>span": {
                        fontWeight: "700",
                        fontSize: "32px",
                    }
                }}> <span>{price}</span> ر.س</Box>
            </Grid></Grid>
    </>)
}