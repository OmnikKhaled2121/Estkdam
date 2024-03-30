import { Grid } from "@mui/material";

export default function Info({xs, children, type, infoImg, info }) {
  return (
    <>
      <Grid
        item
        xs={xs}
        sx={{
          display: "flex",
          
          alignItems: "center",
          fontFamily: "Almarai",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "22.32px",
          "& > span": {
            paddingLeft: ".5rem",
          },
        }}
      >
        <span>{children}</span>
        <span>{type} : </span>
        {infoImg && (
          <span style={{ width: "30px" }}>
            <img width={"100%"} src={infoImg} />
          </span>
        )}
        <span style={{ fontWeight: "400" }}>{info}</span>
      </Grid>
    </>
  );
}
