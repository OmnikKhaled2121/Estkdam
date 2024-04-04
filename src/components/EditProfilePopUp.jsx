import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Box } from "@mui/system";
import { Grid, TextField } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";
import img from "../assets/settingProfile.jfif";
import { UploadFile } from "../Pages/ContactUs";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

export default function EditProfilePopUp({
  open,
  handleClose,
  property,
  value,
}) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  const [isLoading, setisLoading] = useState(false);

  const schema = Joi.object({
    FName: Joi.string().min(2).max(30).required().messages({
      "string.empty": "يرجى إدخال اسم للمستخدم .",
      "string.min": "يجب أن يتكون الاسم من ما لا يقل عن 2 أحرف.",
      "string.max": "يجب ألا يتجاوز الاسم 30 حرفًا.",
    }),
    Email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required()
      .messages({
        "string.empty": "يرجى إدخال عنوان بريد إلكتروني .",
        "string.email": "يرجى إدخال عنوان بريد إلكتروني صحيح.",
      }),
    Phone: Joi.string()
      .regex(/^01[0125][0-9]{8}$/)
      .required()
      .messages({
        "string.empty": "يرجى إدخال رقم هاتف.",
        "string.pattern.base":
          "الرقم غير صحيح، يجب أن يتكون من 11 رقم ويبدأ بـ 01.",
      }),
    Password: Joi.string().required().min(8).messages({
      "string.empty": "يرجى إدخال كلمة المرور.",
      "string.min": "يجب أن يتكون الاسم من ما لا يقل عن 8 أحرف.",
    }),
    CPassword: Joi.string().valid(Joi.ref("Password")).required().messages({
      "string.empty": "يرجى إدخال تأكيد كلمة المرور.",
      "any.only": "يجب أن تتطابق كلمة المرور مع تأكيد كلمة المرور",
    }),
  });

  const form = useForm({
    resolver: joiResolver(schema),
  });
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState,
    setError,
    setValue,
  } = form;

  const { errors } = formState;

  const onSubmit = async (inputs) => {
    setisLoading(true);
    // const { data, status } = await Register(inputs);
    // if (status) {
    //   setisLoading(false);
    //   localStorage.setItem(
    //     "USER",
    //     JSON.stringify({ accessToken: data.access_token, userData: data.user })
    //   );
    //   checkLoggedIn();
    // } else {
    //   setisLoading(false);
    //   setError(
    //     "Email",
    //     { type: "focus", message: "الايميل مستخدم من قبل!" },
    //     { shouldFocus: true }
    //   );
    // }
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
        disableScrollLock
      >
        <Grid
          sx={{
            padding: "3rem",
            boxSizing: "border-box",
          }}
        >
          {property === "صورة المستخدم" ? (
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: `url(${img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  position: "relative",
                  marginBottom: "1rem",
                }}
              ></Box>
              <Grid>
                <UploadFile
                  md={4}
                  xs={12}
                  register={register}
                  errors={errors}
                  setError={setError}
                  setValue={setValue}
                />
              </Grid>
            </Grid>
          ) : (
            <>
              <Box
                sx={{
                  fontFamily: "Almarai",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "19.66px",
                  textAlign: "right",
                  color: "#000000",
                  marginBottom: "1.5rem",
                }}
              >
                {property + " الحالي"}
              </Box>
              <Box
                sx={{
                  fontFamily: "Almarai",
                  fontSize: {
                    xs: "15px",
                    md: "20px",
                  },
                  fontWeight: "800",
                  lineHeight: "29.5px",
                  textAlign: "right",
                  color: "#000000",
                  marginBottom: "1.5rem",
                  borderBottom: "1.5px solid #B1ADAD",
                  paddingBottom: "1rem",
                }}
              >
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
                    marginBottom: "1.5rem",
                  }}
                />{" "}
              </CacheProvider>
            </>
          )}
          <DialogActions
            sx={{
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              onClick={handleClose}
              sx={{
                background: "#005288",
                color: "white",
                fontWeight: 700,
                fontSize: "20px",
                borderRadius: "10px",
                padding: "1rem 0",
                width: "100%",
                textAlign: "center",
                border: "2px solid #005288",
                marginBottom: "1.5rem",
                cursor: "pointer",
              }}
            >
              حفظ التغييرات
            </Box>

            <Box
              onClick={handleClose}
              sx={{
                background: "white",
                color: "#BD295E",
                border: "2px solid #BD295E",
                fontWeight: 700,
                fontSize: "20px",
                borderRadius: "10px",
                padding: "1rem 0",
                width: "100%",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              إالغاء
            </Box>
          </DialogActions>
        </Grid>
      </Dialog>
    </>
  );
}
