import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import bg1 from '../assets/Background1.png'
import StartingSction from '../components/StartingSction'
import ColorfulTitles from '../components/ColorfulTitles'

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DropDownFilter from './../components/DropDownFilter';
import TodayIcon from '@mui/icons-material/Today';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FilterBtn from '../components/FilterBtn'
import EmpCard from '../components/EmpCard'




export default function EstkdamRequest() {

  return (
    <Grid>
      <Container >
        <Grid container sx={{ alignItems: "center" }}>
          <StartingSction bg={bg1}
            title={'طلب الإستقدام'}
            Searchplaceholder={'هل تبحث عن إستقدام معين؟'}
            SearchKeys={['مديره منزل', 'مساعد شخصي', 'ربه منزل', 'سائق خاص']}
            desc={'تعاقد مع أكثر من 20 ألف عامل من مختلف الوظائف والبلدان من خلال منصة المصدر الدولي للإستقدام، وتمتع بعروض رائعة وسرعة ودقة اختيار العمالة لك'}
          />
          {/* <ColorfulTitles /> */}

          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "35.71px",
              textAlign: "right",
              color: "#005288",
              paddingBottom: "2rem",
              marginTop: "2rem"
            }}
          >
            بحث متقدم
          </Box>


          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "2rem",
            }}
          >
            <Grid
              item
              md={8}
              xs={10.5}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                marginBottom: "2rem"
              }}
            >
              <DropDownFilter type={"العمر"} icon={<TodayIcon />} />
              <DropDownFilter type={"المهنه"} icon={<WorkOutlineIcon />} />
              <DropDownFilter type={"الجنسية"} icon={<LanguageOutlinedIcon />} />
              <DropDownFilter type={"الخبره"} icon={<StarOutlineIcon />} />

            </Grid>

            <Grid
              item
              xs={10}
              md={3}
              sx={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}
            >    <FilterBtn /> </Grid>


            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "35.71px",
                color: "#005288",
                paddingBottom: "2rem",
                paddingTop:"1rem"
              }}
            >
              جميع النتائج
            </Box>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: ".5rem",
              }}
            >
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid itemmd={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
              <Grid item md={3.94} xs={12} sx={{ boxSizing: "border-box" }}>
                <EmpCard />
              </Grid>
            </Grid>






          </Grid>






        </Grid>
      </Container>
    </Grid>
  )
}
