import React from 'react'
import bg from '../assets/background2.png'
import StartingSction from '../components/SearchInput/StartingSction'
import { Box, Container, Grid } from '@mui/material'
import ColorfulTitles from '../components/SearchInput/ColorfulTitles'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export default function EstkdamOffices() {
  return (
    <>
      <Grid>
        <Container >
          <Grid container>
            <StartingSction bg={bg}
              title={'مكاتب الإستقدام'}
              Searchplaceholder={'هل تبحث عن مكتب معين؟'}
              SearchKeys={[' مكتب افق حائل', ' مكتب الخدمه الأفضل', ' مكتب الامد العربي', ' مكتب عبر البلدان']}
              desc={'تمتع بالقدرة على التواصل مع مجموعة كبيرة من مكاتب الإستقدام المرخصة حول المملكة للحصول على أفضل عمالة ممكنة'}
            />
            <ColorfulTitles office />

            <Grid sx={{
              padding: "4rem"
            }}>

              <Grid sx={{
                fontFamily: "Almarai",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "35.71px",
                textAlign: "right",
                color: "#005288",
                padding: "2rem"

              }}>
                <Box>بحث متقدم</Box>
              </Grid>

              <Grid sx={{ display: "flex" }} >
                <Grid xs={6} sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }} >
                  <Grid sx={{
                    border: "1px solid #BAC8D1",
                    borderRadius: "12px",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    margin: "1rem"
                  }}>
                    <PlaceOutlinedIcon sx={{ padding: "0rem 0.5rem" }} />
                    <Box sx={{ padding: "0rem 0.5rem" }}>الموقع</Box>
                    <KeyboardArrowDownIcon sx={{ padding: "0rem 0.5rem" }} />
                  </Grid>

                  <Grid sx={{
                    border: "1px solid #BAC8D1",
                    borderRadius: "12px",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "flex-end",
                    margin: "1rem"
                  }}>
                    <LanguageOutlinedIcon sx={{ padding: "0rem 0.5rem" }} />
                    <Box sx={{ padding: "0rem 0.5rem" }}>الجنسيه</Box>
                    <KeyboardArrowDownIcon sx={{ padding: "0rem 0.5rem" }} />
                  </Grid>


                  <Grid sx={{
                    background: "#005288",
                    color: "white",
                    borderRadius: "12px",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "flex-end",
                    margin: "1rem"
                  }}>

                    <Box sx={{ padding: "0rem 2rem" }}>تطبيق</Box>

                  </Grid>


                  
                  <Grid sx={{
                    border:"1px solid #BD295E",
                    color: "#BD295E",
                    borderRadius: "12px",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    textAlign: "center",
                    justifyContent: "flex-end",
                    margin: "1rem"
                  }}>

                    <Box sx={{ padding: "0rem 2rem" }}>إلغاء التصنيف</Box>

                  </Grid>

                </Grid>
                {/* <Grid xs={6} sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}>
                  <Grid  x={{
                    border: "1px solid #BAC8D1",
                    borderRadius: "12px",
                    padding: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    margin: "1rem"
                  }}>
                    <Box>تطبيق</Box>
                  </Grid>
                </Grid> */}
              </Grid>



            </Grid>

          </Grid>
        </Container>
      </Grid>
    </>
  )
}
