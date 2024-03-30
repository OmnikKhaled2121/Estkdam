import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "../assets/background3.png";
import StartingSction from "../components/StartingSction";
import ColorfulTitles from "../components/ColorfulTitles";
import EmpCard from "../components/EmpCard";
import FilterBtn from "../components/FilterBtn";
import DropDownFilter from "../components/DropDownFilter";
import TodayIcon from "@mui/icons-material/Today";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { ListOfEmployee } from "../lib/api";


export default function KafalaTransfer() {
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
        <Grid container>
          <StartingSction
            bg={bg}
            title={"نقل الكفالة"}
            Searchplaceholder={"هل تبحث عن إستقدام معين؟"}
            SearchKeys={["مديره منزل", "مساعد شخصي", "ربه منزل", "سائق خاص"]}
            desc={
              "نساعدك من خلال منصة المصدر الدولب للإستقدام فى نقل الكفالة من شخص إلى أخر خلال مدة قصيرة وسرعة ودقة عالية لإتمام المهمة"
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
              md={8}
              xs={10.5}
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
              xs={10}
              md={3}
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
                paddingTop:"1rem"
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

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
