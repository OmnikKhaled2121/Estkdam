import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'

const content = [{
    img: icon1,
    title: "رحلة الإستقدام بخطوات بسيطة",
    desc: "اختصرنا لك رحلة الإستقدام فى خطوات بسيطة كل ما عليك هو اختيار العمالة التى تراها مناسبة لك من حيث الجنسية أو المرتب واترك لنا باقى المهمة، كل ما عليك هو التسجيل على الموقع."
},
{
    img: icon2,
    title: "دعم مستمر طيلة أيام الإسبوع",
    desc: "لأن صوتك له أثر يمكنك رفع الشكاوى أو الملاحظات بشكل إلكتروني دون الحاجة لزيارة الفروع أو قنوات التواصل الخاصة بوزارة الموارد البشرية، وذلك لحماية حقوق أطراف العلاقة التعاقدية. كما يمكنك التواصل مع أحد ممثلى خدمة الدعم الصوتي طيلة أيام الإسبوع"
},
{
    img: icon3,
    title: "أصدار التأشيرة البديلة",
    desc: "أصدر تأشيرة بديلة بدون رسوم حكومية في حال الخروج النهائي للعمالة خلال 90 يوم من تاريخ وصولهم للمملكة."
},
{
    img: icon4,
    title: "تأشيرة العمالة المنزلية",
    desc: "خدمه تتيح للأفراد إصدار تأشيرات العمالة المنزلية لاستقدام العمالة المطلوبة من خلال المهن والجنسيات المتاحة في منصة المصدر الدولي للإستقدام."
},
{
    img: icon5,
    title: "ضمان 3 أشهر!!",
    desc: "استلم العامل وأحصل على ضمان لمدة 3 شهور فى حالة وجود أى مشكلة أو تقصير من العامل"
},
{
    img: icon6,
    title: "نقل خدمات العمالة المنزلية",
    desc: "أتمتة ومتابعة وتحسين نقل خدمات العمالة المنزلية عبر تطبيقات تقنية مبتكرة وخدمات إلكترونية تستهدف مكاتب الاستقدام والعملاء."
},
]


export default function WhatOffer() {
    return (
        <Grid sx={{
            fontFamily: "Almarai",
            color: "#005288",
            padding:"3rem 0"

        }}>
            <Container>
                <Box sx={{
                    fontFamily: "Almarai",
                    fontSize: "48px",
                    fontWeight: "700",
                    padding: "2rem 1rem"
                }}>ماذا نقدم؟</Box>
                <Grid container>
                   {content.map((item)=>{
                    return(<>
                    <TableData title={item.title} img={item.img} desc={item.desc}></TableData>
                    </>)
                   })}


                </Grid>
            </Container>
        </Grid>
    )
}

function TableData({title,img,desc}) {
    return (<>
        <Grid xs={6} sx={{ padding: "1.5rem" }}>
            <Grid container >
                <Grid xs={3}>
                    <Box sx={{}} >
                        <img src={img}></img>
                    </Box>
                </Grid>

                <Grid xs={9}>
                    <Box sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    padding: "0.5rem 0"
                }}>  {title}</Box>
                <Box sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                }}>{desc}</Box>
                </Grid>

            </Grid>
        </Grid>
    </>)

}
