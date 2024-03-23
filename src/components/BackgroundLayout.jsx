import React from 'react'
import { Box, Container, Grid } from '@mui/material';
import SocialLogos from './SocialLogos';

export default function BackgroundLayout({img, title,desc ,common}) {
    return (
        <Container>
            <Box
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "26px",
                    padding: "3rem",
                    overflow: "hidden",
                    position: "relative",
                    zIndex: "1",
                    marginBottom: "2rem",

                    "&::after": {
                        content: "' '",
                        position: "absolute",
                        top: "0",
                        right: "0",
                        left: "0",
                        bottom: "0",
                        background: "rgba(0, 0, 0, 0.5)",
                        zIndex: "2",
                    },
                }}
            >
                <Grid
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: "3",
                        position: "relative",
                    }}>
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "64px",
                        fontWeight: "800",
                        lineHeight: "71.42px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        margin: "2rem 0"
                    }}> {title}</Box>
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "20px",
                        fontWeight: "700",
                        lineHeight: "30px",
                        textAlign: "center",
                        color: "#FFFFFF",
                        margin: "2rem 0",
                        whiteSpace:"pre"
                    }}> {desc}</Box>

                    <Grid
                        sx={{
                            width: "200px",
                            height: "59px",
                            border: "2px solid #FFFFFF",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FFFFFF",
                            margin: "2rem 0"

                        }}
                    >هل تحتاج إلى مساعدة؟</Grid>
                   {common ? <SocialLogos/> : null}
                   
                </Grid>
            </Box>
        </Container>
    )
}



