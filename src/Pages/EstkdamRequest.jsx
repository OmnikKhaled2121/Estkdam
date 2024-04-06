import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import bg1 from "../assets/Background1.png";
import StartingSction from "../components/StartingSction";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DropDownFilter from "./../components/DropDownFilter";
import TodayIcon from "@mui/icons-material/Today";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FilterBtn from "../components/FilterBtn";
import EmpCard from "../components/EmpCard";
import { SearchEmployee } from "../lib/api";
import { useSearchParams } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function EstkdamRequest() {
  window.scrollTo(0, 0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setisLoading] = useState(false);
  const [allEmployee, setAllEmployee] = useState([]);
  const [isClear, setIsClear] = useState(false);
  const { accessToken } = useContext(UserContext);

  const request = useRef({
    profession: searchParams.get("profession"),
    nationality: searchParams.get("nationality"),
    age_min: searchParams.get("age")?.split("-")[1],
    age_max: searchParams.get("age")?.split("-")[0],
    min_experience_years: searchParams.get("experience")?.split("-")[1],
    max_experience_years: searchParams.get("experience")?.split("-")[0],
  });

  async function getAllEmployee(request, accessToken) {
    console.log("getAllEmployee2");
    const { data, status } = await SearchEmployee(request, accessToken);
    setAllEmployee(data);
  }

  useEffect(() => {
    request.current.profession = searchParams.get("profession");
    getAllEmployee(request.current, accessToken);
  }, [searchParams.get("profession")]);

  return (
    <Grid>
      <Container>
        <Grid container sx={{ alignItems: "center" }}>
          <StartingSction
            bg={bg1}
            to="EstkdamRequest"
            title={"طلب الإستقدام"}
            Searchplaceholder={"هل تبحث عن إستقدام معين؟"}
            SearchKeys={["مديره منزل", "مساعد شخصي", "ربه منزل", "سائق خاص"]}
            desc={
              "تعاقد مع أكثر من 20 ألف عامل من مختلف الوظائف والبلدان من خلال منصة المصدر الدولي للإستقدام، وتمتع بعروض رائعة وسرعة ودقة اختيار العمالة لك"
            }
            setAllEmployee={setAllEmployee}
          />
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
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                marginBottom: "2rem",

                flexWrap: {
                  xs: "wrap",
                },
              }}
            >
              <DropDownFilter
                type={"العمر"}
                icon={<TodayIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
                initial={searchParams.get("age")}
              />
              <DropDownFilter
                type={"المهنه"}
                icon={<WorkOutlineIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
                initial={searchParams.get("profession")}
              />
              <DropDownFilter
                type={"الجنسية"}
                icon={<LanguageOutlinedIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
                initial={searchParams.get("nationality")}
              />
              <DropDownFilter
                type={"الخبره"}
                icon={<StarOutlineIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
                initial={searchParams.get("experience")}
              />
            </Grid>

            <Grid
              item
              xs={10}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <FilterBtn
                request={request}
                setAllEmployee={setAllEmployee}
                setIsClear={setIsClear}
              />
            </Grid>

            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "32px",
                fontWeight: "700",
                lineHeight: "35.71px",
                color: "#005288",
                paddingBottom: "2rem",
                paddingTop: "1rem",
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
                      <Grid
                        item
                        xs={11}
                        md={3.94}
                        sx={{ boxSizing: "border-box" }}
                      >
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
                    {allEmployee.length == 0 ? (
                      "لا يوجد نتائج لهذا البحث  "
                    ) : (
                      <>
                        <CircularProgress size={"2.5rem"} />
                      </>
                    )}
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
