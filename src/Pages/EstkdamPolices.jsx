import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import BackgroundLayout from '../components/BackgroundLayout'
import Bg from '../assets/polices.jpeg'
import { employee, owner } from '../Data'
import HRServices from '../sections/HRServices'




export default function EstkdamPolices() {
    window.scrollTo(0, 0);
    return (
        <>
            <Grid>
                <Container>
                    <Grid container>
                        <BackgroundLayout
                            img={Bg}
                            title={"سياسات الإستقدام"}
                            desc={
                                <>
                                وضع الدستور والقانون السعودي معايير ومفاهيم <br />
                                خاصة بالعمالة المنزلية يجب اتباعها لضمان حقوق <br/>
                                الطرفين (العامل وصاحب العمل)
                            </>
                            }
                        />

                        <Grid sx={{
                            fontFamily: "Almarai",
                            fontSize: "48px",
                            fontWeight: "700",
                            lineHeight: "53.57px",
                            textAlign: "right",
                            color: "rgba(0, 82, 136, 1)",
                            margin: "2rem 0"
                        }}>واجبات صاحب العمل والعامل</Grid>



                    </Grid>

                    <Grid container
                        sx={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >

                        <Grid item xs={12} md={5.7}
                            sx={{
                                marginBottom: "3rem",
                                "& > div:not(:last-child)": {
                                    marginBottom: "1rem",
                                },
                            }}

                        >
                            <Box
                                sx={{
                                    background: "linear-gradient(268.94deg, #0B3866 -5.98%, #6AC293 95.88%)",
                                    color: "white",
                                    borderRadius: "14px",
                                    padding: "0.5rem",
                                    textAlign: "center",

                                }}

                            >واجبات عامل الخدمة المنزلية</Box>
                            {employee.map((item) => {
                                return (<>
                                    <EmployeeAndOwnerDuties key={item.desc} icon={item.icon} desc={item.desc} />
                                </>)
                            })}

                        </Grid>

                        <Grid item xs={12} md={5.7}
                            sx={{
                                marginBottom: "1rem",
                                "& > div:not(:last-child)": {
                                    marginBottom: "1rem",
                                },
                            }}
                        >

                            <Box
                                sx={{
                                    background: "linear-gradient(268.94deg, #0B3866 -5.98%, #6AC293 95.88%)",
                                    color: "white",
                                    borderRadius: "14px",
                                    padding: "0.5rem",
                                    textAlign: "center"

                                }}

                            > واجبات صاحب العمل تجاه عامل الخدمة المنزلية   </Box>

                            {owner.map((item) => {
                                return (
                                    <>
                                        <EmployeeAndOwnerDuties key={item.desc} icon={item.icon} desc={item.desc} />
                                    </>
                                )
                            })}

                        </Grid>
                    </Grid>


                 <HRServices/>
                </Container >
            </Grid >

        </>
    )
}


function EmployeeAndOwnerDuties({ icon, desc }) {

    return (
        <>
            <Grid sx={{
                display: "flex",
                width: "100%"


            }}>

                <Box sx={{
                    width: "85px",
                    height: "85px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"

                }}>

                    {icon}
                </Box>

                <Box xs={10} sx={{
                    display: "flex",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "30px",
                    justifyContent: "left",
                    alignItems: "center",
                    boxSizing: "border-box",
                    marginRight: "1rem",
                    textAlign: "justify"
                }}>
                    {desc}
                </Box>
            </Grid>
        </>
    )


}
