import { Box, Grid } from '@mui/material'
import React from 'react'

export default function TextKey({ texts , white }) {

    console.log(texts)
    return (<>


        <Grid
            sx={{
                display: "flex",
                alignItems: "center",
                "& > div": { marginLeft: "1rem" },
            }}
        >


            <Box
                sx={{
                    fontFamily: "Almarai",
                    fontSize: "12px",
                    fontWeight: "700",
                    lineHeight: "18px",
                    color: white? "white": null
                }}
            >
                كلمات مفتاحية:
            </Box>


            {texts.map((item) => {
                return (<>

                    <Box
                        sx={{
                            padding: "10px 13px 10px 13px",
                            background: "#FFFFFFB2",
                            borderRadius: "37px",
                            border: "0.7px solid #21303999",
                            fontFamily: "Almarai",
                            fontSize: "12px",
                            fontWeight: "400",
                            lineHeight: "18px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {item}
                    </Box>

                </>)
            })}


        </Grid>

    </>)
}

