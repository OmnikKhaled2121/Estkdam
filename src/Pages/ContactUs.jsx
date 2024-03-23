import React from 'react'
import Bg from '../assets/cyanBackground.png'
import { Box, Container, Grid } from '@mui/material'
import SocialLogos from '../components/SocialLogos'
import Help from '../sections/Help'
import map from '../assets/FindMap.png'

export default function ContactUs() {
    return (
        <>
            <Grid
                id="Landing"
                sx={{
                    width: "100%",
                    padding: "3rem 0",
                    boxSizing: "border-box",
                    backgroundImage: `url(${Bg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 95%",
                }}
            >
                <ContactWith />
                <Container>
                    <Grid container sx={{background:"white",
                     borderRadius:"10px",
                     padding:"2rem"
                }}>
                        <Box sx={{
                            fontSize: "36px",
                            fontWeight: 700,
                            lineHeight: "48.6px",
                            textAlign: "right"
                        }}>أرسل لنا رسالة</Box>

                    </Grid>
                </Container>



            </Grid>




            <Container>
                <Help title={'أين تجدنا؟'} img={map} />
            </Container>

        </>
    )
}


function ContactWith() {
    return (
        <>
            <Container>
                <Grid
                    container
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                        padding: "1rem 0",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "64px",
                            fontWeight: "800",
                            lineHeight: "71.42px",
                            textAlign: "center",
                            color: "rgba(0, 82, 136, 1)"
                        }}

                    >تواصل معنا</Box>
                    <Box sx={{
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "rgba(33, 48, 57, 1)"
                    }}>
                        <>هل تحتاج إلى مساعدة أو استفسار؟ اترك رسالتك وسوف <br />
                            يتواصل معك أحد أعضاء حدمة العملاء لدينا فى أسرع وقت</>
                    </Box>
                    <SocialLogos colored circleColor />
                </Grid>
            </Container>
        </>
    )
}
