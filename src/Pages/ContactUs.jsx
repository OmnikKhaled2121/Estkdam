import React from 'react'
import Bg from '../assets/cyanBackground.png'
import { Box, Container, FormControl, FormControlLabel, FormLabel, Grid, Input, Radio, RadioGroup, TextField } from '@mui/material'
import SocialLogos from '../components/SocialLogos'
import Help from '../sections/Help'
import map from '../assets/FindMap.png'
import FileUpload from 'react-mui-fileuploader'
import { Button } from 'react-scroll'

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
                    <Grid container sx={{
                        background: "white",
                        borderRadius: "10px",
                        padding: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "0px 0px 20px 6px #26282A14"

                    }}>
                        <Box sx={{
                            fontSize: "36px",
                            fontWeight: 700,
                            lineHeight: "48.6px",
                            textAlign: "right",
                            marginBottom: "1rem"
                        }}>أرسل لنا رسالة</Box>
                        <Box sx={{
                            fontSize: "16px",
                            fontWeight: 700,
                            lineHeight: "24px",
                            textAlign: "justify",
                            color: "rgba(0, 82, 136, 1)",
                            marginBottom: "1rem"
                        }}>ما الغرض من التواصل؟</Box>

                        <Grid sx={{
                            display: "flex",
                            width: "100%"
                        }}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"

                                >
                                    <DisplayOptions option={"استفسار"} />
                                    <DisplayOptions option={"شكوى"} />
                                    <DisplayOptions option={"اقتراح"} />
                                </RadioGroup>

                            </FormControl>
                        </Grid>

                        <Grid sx={{
                            display: "flex",
                            flexDirection: "row"

                        }}>
                            <TextFieldBox><TextField id="standard-basic" label="الإسم كامل" variant="standard" /></TextFieldBox>
                            <TextFieldBox> <TextField id="standard-basic" label="البريد الإلكترونى" variant="standard" /></TextFieldBox>
                            <TextFieldBox> <TextField id="standard-basic" label="رقم الجوال" variant="standard" /></TextFieldBox>

                        </Grid>
                        <TextField
                            id="standard-textarea"
                            label="اترك رسالتك"
                            multiline
                            rows={10}
                            variant="standard"
                            sx={{marginBottom:"3rem"}}
                        />
                        <UploadFile  xs={4}/>
                        <Grid sx={{
                            display:"flex",
                            justifyContent:"center"
                        }}>
                            <Box sx={{
                                display: "flex",
                                width: "279px",
                                height: "62px",
                                color: "white",
                                background: "#005288",
                                borderRadius: "10px",
                                fontFamily: "Almarai",
                                fontSize: "20px",
                                fontWeight: 700,
                                lineHeight: "22.23px",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                إرسال
                            </Box>

                        </Grid>



                    </Grid>
                </Container>
            </Grid>
            <Container>
                <Help title={'أين تجدنا؟'} img={map} />
            </Container>

        </>
    )
}

 export function UploadFile({xs}) {


    return (<>
        <Grid xs={xs} sx={{
            display: "flex",
         
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: 'space-evenly',
                background: "rgba(218, 234, 244, 1)",
                color: "rgba(0, 82, 136, 1)",
                width: "116px",
                height: "41px",
                borderRadius: "49px",
                border: "1px solid rgba(0, 82, 136, 1)",
                padding: "0.5rem",
                fontFamily: "Almarai",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "18.9px",
                marginLeft: "0.5rem",
                cursor:"pointer"

            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M12.7077 18.1042C11.9785 18.1042 11.2389 17.8229 10.6868 17.2708C10.1452 16.7292 9.8431 16.0104 9.8431 15.25C9.8431 14.4896 10.1452 13.7604 10.6868 13.2292L12.1556 11.7604C12.4577 11.4583 12.9577 11.4583 13.2597 11.7604C13.5618 12.0625 13.5618 12.5625 13.2597 12.8646L11.791 14.3333C11.541 14.5833 11.4056 14.9063 11.4056 15.25C11.4056 15.5938 11.541 15.9271 11.791 16.1667C12.3014 16.6771 13.1244 16.6771 13.6348 16.1667L15.9473 13.8542C17.2702 12.5312 17.2702 10.3854 15.9473 9.06252C14.6243 7.7396 12.4785 7.7396 11.1556 9.06252L8.63473 11.5833C8.10348 12.1146 7.81184 12.8125 7.81184 13.5521C7.81184 14.2917 8.10348 15 8.63473 15.5208C8.93682 15.8229 8.93682 16.3229 8.63473 16.625C8.33265 16.9271 7.83265 16.9271 7.53057 16.625C6.70765 15.8021 6.25977 14.7083 6.25977 13.5417C6.25977 12.375 6.70765 11.2813 7.53057 10.4583L10.0514 7.9375C11.9785 6.01042 15.1243 6.01042 17.0514 7.9375C18.9785 9.86458 18.9785 13.0104 17.0514 14.9375L14.7389 17.25C14.1764 17.8229 13.4473 18.1042 12.7077 18.1042Z" fill="#213039" />
                    <path d="M12.4997 23.6981C6.32259 23.6981 1.30176 18.6772 1.30176 12.5002C1.30176 6.32308 6.32259 1.30225 12.4997 1.30225C18.6768 1.30225 23.6976 6.32308 23.6976 12.5002C23.6976 18.6772 18.6768 23.6981 12.4997 23.6981ZM12.4997 2.86475C7.18717 2.86475 2.86426 7.18766 2.86426 12.5002C2.86426 17.8127 7.18717 22.1356 12.4997 22.1356C17.8122 22.1356 22.1351 17.8127 22.1351 12.5002C22.1351 7.18766 17.8122 2.86475 12.4997 2.86475Z" fill="#213039" />
                </svg>
                ارفق ملف
            </Box>
            <Box sx={{
                fontFamily: "Almarai",
                fontSize: "12px",
                fontWeight: 700,
                lineHeight: "16.2px",
                textAlign: "right",
                color: "#878787",
                display: "flex",
                alignItems: "center"
            }}
            >ملف مثل : JPG أو PNG بحجم  <br />
                أقصاه 5 ميجا بايت </Box>


        </Grid>

    </>)
}

const handleFileUploadError = (error) => {
    // Do something...
}

const handleFilesChange = (files) => {
    // Do something...
    // setUploadedFiles([...files]);
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


function DisplayOptions({ option }) {


    return (
        <>
            <Box sx={{
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "19.66px",
                color: "rgba(127, 129, 137, 1)",
                width: "159px",
                height: "45px",
                borderRadius: "8px",
                border: "1.5px solid rgba(217, 217, 217, 1)",
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "0.5rem",
                marginBottom: "2rem"
            }}>
                <FormControlLabel value={option} control={<Radio />} label={option} />
            </Box>

        </>
    )
}


function TextFieldBox({ children }) {

    return (
        <>
            <Grid item xs={4} sx={{
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "17.66px",
                color: "rgba(135, 135, 135, 1)",
            }}>
                {children}
            </Grid>
        </>
    )
}