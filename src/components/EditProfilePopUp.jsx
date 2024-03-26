import React, { useState } from 'react'
import { Button } from 'react-scroll';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Box } from '@mui/system';
import { Grid, TextField } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import stylisRTLPlugin from 'stylis-plugin-rtl';
import img from "../assets/settingProfile.jfif";
import { UploadFile } from '../Pages/ContactUs';




export default function EditProfilePopUp({ property, value }) {
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
          padding: "10px 27px",
          boxSizing: "border-box",
          borderRadius: "54px",
          border: "2px solid #005288",
          color: "#005288",
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor:"pointer",
          "&:hover": {
            background: "#005288",
            color: "#FFF",
          },
        }}
      >
        تغير
      </Box>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="sm"
      >
        <Grid item sx={{
          padding: "3rem",
          marginBottom: ".5rem",
        }}>

          {property === "صورة المستخدم" ?
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "1.5rem 0",

              }}
            >
              <Box sx={{
                width: "222px",
                height: "222px",
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "50%",
                position: "relative",
                marginBottom: "1rem"
              }}>

              </Box>
              <Grid>
                <UploadFile xs={12} />
              </Grid>
            </Grid>
            :

            <>
              <Box sx={{
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19.66px",
                textAlign: "right",
                color: "#000000",
                marginBottom: "1.5rem"

              }}>
                {property + " الحالي"}
              </Box>
              <Box sx={{
                fontFamily: "Almarai",
                fontSize: "24px",
                fontWeight: "800",
                lineHeight: "29.5px",
                textAlign: "right",
                color: "#000000",
                marginBottom: "1.5rem",
                borderBottom: "1.5px solid #B1ADAD",
                paddingBottom: "1rem"
              }}>
                {value}
              </Box>
              <CacheProvider value={cacheRtl}>

                <TextField
                  id="outlined-multiline-static"
                  size="small"
                  fullWidth
                  placeholder={property + " الجديد"}
                  type="text"
                  sx={{
                    marginBottom: "1.5rem"
                  }}

                /> </CacheProvider>
            </>

          }
          <DialogActions sx={{
            flexDirection: "column",
            alignItems: "flex-start"
          }}>

            <Box onClick={handleClose} sx={{
              background: "#005288",
              color: "white",
              fontWeight: 700,
              fontSize: "20px",
              borderRadius: "10px",
              padding: "1rem 0",
              width: "100%",
              textAlign: 'center',
              border: "2px solid #005288",
              marginBottom: "1.5rem",
              cursor:"pointer"
            }}>

              حفظ التغييرات
            </Box>

            <Box onClick={handleClose} sx={{
              background: "white",
              color: "#BD295E",
              border: "2px solid #BD295E",
              fontWeight: 700,
              fontSize: "20px",
              borderRadius: "10px",
              padding: "1rem 0",
              width: "100%",
              textAlign: 'center',
              marginBottom: "1.5rem",
              cursor:"pointer"

            }}>
              إالغاء
            </Box>


          </DialogActions>

        </Grid>
      </Dialog >
    </>
  )
}

