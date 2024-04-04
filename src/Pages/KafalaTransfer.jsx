import { Box, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import { ListOfEmployee, TitleSearch } from "../lib/api";
import { useParams } from "react-router-dom";

export default function KafalaTransfer() {
  const [allEmployee, setAllEmployee] = useState([]);
  const [isClear, setIsClear] = useState(false);
  const request = useRef(null);
  let { profession } = useParams();
  async function getAllEmployee() {
    const { data, status } = await ListOfEmployee();
    if (status) {
      setAllEmployee(data);
    }
  }

  async function getAll() {
    const { data, status } = await TitleSearch(profession);
    console.log("Essss", data);
    setAllEmployee(data);
  }

  useEffect(() => {
    if (profession) {
      getAll();
    } else {
      getAllEmployee();
    }
  }, [profession]);
  return (
    <Grid>
      <Container>
        <Grid container>
          <StartingSction
            bg={bg}
            to="KafalaTransfer"
            title={"نقل الكفالة"}
            Searchplaceholder={"هل تبحث عن إستقدام معين؟"}
            SearchKeys={["مديره منزل", "مساعد شخصي", "ربه منزل", "سائق خاص"]}
            desc={
              "نساعدك من خلال منصة المصدر الدولب للإستقدام فى نقل الكفالة من شخص إلى أخر خلال مدة قصيرة وسرعة ودقة عالية لإتمام المهمة"
            }
            setAllEmployee={setAllEmployee}
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
              />
              <DropDownFilter
                type={"المهنه"}
                icon={<WorkOutlineIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
              />
              <DropDownFilter
                type={"الجنسية"}
                icon={<LanguageOutlinedIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
              />
              <DropDownFilter
                type={"الخبره"}
                icon={<StarOutlineIcon />}
                setAllEmployee={setAllEmployee}
                request={request}
                isClear={isClear}
                setIsClear={setIsClear}
              />
            </Grid>

            <Grid
              item
              xs={10}
              md={3}
              sx={{ display: "flex", justifyContent: "space-between" }}
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
