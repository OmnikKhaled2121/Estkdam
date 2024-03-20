import React from "react";
import bg from "../assets/background2.jfif";
import StartingSction from "../components/SearchInput/StartingSction";
import { Box, Container, Grid } from "@mui/material";
import ColorfulTitles from "../components/SearchInput/ColorfulTitles";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EmpCard from "../components/EmpCard";
import OfficeCard from "../components/OfficeCard";

export default function EstkdamOffices() {
  return (
    <>
      <Container>
        <Grid container>
          <StartingSction
            bg={bg}
            title={"مكاتب الإستقدام"}
            Searchplaceholder={"هل تبحث عن مكتب معين؟"}
            SearchKeys={[
              " مكتب افق حائل",
              " مكتب الخدمه الأفضل",
              " مكتب الامد العربي",
              " مكتب عبر البلدان",
            ]}
            desc={
              <>
                تمتع بالقدرة على التواصل مع مجموعة كبيرة من مكاتب <br />
                الإستقدام المرخصة حول المملكة للحصول على أفضل <br />
                عمالة ممكنة
              </>
            }
          />
          <ColorfulTitles office />

          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "35.71px",
              textAlign: "right",
              color: "#005288",
              paddingBottom: "2rem",
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
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <FilterBtn type={"الموقع"} icon={<PlaceOutlinedIcon />} />
              <FilterBtn type={"الجنسية"} icon={<LanguageOutlinedIcon />} />
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid
                sx={{
                  background: "#005288",
                  color: "white",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #005288",
                  height: "58px",
                  width: "124px",
                  transition: ".3s",
                  "&:hover": {
                    background: "#fff",
                    color: "#005288",
                  },
                }}
              >
                تطبيق
              </Grid>
              <Grid
                sx={{
                  border: "2px solid #BD295E",
                  color: "#BD295E",
                  borderRadius: "12px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "58px",
                  width: "148px",
                  transition: ".3s",
                  "&:hover": {
                    color: "#fff",
                    background: "#BD295E",
                  },
                }}
              >
                إلغاء التصنيف
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "35.71px",
              color: "#005288",
              paddingBottom: "2rem",
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
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <EmpCard />
            </Grid>
            <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
              <OfficeCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function FilterBtn({ type, icon }) {
  return (
    <Grid
      sx={{
        width: "149px",
        height: "59px",
        border: "1px solid #BAC8D1",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginLeft: ".5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {icon}
        <span style={{ marginRight: ".5rem" }}>{type}</span>
      </Box>
      <KeyboardArrowDownIcon />
    </Grid>
  );
}
