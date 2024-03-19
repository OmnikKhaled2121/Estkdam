import { Box, Grid } from '@mui/material'
import React from 'react'
import SearchInput from './SearchInput'
import TextKey from './TextKey'

export default function StartingSction({ bg ,title , desc , Searchplaceholder , SearchKeys}) {
    return (
        <>
            <Box sx={{
                width: "100%",
                padding: "3rem 0",
                boxSizing: "border-box",
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: '3rem'

            }}>
                <Grid item xs={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start",

                    }}>
                    <Box
                        sx={{
                            fontFamily: "Almarai",
                            fontSize: "48px",
                            fontWeight: "800",
                            lineHeight: "53px",
                            letterSpacing: "0em",
                            textAlign: "justify",
                            marginBottom: "1rem",
                            color: 'white'
                        }}
                    > {title}
                    </Box>
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "30px",
                        letterSpacing: "0em",
                        marginBottom: "1rem",
                        color: 'white',
                        textAlign: "justify"
                    }}>
                        {desc}
                    </Box>
                    <SearchInput whiteTheme isFooter={false} text= {Searchplaceholder} />
                    <TextKey white texts={SearchKeys}></TextKey>

                    <Box
                        sx={{
                            margin: "3rem 0 1.5rem 0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "180px",
                            height: "40px",
                            borderRadius: "10px",
                            border: '2px solid white',
                            color: "white",
                            padding: "15px 22px",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                            fontWeight: "700",
                            lineHeight: "17px",
                            "&:hover": {
                                cursor: "pointer"
                            }
                        }}
                    >
                        هل تحتاج إلى مساعدة؟ </Box>
                </Grid></Box>

        </>
    )
}
