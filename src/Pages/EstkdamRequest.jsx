import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import bg1 from '../assets/Background1.png'
import StartingSction from '../components/SearchInput/StartingSction'
import ColorfulTitles from '../components/SearchInput/ColorfulTitles'

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
          <ColorfulTitles />


        </Grid>
      </Container>
    </Grid>
  )
}
