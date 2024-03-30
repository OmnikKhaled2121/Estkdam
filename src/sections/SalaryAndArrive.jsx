import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import bg from '../assets/flight.png'

export default function SalaryAndArrive() {
    return (
        <Container>

            <Grid container>
                <Grid sx={{
                    marginBottom: "2rem"
                }}>
                    <Box sx={{
                        fontSize: "48px",
                        fontWeight: "700",
                        lineHeight: "53.57px",
                        textAlign: "right",
                        color: "rgba(0, 82, 136, 1)",
                        marginBottom: "2rem"
                    }}>
                        الراتب ووصول العمالة
                    </Box>
                    <Box sx={{
                        fontSize: "24px",
                        fontWeight: "400",
                        lineHeight: "36px",
                        textAlign: "justify",
                    }}>يتم الإتفاق على الراتب بالتنسيق مع صاحب العمل والعمالة المنزلية، كما يتم توضيح كافة الشروط والأحكام حفاظًا على حقوق وواجبات كل الأطراف، والمكتب يقم بصورة دورية بمتابعة الطلب للتأكد من التزام الجميع بالعقد المتفق عليه ، كل ما عليك فعله فقط اختيار العمالة المنزلية الملائمة لك.</Box>
                </Grid>
            </Grid>
            <Grid container sx={{
                background: "rgba(218, 234, 244, 1)",
                borderRadius: "26px",
                border: "2px solid rgba(0, 82, 136, 1)",
            }}>
                <Grid sx={{
                    display: "flex",
                    justifyContent: "space-around"

                }}>
                    <Grid item  md={5} xs={10} sx={{
                        padding: "2rem 0.2rem",
                        boxSizing: "border-box"
                    }} >

                        <Box
                            sx={{
                                fontSize: "36px",
                                fontWeight: "800",
                                lineHeight: "54px",
                                textAlign: "center",
                                color: "rgba(0, 82, 136, 1)",
                                marginBottom: "1rem"
                                // padding: "2rem 1rem"
                            }}
                        >توفر المنصة ضمان فى حالة تغيب العامل أو رفض العمل</Box>

                        <Box
                            sx={{
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "24px",
                                textAlign: "center",
                                color: "rgba(33, 48, 57, 1)",
                            }}
                        >يحرص فريق عمل منصة المصدر الدولي للإستقدام على توفير السرعة والجودة في الأداء، ويقم بالإشراف على وصول العمالة المدربة واستقبالها، وذلك بداية من طلب الإستشارة وحتى بدء العمل بشكل كامل</Box>
                    </Grid>

                    <Grid item xs={5} sx={{
                        boxSizing: "border-box",
                        backgroundImage: `url(${bg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        height: "100%"
                    }} />
                </Grid>
            </Grid>


        </Container>
    )
}
