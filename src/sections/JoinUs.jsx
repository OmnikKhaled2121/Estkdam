import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import map2 from '../assets/Map2.svg'


export default function JoinUs() {
    return (
        <>
            <Grid>
                <Container>
                    <Grid container sx={{
                        justifyContent: "center",
                        display:"flex",
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "Almarai"

                    }}>
                            <Box sx={{
                                fontSize: "32px",
                                fontWeight: "800",
                                color: "#005288",
                                paddingBottom: "2rem",
                                textAlign: "center"
                            }}>انضم الأن لمنصتنا الأكبر الأن</Box>

                            <Box sx={{padding:"0 18.5rem"}}>توفر لك منصة المضدر الدولى القدرة على التواصل مع أكبر مكاتب الإستقدام والتوصول إلى الراغبين فى العمل واختيار الشخص المناسب لإحتياجاتك ما بين أكثر من 10 جنسيات مختلفة حول العالم</Box>
                            <Box sx={{padding:"2rem 0"}}>
                                <img src={map2}></img>
                            </Box>
                            <Box sx={{
                                background:"#005288",
                                borderRadius:"10px",
                                width:"186px",
                                height:"63px",
                                color:"white",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                            }}>انضم الأن</Box>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}
