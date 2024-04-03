import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function NotFound() {
    return (
        <Container sx={{ textAlign: "center" }}>
            <Grid  sx={{ display:"flex", justifyContent: "center", alignItems: "center" ,height:"50vh"}}>
                <Grid item xs={12}>
                    هذه الصفحة غير موجودة
                </Grid>
            </Grid>
        </Container>
    );
}
