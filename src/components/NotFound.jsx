import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchOffIcon from "@mui/icons-material/SearchOff";

export default function NotFound() {
  return (
    <Grid
      container
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #DAEAF4 0%, #ffffff 100%)",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "Almarai",
      }}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Box
          sx={{
            background: "#fff",
            borderRadius: "24px",
            padding: { xs: "2.5rem 1.5rem", md: "3.5rem 3rem" },
            boxShadow: "0 8px 32px rgba(0, 82, 136, 0.12)",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #005288 0%, #19547B 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 2rem",
            }}
          >
            <SearchOffIcon sx={{ fontSize: "60px", color: "#fff" }} />
          </Box>

          <Typography
            sx={{
              fontFamily: "Almarai",
              fontSize: { xs: "80px", md: "100px" },
              fontWeight: "800",
              color: "#005288",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}
          >
            404
          </Typography>

          <Typography
            sx={{
              fontFamily: "Almarai",
              fontSize: { xs: "22px", md: "28px" },
              fontWeight: "700",
              color: "#213039",
              marginBottom: "1rem",
            }}
          >
            الصفحة غير موجودة
          </Typography>

          <Typography
            sx={{
              fontFamily: "Almarai",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "400",
              color: "#6b7b8d",
              marginBottom: "2.5rem",
              lineHeight: 1.8,
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
            }}
          >
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر
          </Typography>

          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Almarai",
                fontSize: "16px",
                fontWeight: "700",
                background: "linear-gradient(135deg, #005288 0%, #19547B 100%)",
                color: "#fff",
                borderRadius: "12px",
                padding: "12px 40px",
                textTransform: "none",
                boxShadow: "0 4px 16px rgba(0, 82, 136, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #003d66 0%, #12405e 100%)",
                  boxShadow: "0 6px 20px rgba(0, 82, 136, 0.4)",
                },
              }}
            >
              العودة للرئيسية
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
