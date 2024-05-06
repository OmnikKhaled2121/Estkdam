import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { FormControl } from "@mui/base";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

function FormHelperTextProps(indicator) {
  return {
    sx: {
      display: "none",
      fontFamily: "Almarai",
      color: "#fff !important",
      bgcolor: `${indicator ? "#e65257" : ""}`,
      borderRadius: "5px",
      boxSizing: "border-box",
      padding: "5px",
      marginX: "0",
    },
  };
}

export default function FormInput({
  register,
  label,
  errors,
  ele,
  type,
  xs,
  md,
  defaultVal,
}) {
  function FormHelperTextProps(indicator) {
    return {
      sx: {
        display: "none",
        fontFamily: "Almarai",
        color: "#fff !important",
        bgcolor: `${indicator ? "#e65257" : ""}`,
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: "5px",
        marginX: "0",
      },
    };
  }
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <Grid
        item
        xs={xs}
        md={md}
        sx={{
          marginBottom: "1rem",
          // background: errors[ele] ? "red" : "",
        }}
      >
        <TextField
          id="outlined-size-small"
          size="small"
          fullWidth
          label={<>{label}</>}
          errors={errors[ele]}
          // helperText={errors[ele] ? errors[ele].message : " "}
          FormHelperTextProps={FormHelperTextProps(errors[ele])}
          type={type}
          {...register(ele)}
          defaultValue={defaultVal}
        />
      </Grid>
    </CacheProvider>
  );
}
export function FromInput1({
  xs,
  id,
  label,
  multiline,
  register,
  errors,
  ele,
  type,
  rows,
  md,
  defaultVal,
}) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      <Grid
        item
        xs={xs}
        md={md}
        sx={{
          fontFamily: "Almarai",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "17.66px",
          color: "rgba(135, 135, 135, 1)",
          padding: ".5rem",
          boxSizing: "border-box",
        }}
      >
        <TextField
          id={id ? id : "standard-basic"}
          multiline
          rows={rows ? rows : 0}
          // label={label}
          variant="standard"
          fullWidth
          label={<>{label}</>}
          errors={errors[ele]}
          // helperText={errors[ele] ? errors[ele].message : " "}
          FormHelperTextProps={FormHelperTextProps(errors[ele])}
          type={type}
          {...register(ele)}
          defaultValue={defaultVal}
        />
      </Grid>
    </CacheProvider>
  );
}

export function InputError({ message }) {
  return (
    <Grid
      item
      xs={5.8}
      sx={{
        display: "flex",
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: " 13.39px",
        textAlign: "right",
        color: "red",
      }}
    >
      <Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <path
            d="M12 6.5C12 9.8135 9.3135 12.5 6 12.5C2.6865 12.5 0 9.8135 0 6.5C0 3.1865 2.6865 0.5 6 0.5C9.3135 0.5 12 3.1865 12 6.5Z"
            fill="#D6D6D6"
          />
          <path
            d="M8.78503 3.92871L4.56888 7.55988L2.82836 6.06689L1.94971 6.82274L4.57012 9.07157L9.66399 4.68456L8.78503 3.92871Z"
            fill="#878787"
          />
        </svg>
      </Box>
      <Box pr={1}>{message ? message : "أن يحتوى على حرف كبير على الأقل"}</Box>
    </Grid>
  );
}

export function PassInput({ xs, register }) {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, stylisRTLPlugin],
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <CacheProvider value={cacheRtl}>
      <FormControl variant="outlined" fullWidth size="small">
        <InputLabel htmlFor="outlined-adornment-password">اسم الجهة</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          {...register("Password")}
        />
        <Box
          sx={{
            padding: ".5rem 0",
            fontSize: "14px",
            fontWeight: "700",
            lineHeight: "15.62px",
            color: "#878787",
            textDecoration: "underline",
          }}
        >
          هل نسيت كلمة المرور؟
        </Box>
        {/* <FormHelperText
      sx={{
        display: errors.Password ? "block" : "none",
        color: "#fff !important",
        bgcolor: `${errors.Password ? "#e65257" : "transparent"}`,
        fontFamily: "inherit",
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: "5px",
        marginX: "0",
      }}
    >
      {errors.Password ? errors.Password.message : " "}
    </FormHelperText> */}
      </FormControl>
    </CacheProvider>
  );
}
