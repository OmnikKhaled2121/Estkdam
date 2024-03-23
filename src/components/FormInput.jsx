import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Grid, TextField } from "@mui/material";
import React from "react";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";

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
      <Grid item xs={xs} md={md}>
        <TextField
          id="outlined-size-small"
          size="small"
          fullWidth
          label={<>{label}</>}
          errors={errors[ele]}
          helperText={errors[ele] ? errors[ele].message : " "}
          FormHelperTextProps={FormHelperTextProps(errors[ele])}
          type={type}
          {...register(ele)}
          defaultValue={defaultVal}
        />
      </Grid>
    </CacheProvider>
  );
}
