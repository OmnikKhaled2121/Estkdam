import { Container, Grid } from '@mui/material'
import React from 'react'
import bg from '../assets/background3.png'
import StartingSction from '../components/SearchInput/StartingSction'
import ColorfulTitles from '../components/SearchInput/ColorfulTitles'

export default function KafalaTransfer() {
  return (
    <Grid>
    <Container >
      <Grid container>
        <StartingSction bg={bg}
          title={'نقل الكفالة'}
          Searchplaceholder={'هل تبحث عن إستقدام معين؟'}
          SearchKeys={['مديره منزل', 'مساعد شخصي', 'ربه منزل', 'سائق خاص']}
          desc={'نساعدك من خلال منصة المصدر الدولب للإستقدام فى نقل الكفالة من شخص إلى أخر خلال مدة قصيرة وسرعة ودقة عالية لإتمام المهمة'}
        />
          <ColorfulTitles />
      </Grid>
    </Container>
  </Grid>
  )
}
