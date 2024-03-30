import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg1 from "../assets/Background1.png";
import StartingSction from "../components/StartingSction";
import ColorfulTitles from "../components/ColorfulTitles";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DropDownFilter from "./../components/DropDownFilter";
import TodayIcon from "@mui/icons-material/Today";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FilterBtn from "../components/FilterBtn";
import EmpCard from "../components/EmpCard";
import { ListOfEmployee } from "../lib/api";

export default function EstkdamRequest() {
  const [isLoading, setisLoading] = useState(false);
  const [allEmployee, setAllEmployee] = useState([]);

  async function getAllEmployee() {
    const { data, status } = await ListOfEmployee();
    if (status) {
      setAllEmployee(data);
    }
  }
  
  useEffect(() => {
    getAllEmployee();
  }, []);
  return (
    <Grid>
      <Container>
        <Grid container sx={{ alignItems: "center" }}>
          <StartingSction
            bg={bg1}
            title={"طلب الإستقدام"}
            Searchplaceholder={"هل تبحث عن إستقدام معين؟"}
            SearchKeys={["مديره منزل", "مساعد شخصي", "ربه منزل", "سائق خاص"]}
            desc={
              "تعاقد مع أكثر من 20 ألف عامل من مختلف الوظائف والبلدان من خلال منصة المصدر الدولي للإستقدام، وتمتع بعروض رائعة وسرعة ودقة اختيار العمالة لك"
            }
          />
          {/* <ColorfulTitles /> */}

          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "35.71px",
              textAlign: "right",
              color: "#005288",
              paddingBottom: "2rem",
              marginTop: "2rem",
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
                marginBottom: "2rem",
              }}
            >
              <DropDownFilter type={"العمر"} icon={<TodayIcon />} />
              <DropDownFilter type={"المهنه"} icon={<WorkOutlineIcon />} />
              <DropDownFilter
                type={"الجنسية"}
                icon={<LanguageOutlinedIcon />}
              />
              <DropDownFilter type={"الخبره"} icon={<StarOutlineIcon />} />
            </Grid>

            <Grid
              item
              xs={3}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {" "}
              <FilterBtn />{" "}
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
              {allEmployee.length > 0 ? (
                allEmployee.map((employee, index) => {
                  return (
                    <>
                      <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
                        <EmpCard key={index} employee={employee} />
                      </Grid>
                    </>
                  );
                })
              ) : (
                <>
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress size={"2.5rem"} />
                  </Grid>
                </>
              )}
              {/* <Grid item xs={3.94} sx={{ boxSizing: "border-box" }}>
                <EmpCard item />
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
                <EmpCard />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
