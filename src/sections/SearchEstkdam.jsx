import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import pplLogo from "../assets/profile-2user.png";
import arrowLogo from "../assets/arrow-left.png";
import arrowLogos from "../assets/arrow-lefts.png";
import { Link } from "react-router-dom";
import { ageDropDown, experienceDropDown } from "../Data";

import {
  handleNationalitiesDropDown,
  handleProfessionDropDown,
  handleRequestDropDown,
} from "../Utils/DropDownHelper";

export default function SearchEstkdam() {
  return (
    <Grid
      id={"about"}
      sx={{
        display: { xs: "none", md: "block" },
        padding: "3rem 0",
        margin: "6rem 0",
      }}
    >
      <Container
        sx={{
          color: "#005288",
          fontFamily: "Almarai",
        }}
      >
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid xs={5}>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "72px",
                letterSpacing: "0em",
                textAlign: "right",
                color: "#005288",
              }}
            >
              ابحث عن الإستقدام الذى تريد الأن
            </Box>
            <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "30px",
                letterSpacing: "0em",
                textAlign: "justified",
                color: "#000000",
              }}
            >
              يحرص فريق منصة المصدر الدولي للإستقدام على توفير السرعة والجودة،
              ويقم بالإشراف على وصول العمالة المدربة واستقبالها، من خلال مجموعة
              كبيرة من الوظائف التي يمكنك الاختيار من بينها حسب رغبتك
              واحتياجاتك، كل ما عليك فعله فقط اختيار العمالة المنزلية الملائمة
              لك.
            </Box>
            <Box sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Link to={"/EstkdamRequest"} style={{ display: "flex" }}>
                <Box
                  sx={{
                    fontFamily: "Almarai",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "21px",
                    letterSpacing: "0em",
                    textAlign: "right",
                    color: "#005288",
                    marginLeft: "0.2rem",
                  }}
                >
                  شاهد جميع الوظائف
                </Box>
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                  }}
                >
                  <img src={arrowLogos} />
                </Box>
              </Link>
            </Box>
          </Grid>

          <Grid xs={7} sx={{ paddingRight: "2rem" }}>
            <Search />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

function Search() {
  const fetchData = async () => {
    const professions = await handleProfessionDropDown();
    const nationalities = await handleNationalitiesDropDown();
    setoptionsData([
      { id: "job", data: professions },
      { id: "age", data: ageDropDown },
      { id: "expre", data: experienceDropDown },
      { id: "nat", data: nationalities },
    ]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [searchStatus, setsearchStatus] = useState("Start");
  const [optionsData, setoptionsData] = useState([]);
  console.log("optionsData", optionsData);
  const [searchInputs, setsearchInputs] = useState({
    job: "",
    age: "",
    expre: "",
    nat: "",
  });
  const [selectOption, setselectOption] = useState("");
  const handleSelect = (id) => {
    setsearchStatus("Data");
    setselectOption(id);
  };

  useEffect(() => {
    let flag = true;
    for (var key in searchInputs) {
      if (searchInputs[`${key}`] == "") {
        flag = false;
      }
    }
    if (flag) {
      setsearchStatus("Search");
    }
  }, [searchInputs]);

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 20px 6px #26282A26",
        borderRadius: "15px",
        padding: "1.5rem",
      }}
    >
      <Box
        sx={{
          fontFamily: "Almarai",
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: "25px",
          letterSpacing: "0em",
          textAlign: "right",
          color: "#005288",
          marginBottom: "1rem",
        }}
      >
        ابحث عن الإستقدام الذى تريد خلال أقل من 20 ثانية!!
      </Box>
      <Box
        sx={{
          fontFamily: "Almarai",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "18px",
          letterSpacing: "0em",
          textAlign: "right",
          color: "#213039",
        }}
      >
        برجاء اختيار نوع الإستقدام
      </Box>
      <Grid
        container
        sx={{
          marginTop: ".5rem",
          display: "flex",
          justifyContent: "space-between",
          height: "270px",
          maxHeight: "270px",
        }}
      >
        <Grid
          xs={4}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            "& > div:not(:last-child)": {
              marginBottom: ".4rem",
            },
          }}
        >
          <RowIcon
            title={searchInputs.job ? searchInputs.job : "مهنة العامل"}
            id="job"
            data={["يوسف", "يوسف", "يوسف", "يوسف", "يوسف"]}
            onClick={(id) => {
              handleSelect("job");
            }}
          />
          <RowIcon
            title={searchInputs.age ? searchInputs.age : "عمر العامل"}
            id="age"
            data={["يوسف", "يوسف", "يوسف", "يوسف", "يوسف"]}
            onClick={() => {
              handleSelect("age");
            }}
          />
          <RowIcon
            title={searchInputs.expre ? searchInputs.expre : "خبرة العامل "}
            id="expre"
            data={["يوسف", "يوسف", "يوسف", "يوسف", "يوسف"]}
            onClick={() => {
              handleSelect("expre");
            }}
          />
          <RowIcon
            title={searchInputs.nat ? searchInputs.nat : "جنسية العامل"}
            id="nat"
            data={["يوسف", "يوسف", "يوسف", "يوسف", "يوسف"]}
            onClick={() => {
              handleSelect("nat");
            }}
          />
        </Grid>
        <Grid
          container
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: ".5rem",
          }}
        >
          <Options
            status={searchStatus}
            selectOption={selectOption}
            OptionsData={optionsData}
            setsearchInputs={setsearchInputs}
            searchInputs={searchInputs}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

function Options({
  status,
  selectOption,
  OptionsData,
  searchInputs,
  setsearchInputs,
}) {
  const currData = useRef(OptionsData);
  const request = useRef(null);

  const [activeOption, setactiveOption] = useState({
    id: selectOption,
    value: searchInputs[`${selectOption}`],
  });

  const handleOptionClick = (value) => {
    setactiveOption({ id: selectOption, value: value.label });
    setsearchInputs((prev) => {
      prev[`${selectOption}`] = value.label;
      return { ...prev };
    });
    request.current = handleRequestDropDown(
      selectOption,
      value,
      false,
      request
    );
    console.log(request);
  };

  useEffect(() => {
    currData.current = OptionsData;
  }, [OptionsData]);

  return (
    <>
      {status == "Data" ? (
        <Grid
          container
          item
          xs={12}
          sx={{
            display: "flex",
            alignContent: "flex-start",
            border: "1px solid #EBEBEB",
            background: "#FAFAFA",
            padding: ".5rem",
            boxSizing: "border-box",
          }}
        >
          <Grid
            className="scrollBar"
            id="scrollBar"
            sx={{
              width: "100%",
              height: "254px",
              maxHeight: "254px",
              overflowY: "auto",
            }}
          >
            <Grid
              sx={{
                width: "100%",
                "& > div:not(:last-child)": {
                  marginBottom: ".5rem",
                  borderBottom: "1px solid #898989",
                },
              }}
            >
              {currData.current.map((option) => {
                if (option.id == selectOption) {
                  return Object.keys(option.data).map((item, index) => {
                    const feildV = option.data[item];
                    return (
                      <Option
                        value={feildV.label}
                        key={index}
                        active={
                          activeOption?.id == selectOption &&
                          activeOption?.value == feildV.label
                        }
                        onClick={() => {
                          handleOptionClick(feildV);
                        }}
                      />
                    );
                  });
                }
              })}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        ""
      )}

      {status == "Start" ? (
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#005288",
              marginBottom: "1rem",
            }}
          >
            برنامج تحديد <br />
            الإستقدام المناسب
          </Box>
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#213039",
            }}
          >
            كل ما عليك هو ملئ اختيار ما تريد من كل تصنيف وسيقوم الموقع بإقتراح
            أفضل العمالة التى تناسب احتياجاتك
          </Box>
        </Box>
      ) : (
        ""
      )}
      {status == "Search" ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#005288",
              marginBottom: "1rem",
            }}
          >
            لقد حددت الاشتراطات التى تريدها فى الاستقدام الخاص بك
          </Box>
          <Link
            to={`/EstkdamRequest?profession=${request.current.profession}&nationality=${request.current.nationality}&age=${request.current.age_max}-${request.current.age_min}&experience=${request.current.max_experience_years}-${request.current.min_experience_years}`}
          >
            <Box
              sx={{
                margin: "3rem 0 1.5rem 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "180px",
                height: "40px",
                borderRadius: "10px",
                background: "#005288",
                color: "white",
                padding: "15px 22px",
                fontFamily: "Almarai",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "22px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                console.log("request Final", request.current);
              }}
            >
              ابدأ الإستقدام الأن
            </Box>
          </Link>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}

function RowIcon({ title, active, onClick }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          height: "60px",
          padding: "10",
          border: "solid 1px  ",
          borderColor: active ? "#213039" : "#EBEBEB",
          backgroundColor: active ? "#DAEAF4" : "#FAFAFA",
          cursor: active ? "pointer" : "",
        }}
        onClick={onClick}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: "1" }}>
          <Box sx={{ width: "24px", height: "24px", padding: "1rem" }}>
            <img src={pplLogo} />
          </Box>
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "18px",
              letterSpacing: "0em",
              textAlign: "right",
              color: "#213039",
            }}
          >
            {title}
          </Box>
        </Box>
        <Box sx={{ marginLeft: "1rem" }}>
          <img src={arrowLogo} />
        </Box>
      </Box>
    </>
  );
}
function Option({ value, onClick, active }) {
  return (
    <Grid
      sx={{
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "17.86px",
        textAlign: "right",
        color: "#213039",
        height: "40px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingRight: ".6rem",
        // background: active ? "#F3F3" : "",
      }}
      onClick={onClick}
    >
      {value}
    </Grid>
  );
}
