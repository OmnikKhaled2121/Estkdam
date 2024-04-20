import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Box } from '@mui/system';
import { Grid, TextField } from '@mui/material';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import { LatestItem } from '../Pages/Profile';


export default function LastUpdatesPopUp({ not }) {
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, stylisRTLPlugin],
    });
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <Box onClick={handleClickOpen}
                sx={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16.2px",
                    textAlign: "left",
                    color: "#005288",
                    cursor: "pointer"
                }}
            >
                شاهد الكل
            </Box>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="md"
                disableScrollLock
            >



                <Grid item sx={{
                    padding: "3rem",
                    marginBottom: ".5rem",
                    "& > div:not(:last-child)": {
                        marginBottom: "1rem",
                    },
                }}>
                    <Grid container
                        sx={{
                            justifyContent: "space-between",

                        }}>
                        <Box sx={{
                            fontWeight: "700",
                            fontSize: "25px",
                            fontFamily: "Almarai"
                        }}>
                            أخر الأحداث
                        </Box>
                        <Box onClick={handleClose}
                            sx={{
                                cursor: "pointer"
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#005288" />
                                <path d="M9.17035 15.5804C8.98035 15.5804 8.79035 15.5104 8.64035 15.3604C8.35035 15.0704 8.35035 14.5904 8.64035 14.3004L14.3004 8.64035C14.5904 8.35035 15.0704 8.35035 15.3604 8.64035C15.6504 8.93035 15.6504 9.41035 15.3604 9.70035L9.70035 15.3604C9.56035 15.5104 9.36035 15.5804 9.17035 15.5804Z" fill="#005288" />
                                <path d="M14.8304 15.5804C14.6404 15.5804 14.4504 15.5104 14.3004 15.3604L8.64035 9.70035C8.35035 9.41035 8.35035 8.93035 8.64035 8.64035C8.93035 8.35035 9.41035 8.35035 9.70035 8.64035L15.3604 14.3004C15.6504 14.5904 15.6504 15.0704 15.3604 15.3604C15.2104 15.5104 15.0204 15.5804 14.8304 15.5804Z" fill="#005288" />
                            </svg>
                        </Box>
                    </Grid>
                    {not.length == undefined ? <Box>{not.message}</Box> : <>
                        {not?.map((item) => {
                            return (
                                <>
                                    <LatestItem key={item.id} message={item.message} />
                                </>
                            )
                        })}
                    </>}

                </Grid>
            </Dialog >
        </>
    )
}
