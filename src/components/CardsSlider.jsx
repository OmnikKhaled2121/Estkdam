import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid, Box } from '@mui/material'
import MultiCards from './MultiCards'

export default function CardsSlider(props) {
    var items = [
        {
            img: <MultiCards />,

        },
        {
            img: <MultiCards />,

        },
        {
            img: <MultiCards />,

        }
    ]

    return (
        <Carousel cycleNavigation={false} >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{ background: "none" }}>
            <Grid container >{props.item.img}

                <Grid 
                 >
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "26.78px",
                        textAlign: "center",
                        color: "white",
                        marginBottom: "1rem"

                    }}>
                        اختر من بين مجموعة كبيرة من العمالة
                    </Box>
                    <Box sx={{
                        fontFamily: "Almarai",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "15.62px",
                        textAlign: "center",
                        color: "white",
                        marginBottom: "2rem"

                    }}>
                        تمتع بالقدرة على اختيار العمالة المميزة من بين أكثر من 20 دولة مختلفة وأكثر من 15 وظيفة مختلفة لتحصل على العامل المناسب لإحتياجاتك
                    </Box>
                </Grid>
            </Grid>

        </Paper >
    )
}
