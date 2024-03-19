import { Box, Grid } from '@mui/material'
import React from 'react'

export default function ColorfulTitles({ office }) {
    return (
        <>
            <Grid item xs={4} sx={{
                fontFamily: "Almarai",
                textalign: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: "4rem"
            }}  >

                <Grid sx={{
                    display: "flex",
                    fontSize: " 40px",
                    fontWeight: "800",
                    lineHeight: " 44.64px",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        background: " linear-gradient(70.65deg, #FF1B6B -19.17%, #76213F 204.69%)",
                        padding: "0.5rem"

                    }} id="LandingTitle" >
                        x2
                    </Box>
                    <Box sx={{
                        background: "linear-gradient(268.94deg, #FF1B6B -5.98%, #45CAFF 95.88%)",
                        padding: " 0.5rem 0rem "
                    }} id="LandingTitle"> أسرع </Box>

                </Grid>
                <Grid sx={{
                    fontSize: " 16px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    padding: "0.5rem"
                }}>
                    <Box>من جميع منصات الإستقدام الأخرى</Box>
                </Grid>
            </Grid>
            <Grid item xs={4} sx={{
                fontFamily: "Almarai",
                fontSize: " 40px",
                fontWeight: "800",
                lineHeight: " 44.64px",
                textalign: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: "4rem"
            }} >

                <Grid sx={{
                    display: "flex",
                    fontSize: " 40px",
                    fontWeight: "800",
                    lineHeight: " 44.64px",
                    justifyContent: "center",
                }}>
                    <Box sx={{
                        background: "linear-gradient(268.94deg, #1DBDE6 -5.98%, #F89B29 95.88%)",
                        padding: "0.5rem"

                    }} id="LandingTitle" >
                        20% أقل
                    </Box>
                </Grid>

                <Grid sx={{
                    fontSize: " 16px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    padding: "0.5rem",
                    textAlign: "center"

                }}>
                    <Box>فى المرتبات من باقى المنصات</Box>
                </Grid>
            </Grid>

            {!office ? <Grid item xs={4} sx={{

                fontFamily: "Almarai",
                textalign: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: "4rem"
            }}>
                <Grid sx={{
                    display: "flex",
                    fontSize: " 40px",
                    fontWeight: "800",
                    lineHeight: " 44.64px",
                    justifyContent: "center",
                }}>


                    <Box sx={{
                        background: " linear-gradient(268.94deg, #99505D 9.34%, #0B3866 102.19%)",
                        padding: "0.5rem"
                    }} id="LandingTitle">
                        20+
                    </Box>
                    <Box sx={{
                        background: "linear-gradient(268.94deg, #0B3866 -5.98%, #6AC293 95.88%)",
                        padding: " 0.5rem 0rem"
                    }} id="LandingTitle"> ألف عامل </Box>
                </Grid>
                <Grid sx={{
                    fontSize: " 16px",
                    fontWeight: "400",
                    lineHeight: "17px",
                    padding: "0.5rem",
                    textAlign: "center"

                }}>
                    <Box>من مختلف الجنسيات والمهن</Box>
                </Grid>
            </Grid> :

                <Grid item xs={4} sx={{

                    fontFamily: "Almarai",
                    textalign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4rem"
                }}>
                    <Grid sx={{
                        display: "flex",
                        fontSize: " 40px",
                        fontWeight: "800",
                        lineHeight: " 44.64px",
                        justifyContent: "center",
                    }}>


                        <Box sx={{
                            background: " linear-gradient(268.94deg, #99505D 9.34%, #0B3866 102.19%)",
                            padding: "0.5rem"
                        }} id="LandingTitle">
                            120+
                        </Box>
                        <Box sx={{
                            background: "linear-gradient(268.94deg, #0B3866 -5.98%, #6AC293 95.88%)",
                            padding: " 0.5rem 0rem"
                        }} id="LandingTitle"> مكتب  </Box>
                    </Grid>
                    <Grid sx={{
                        fontSize: " 16px",
                        fontWeight: "400",
                        lineHeight: "17px",
                        padding: "0.5rem",
                        textAlign: "center"

                    }}>
                        <Box> مرخص من جميع أركان المملكة  </Box>
                    </Grid>
                </Grid>

            }

        </>




    )
}
