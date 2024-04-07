import React, { useContext, useEffect, useState } from "react";
import LoginLayout from "../layout/LoginLayout";
import { Grid, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import proPic from "../assets/empProfile.jfif";
import FlagPlihipin from "../assets/FlagPlihipin.png";
import Info from "../components/Info";
import { Link, useParams } from "react-router-dom";
import sliderBg from "../assets/orderComplete.jfif";
import { CreateOrder, GetEmployeeByID } from "../lib/api";
import { UserContext } from "../Context/UserContext";
import { employee } from "./../Data";

export default function CompleteOrder() {
  window.scrollTo(0, 0);
  let { id } = useParams();
  const { accessToken } = useContext(UserContext);
  const [isCreate, setIsCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [employee, setEmployee] = useState("");
  const [createOrder, setCreateOrder] = useState();

  async function getEmployee(accessToken) {
    setIsLoading(true);
    const { data, status } = await GetEmployeeByID(id, accessToken);

    if (status) {
      setEmployee(data);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getEmployee(accessToken);
  }, []);
  return (
    <LoginLayout img={sliderBg}>
      <Grid
        item
        container
        md={12}
        sx={{
          height: "calc(100vh - 100px)",
          zIndex: "3",
          minHeight: "200px",
          display: "flex",
          alignContent: "start",
          "& > div:not(:last-child)": {
            marginBottom: "1rem",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
            fontWeight: "700",
            lineHeight: "16.74px",
            color: "#005288",
          }}
        >
          <Link
            to={"/"}
            style={{
              color: "#005288",
            }}
          >
            <Box
              mr={1}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M9.62004 3.95326C9.74671 3.95326 9.87337 3.99992 9.97337 4.09992L14.02 8.14659C14.2134 8.33992 14.2134 8.65992 14.02 8.85326L9.97337 12.8999C9.78004 13.0933 9.46004 13.0933 9.26671 12.8999C9.07337 12.7066 9.07337 12.3866 9.26671 12.1933L12.96 8.49992L9.26671 4.80659C9.07337 4.61326 9.07337 4.29326 9.26671 4.09992C9.36004 3.99992 9.49337 3.95326 9.62004 3.95326Z"
                  fill="#005288"
                />
                <path
                  d="M2.33371 8L13.5537 8C13.827 8 14.0537 8.22667 14.0537 8.5C14.0537 8.77333 13.827 9 13.5537 9L2.33371 9C2.06038 9 1.83371 8.77333 1.83371 8.5C1.83371 8.22667 2.06038 8 2.33371 8Z"
                  fill="#005288"
                />
              </svg>
              الرجوع إلى الرئيسية
            </Box>
          </Link>
        </Grid>
        {isLoading ? (
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <>
              <CircularProgress size={"2.5rem"} />
            </>
          </Grid>
        ) : (
          <>
            {isCreate ? (
              <>
                <OrderReview employee={employee} createOrder={createOrder} />
              </>
            ) : (
              <>
                <CompleteOrderP
                  employee={employee}
                  proPic={proPic}
                  setIsCreate={setIsCreate}
                  setCreateOrder={setCreateOrder}
                />
              </>
            )}
          </>
        )}
      </Grid>
    </LoginLayout>
  );
}

function CompleteOrderP({ employee, proPic, setIsCreate, setCreateOrder }) {
  return (
    <>
      <Grid item xs={12}>
        <Box
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "44.64px",
            marginBottom: ".5rem",
            color: "#005288",
          }}
        >
          تأكيد طلب سيرة ذاتية
        </Box>

        <Box
          sx={{
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "18px",
            color: "#213039",
          }}
        >
          برجاء مراجعة البيانات أدناه قبل تأكيد الطلب
        </Box>
      </Grid>
      <EmpCard
        proPic={proPic}
        employee={employee}
        setIsCreate={setIsCreate}
        setCreateOrder={setCreateOrder}
      />

      <Grid item xs={12}>
        <Box
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: " 26.78px",
            marginBottom: ".5rem",
          }}
        >
          ملاحظات
        </Box>
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "15.62px",
          }}
        >
          يتم مراجعة الطلب مع مندوبي خدمة العملاء، ولضمان حقك فالدفع
          <br /> يكون من خلال منصة مساند
        </Box>
      </Grid>
    </>
  );
}

function EmpCard({
  proPic,
  Information,
  employee,
  setIsCreate,
  setCreateOrder,
}) {
  const { accessToken, currentUser } = useContext(UserContext);

  const handleDownloadCV = () => {
    // Ensure employee and resume URL are defined
    if (!employee || !employee.resume) {
      console.error("Employee or resume URL not found.");
      return;
    }

    // Get the resume URL from the employee object
    const resumeUrl = employee.resume;

    // Constructing the complete URL for the resume
    const downloadUrl = `${window.location.origin}/${resumeUrl}`;

    // Creating an anchor element to trigger the download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "resume.pdf"; // Set desired filename here

    // Triggering the download
    link.click();
  };
  async function createOrderByID() {
    const { data, status } = await CreateOrder(
      employee.id,
      currentUser.id,
      accessToken
    );
    if (status) {
      console.log("data", data);
      setCreateOrder(data.order);
      setIsCreate(true);
    }
  }

  return (
    <Grid item xs={12}>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0px 0px 20px 6px #26282A26",
          padding: ".5rem",
          borderRadius: "20px",
          marginBottom: "1rem",
        }}
      >
        <Grid item md={2} xs={12}>
          <Box
            sx={{
              width: {
                md: "100%",
                xs: "100px",
              },
              height: {
                md: "100%",
                xs: "100px",
              },
              borderRadius: "15px",
              overflow: "hidden",
              backgroundImage: employee.image
                ? `url(${employee.image})`
                : `url(${proPic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        </Grid>

        <Grid
          item
          md={9.8}
          xs={12}
          sx={{
            padding: ".5rem 0rem",
            boxSizing: "border-box",
            textAlign: "right",
            color: "#213039",
            "& > div:not(:last-child)": { paddingBottom: ".5rem" },
          }}
        >
          <Box
            sx={{
              fontFamily: "Almarai",
              fontSize: "30px",
              fontWeight: "800",
              lineHeight: "40.18px",
            }}
          >
            {employee.name}
          </Box>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              "& > div:not(:last-child)": { marginBottom: ".2rem" },
            }}
          >
            <Info xs={12} type={"المهنة"} info={employee?.profession}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V12C1.25 8.92 3.15 6.69001 6.1 6.32001C6.38 6.28001 6.69 6.25 7 6.25H17C17.24 6.25 17.55 6.26 17.87 6.31C20.82 6.65 22.75 8.89 22.75 12V17C22.75 20.44 20.44 22.75 17 22.75ZM7 7.75C6.76 7.75 6.53 7.76999 6.3 7.79999C4.1 8.07999 2.75 9.68 2.75 12V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V12C21.25 9.66 19.88 8.05001 17.66 7.79001C17.42 7.75001 17.21 7.75 17 7.75H7Z"
                  fill="#292D32"
                />
                <path
                  d="M6.19005 7.80995C5.95005 7.80995 5.73005 7.69995 5.58005 7.49995C5.41005 7.26995 5.39005 6.96995 5.52005 6.71995C5.69005 6.37995 5.93005 6.04995 6.24005 5.74995L9.49005 2.48994C11.15 0.839941 13.85 0.839941 15.51 2.48994L17.26 4.25996C18 4.98996 18.45 5.96996 18.5 7.00996C18.51 7.23996 18.42 7.45994 18.25 7.60994C18.08 7.75994 17.85 7.82996 17.63 7.78996C17.43 7.75996 17.22 7.74995 17 7.74995H7.00005C6.76005 7.74995 6.53005 7.76994 6.30005 7.79994C6.27005 7.80994 6.23005 7.80995 6.19005 7.80995ZM7.86005 6.24995H16.82C16.69 5.90995 16.48 5.59996 16.2 5.31996L14.44 3.53996C13.37 2.47996 11.62 2.47996 10.54 3.53996L7.86005 6.24995Z"
                  fill="#292D32"
                />
                <path
                  d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z"
                  fill="#292D32"
                />
              </svg>
            </Info>

            <Info
              type={"الجنسية"}
              xs={12}
              info={employee?.nationality?.name}
              infoImg={employee?.nationality?.image}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 3.16807C6.85082 3.16807 2.66797 7.35091 2.66797 12.5001C2.66797 17.6493 6.85082 21.8321 12 21.8321C17.1492 21.8321 21.332 17.6493 21.332 12.5001C21.332 7.35091 17.1492 3.16807 12 3.16807ZM11.5 4.24383V7.98568C10.5581 7.95782 9.66032 7.85328 8.82681 7.68575C8.97524 7.24983 9.14163 6.84436 9.3246 6.47841C9.94804 5.23154 10.7195 4.47208 11.5 4.24383ZM12.5 4.24383C13.2805 4.47208 14.052 5.23154 14.6754 6.47841C14.859 6.8456 15.0259 7.25262 15.1747 7.69023C14.3422 7.85597 13.4433 7.95846 12.5 7.98575V4.24383ZM7.85034 7.45358C7.15749 7.26159 6.52632 7.02675 5.9721 6.75772C6.898 5.78541 8.05211 5.03438 9.35376 4.59868C9.00959 5.00933 8.69967 5.49201 8.43009 6.03116C8.21186 6.46763 8.0194 6.94569 7.85034 7.45358ZM14.6463 4.59868C15.947 5.03411 17.1004 5.78454 18.0259 6.75591C17.4791 7.02953 16.8487 7.26702 16.1521 7.45986C15.9825 6.94957 15.789 6.4694 15.5699 6.03116C15.3003 5.49202 14.9904 5.00933 14.6463 4.59868ZM16.4321 8.42367C17.2661 8.19152 18.0239 7.89378 18.6852 7.53856C19.6228 8.8001 20.2177 10.331 20.3165 12.0001H16.9031C16.8687 10.7237 16.706 9.5153 16.4321 8.42367ZM3.68356 12.0001C3.78219 10.3334 4.37557 8.80441 5.31095 7.54386C5.97854 7.89064 6.7375 8.18484 7.56945 8.4166C7.29447 9.51006 7.13138 10.721 7.09694 12.0001H3.68356ZM8.09718 12.0001C8.13205 10.797 8.28886 9.66296 8.54349 8.65197C9.46747 8.8425 10.4599 8.95823 11.5 8.98672V12.0001H8.09718ZM12.5 8.98678C13.5406 8.95906 14.5341 8.84593 15.458 8.65727C15.7119 9.66693 15.868 10.7991 15.9028 12.0001H12.5V8.98678ZM5.31483 17.4616C4.37717 16.2001 3.78233 14.6692 3.68356 13.0001H7.09694C7.13132 14.2765 7.29398 15.4849 7.56793 16.5765C6.73394 16.8087 5.97615 17.1064 5.31483 17.4616ZM8.54201 16.3429C8.28816 15.3333 8.13198 14.2011 8.09718 13.0001H11.5V16.0134C10.4594 16.0411 9.46589 16.1543 8.54201 16.3429ZM12.5 13.0001H15.9028C15.868 14.2032 15.7112 15.3372 15.4565 16.3482C14.5325 16.1577 13.5401 16.042 12.5 16.0135V13.0001ZM16.4306 16.5836C16.7055 15.4901 16.8686 14.2792 16.9031 13.0001H20.3165C20.2178 14.6668 19.6244 16.1958 18.6891 17.4563C18.0215 17.1096 17.2625 16.8154 16.4306 16.5836ZM8.82527 17.31C9.65784 17.1442 10.5567 17.0417 11.5 17.0144V20.7564C10.7195 20.5281 9.94804 19.7687 9.3246 18.5218C9.14101 18.1546 8.97407 17.7476 8.82527 17.31ZM12.5 20.7564V17.0145C13.4419 17.0424 14.3397 17.1469 15.1732 17.3144C15.0248 17.7504 14.8584 18.1558 14.6754 18.5218C14.052 19.7687 13.2805 20.5281 12.5 20.7564ZM5.97407 18.2443C6.52088 17.9707 7.15131 17.7332 7.84794 17.5403C8.01752 18.0506 8.21097 18.5308 8.43009 18.969C8.69967 19.5082 9.00958 19.9909 9.35375 20.4015C8.05299 19.9661 6.89966 19.2157 5.97407 18.2443ZM15.5699 18.969C15.7882 18.5326 15.9806 18.0545 16.1497 17.5466C16.8425 17.7386 17.4737 17.9734 18.0279 18.2425C17.102 19.2148 15.9479 19.9658 14.6462 20.4015C14.9904 19.9909 15.3003 19.5082 15.5699 18.969Z"
                  fill="#213039"
                  stroke="#213039"
                  stroke-width="0.2"
                />
              </svg>
            </Info>

            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column",
                },
              }}
            >
              <Info md={3} xs={12} type={"العمر"} info={employee?.age}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C16.01 2.75 16.03 2.75 16.04 2.75C20.15 2.98 21.75 4.91 21.75 9.65V15.82C21.75 20.1 20.62 22.75 15 22.75ZM8 4.25C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C19.52 21.25 20.25 19.65 20.25 15.82V9.65C20.25 5.3 18.81 4.41 15.98 4.25H8Z"
                    fill="#292D32"
                  />
                  <path
                    d="M20.75 18.3501H3.25C2.84 18.3501 2.5 18.0101 2.5 17.6001C2.5 17.1901 2.84 16.8501 3.25 16.8501H20.75C21.16 16.8501 21.5 17.1901 21.5 17.6001C21.5 18.0101 21.16 18.3501 20.75 18.3501Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z"
                    fill="#292D32"
                  />
                </svg>
              </Info>
              <Info
                md={4}
                xs={12}
                type={"الحالة الاجتماعية"}
                info={employee?.social_status?.status}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.12 13.53C12.1 13.53 12.07 13.53 12.05 13.53C12.02 13.53 11.98 13.53 11.95 13.53C9.68 13.46 7.98 11.69 7.98 9.50998C7.98 7.28998 9.79 5.47998 12.01 5.47998C14.23 5.47998 16.04 7.28998 16.04 9.50998C16.03 11.7 14.32 13.46 12.15 13.53C12.13 13.53 12.13 13.53 12.12 13.53ZM12 6.96998C10.6 6.96998 9.47 8.10998 9.47 9.49998C9.47 10.87 10.54 11.98 11.9 12.03C11.93 12.02 12.03 12.02 12.13 12.03C13.47 11.96 14.52 10.86 14.53 9.49998C14.53 8.10998 13.4 6.96998 12 6.96998Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 22.7498C9.31 22.7498 6.74 21.7498 4.75 19.9298C4.57 19.7698 4.49 19.5298 4.51 19.2998C4.64 18.1098 5.38 16.9998 6.61 16.1798C9.59 14.1998 14.42 14.1998 17.39 16.1798C18.62 17.0098 19.36 18.1098 19.49 19.2998C19.52 19.5398 19.43 19.7698 19.25 19.9298C17.26 21.7498 14.69 22.7498 12 22.7498ZM6.08 19.0998C7.74 20.4898 9.83 21.2498 12 21.2498C14.17 21.2498 16.26 20.4898 17.92 19.0998C17.74 18.4898 17.26 17.8998 16.55 17.4198C14.09 15.7798 9.92 15.7798 7.44 17.4198C6.73 17.8998 6.26 18.4898 6.08 19.0998Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                    fill="#292D32"
                  />
                </svg>
              </Info>
              <Info
                md={4}
                xs={12}
                type={"عدد الاطفال"}
                info={employee?.kids_number}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.1596 11.62C9.1296 11.62 9.1096 11.62 9.0796 11.62C9.0296 11.61 8.9596 11.61 8.8996 11.62C5.9996 11.53 3.8096 9.25 3.8096 6.44C3.8096 3.58 6.1396 1.25 8.9996 1.25C11.8596 1.25 14.1896 3.58 14.1896 6.44C14.1796 9.25 11.9796 11.53 9.1896 11.62C9.1796 11.62 9.1696 11.62 9.1596 11.62ZM8.9996 2.75C6.9696 2.75 5.3096 4.41 5.3096 6.44C5.3096 8.44 6.8696 10.05 8.8596 10.12C8.9196 10.11 9.0496 10.11 9.1796 10.12C11.1396 10.03 12.6796 8.42 12.6896 6.44C12.6896 4.41 11.0296 2.75 8.9996 2.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M16.5396 11.75C16.5096 11.75 16.4796 11.75 16.4496 11.74C16.0396 11.78 15.6196 11.49 15.5796 11.08C15.5396 10.67 15.7896 10.3 16.1996 10.25C16.3196 10.24 16.4496 10.24 16.5596 10.24C18.0196 10.16 19.1596 8.96 19.1596 7.49C19.1596 5.97 17.9296 4.74 16.4096 4.74C15.9996 4.75 15.6596 4.41 15.6596 4C15.6596 3.59 15.9996 3.25 16.4096 3.25C18.7496 3.25 20.6596 5.16 20.6596 7.5C20.6596 9.8 18.8596 11.66 16.5696 11.75C16.5596 11.75 16.5496 11.75 16.5396 11.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z"
                    fill="#292D32"
                  />
                  <path
                    d="M18.3396 20.75C17.9896 20.75 17.6796 20.51 17.6096 20.15C17.5296 19.74 17.7896 19.35 18.1896 19.26C18.8196 19.13 19.3996 18.88 19.8496 18.53C20.4196 18.1 20.7296 17.56 20.7296 16.99C20.7296 16.42 20.4196 15.88 19.8596 15.46C19.4196 15.12 18.8696 14.88 18.2196 14.73C17.8196 14.64 17.5596 14.24 17.6496 13.83C17.7396 13.43 18.1396 13.17 18.5496 13.26C19.4096 13.45 20.1596 13.79 20.7696 14.26C21.6996 14.96 22.2296 15.95 22.2296 16.99C22.2296 18.03 21.6896 19.02 20.7596 19.73C20.1396 20.21 19.3596 20.56 18.4996 20.73C18.4396 20.75 18.3896 20.75 18.3396 20.75Z"
                    fill="#292D32"
                  />
                </svg>
              </Info>
            </Grid>
            <Info
              type={"الراتب"}
              info={
                <>
                  {Math.round(employee?.salary)}
                  <span style={{ fontWeight: "700", marginRight: ".5rem" }}>
                    ر.س /
                  </span>{" "}
                  شهر
                </>
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.4 17.4201H10.89C9.25 17.4201 7.92 16.0401 7.92 14.3401C7.92 13.9301 8.26 13.5901 8.67 13.5901C9.08 13.5901 9.42 13.9301 9.42 14.3401C9.42 15.2101 10.08 15.9201 10.89 15.9201H13.4C14.05 15.9201 14.59 15.3401 14.59 14.6401C14.59 13.7701 14.28 13.6001 13.77 13.4201L9.74 12.0001C8.96 11.7301 7.91 11.1501 7.91 9.36008C7.91 7.82008 9.12 6.58008 10.6 6.58008H13.11C14.75 6.58008 16.08 7.96008 16.08 9.66008C16.08 10.0701 15.74 10.4101 15.33 10.4101C14.92 10.4101 14.58 10.0701 14.58 9.66008C14.58 8.79008 13.92 8.08008 13.11 8.08008H10.6C9.95 8.08008 9.41 8.66008 9.41 9.36008C9.41 10.2301 9.72 10.4001 10.23 10.5801L14.26 12.0001C15.04 12.2701 16.09 12.8501 16.09 14.6401C16.08 16.1701 14.88 17.4201 13.4 17.4201Z"
                  fill="#292D32"
                />
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="#292D32"
                />
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="#292D32"
                />
              </svg>
            </Info>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          paddingBottom: "0 ",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* <Link to={"/OrderReview"}> */}
        <Box
          sx={{
            textAlign: {
              xs: "center",
            },
            padding: "15px 22px",
            borderRadius: "10px",
            background: "#005288",
            color: "white",
            fontFamily: "Almarai",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: " 22.32px",
            border: "2px solid #005288",

            marginBottom: {
              xs: "1rem",
              md: "0rem",
            },
            "&:hover": {
              color: "#005288",
              background: "white",
            },
          }}
          onClick={() => {
            createOrderByID();
          }}
        >
          المتابعة وتأكيد الطلب
        </Box>
        {/* </Link> */}

        <Box
          sx={{
            padding: "15px 22px",
            borderRadius: "10px",
            textAlign: {
              xs: "center",
            },
            color: "#005288",
            border: "2px solid#005288",
            background: "white",
            fontFamily: "Almarai",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: " 22.32px",
            marginRight: {
              xs: "0rem",
              md: "1rem",
            },
            "&:hover": {
              background: "#005288",
              color: "white",
              cursor: "pointer",
            },
          }}
          onClick={handleDownloadCV}
        >
          تحميل السيرة الذاتية
        </Box>
      </Box>
    </Grid>
  );
}
//Order Review
function ConfirmOrder() {
  return (
    <>
      <Grid
        item
        xs={12}
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 0px 20px 6px #26282A26",
          padding: ".5rem 1rem",
          borderRadius: "20px",
        }}
      >
        <Grid
          item
          md={7}
          xs={12}
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "30px",
            color: "#213039",
          }}
        >
          <Box>
            يرجى تأكيد الطلب مع خدمة العملاء قبل الوقت المحدد حتى
            <br /> لا يتم الغاء الطلب
          </Box>
          <Box
            sx={{
              fontSize: "12px",
              lineHeight: "18px",
              color: "#005288",
              marginTop: ".5rem",
            }}
          >
            ملحوظة : كل ما عليك هو امداد خدمة العملاء برقم الطلب الخاص بك وسيتم
            تأكيد طلبك من خلالهم
          </Box>
        </Grid>
        <Grid item container md={4} xs={12}>
          <Box
            item
            xs={12}
            sx={{
              fontSize: "13px",
              fontWeight: "700",
              lineHeight: "19.5px",
              color: "#213039",
              justifyContent: "start",
            }}
          >
            يجب تأكيد الطلب قبل:
          </Box>
          <Clock />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
        }}
      >
        <Grid
          sx={{
            padding: "10px 15px",
            borderRadius: "10px",
            background: "#005288",
            color: "white",
            fontFamily: "Almarai",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: " 22.32px",
            border: "2px solid #005288",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              color: "#005288",
              background: "white",
              "& svg ": {
                fill: "#005288",
              },
            },
          }}
        >
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="white"
            >
              <path d="M16.45 22.25C15.32 22.25 14.13 21.98 12.9 21.46C11.7 20.95 10.49 20.25 9.31 19.4C8.14 18.54 7.01 17.58 5.94 16.53C4.88 15.46 3.92 14.33 3.07 13.17C2.21 11.97 1.52 10.77 1.03 9.61C0.51 8.37 0.25 7.17 0.25 6.04C0.25 5.26 0.39 4.52 0.66 3.83C0.94 3.12 1.39 2.46 2 1.89C2.77 1.13 3.65 0.75 4.59 0.75C4.98 0.75 5.38 0.84 5.72 1C6.11 1.18 6.44 1.45 6.68 1.81L9 5.08C9.21 5.37 9.37 5.65 9.48 5.93C9.61 6.23 9.68 6.53 9.68 6.82C9.68 7.2 9.57 7.57 9.36 7.92C9.21 8.19 8.98 8.48 8.69 8.77L8.01 9.48C8.02 9.51 8.03 9.53 8.04 9.55C8.16 9.76 8.4 10.12 8.86 10.66C9.35 11.22 9.81 11.73 10.27 12.2C10.86 12.78 11.35 13.24 11.81 13.62C12.38 14.1 12.75 14.34 12.97 14.45L12.95 14.5L13.68 13.78C13.99 13.47 14.29 13.24 14.58 13.09C15.13 12.75 15.83 12.69 16.53 12.98C16.79 13.09 17.07 13.24 17.37 13.45L20.69 15.81C21.06 16.06 21.33 16.38 21.49 16.76C21.64 17.14 21.71 17.49 21.71 17.84C21.71 18.32 21.6 18.8 21.39 19.25C21.18 19.7 20.92 20.09 20.59 20.45C20.02 21.08 19.4 21.53 18.68 21.82C17.99 22.1 17.24 22.25 16.45 22.25ZM4.59 2.25C4.04 2.25 3.53 2.49 3.04 2.97C2.58 3.4 2.26 3.87 2.06 4.38C1.85 4.9 1.75 5.45 1.75 6.04C1.75 6.97 1.97 7.98 2.41 9.02C2.86 10.08 3.49 11.18 4.29 12.28C5.09 13.38 6 14.45 7 15.46C8 16.45 9.08 17.37 10.19 18.18C11.27 18.97 12.38 19.61 13.48 20.07C15.19 20.8 16.79 20.97 18.11 20.42C18.62 20.21 19.07 19.89 19.48 19.43C19.71 19.18 19.89 18.91 20.04 18.59C20.16 18.34 20.22 18.08 20.22 17.82C20.22 17.66 20.19 17.5 20.11 17.32C20.08 17.26 20.02 17.15 19.83 17.02L16.51 14.66C16.31 14.52 16.13 14.42 15.96 14.35C15.74 14.26 15.65 14.17 15.31 14.38C15.11 14.48 14.93 14.63 14.73 14.83L13.97 15.58C13.58 15.96 12.98 16.05 12.52 15.88L12.25 15.76C11.84 15.54 11.36 15.2 10.83 14.75C10.35 14.34 9.83 13.86 9.2 13.24C8.71 12.74 8.22 12.21 7.71 11.62C7.24 11.07 6.9 10.6 6.69 10.21L6.57 9.91C6.51 9.68 6.49 9.55 6.49 9.41C6.49 9.05 6.62 8.73 6.87 8.48L7.62 7.7C7.82 7.5 7.97 7.31 8.07 7.14C8.15 7.01 8.18 6.9 8.18 6.8C8.18 6.72 8.15 6.6 8.1 6.48C8.03 6.32 7.92 6.14 7.78 5.95L5.46 2.67C5.36 2.53 5.24 2.43 5.09 2.36C4.93 2.29 4.76 2.25 4.59 2.25ZM12.95 14.51L12.79 15.19L13.06 14.49C13.01 14.48 12.97 14.49 12.95 14.51Z" />
            </svg>
          </Box>
          <span style={{ marginRight: ".5rem" }}> الإتصال الأن</span>
        </Grid>
        <Link
          to={"/"}
          style={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              padding: "10px 15px",
              borderRadius: "10px",
              color: "#005288",
              border: "2px solid#005288",
              background: "white",
              fontFamily: "Almarai",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: " 22.32px",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "#005288",
                color: "white",
              },
            }}
          >
            الإتصال لاحقاً
          </Box>
        </Link>
      </Grid>
    </>
  );
}

// function Clock() {
//   return (
//     <Grid
//       item
//       container
//       xs={12}
//       sx={{
//         display: "flex",
//         flexDirection: "row-reverse",
//         justifyContent: "center",
//         fontSize: "40px",
//         fontWeight: "700",
//         lineHeight: "60px",
//         color: "#005288",
//       }}
//     >
//       <Grid item xs={2}>
//         <Box>01</Box>
//         <Box
//           sx={{
//             fontSize: "14px",
//             lineHeight: "21px",
//           }}
//         >
//           يوم
//         </Box>
//       </Grid>
//       <Grid item xs={1}>
//         :
//       </Grid>
//       <Grid item xs={2}>
//         <Box>01</Box>
//         <Box
//           sx={{
//             fontSize: "14px",
//             lineHeight: "21px",
//           }}
//         >
//           ساعة
//         </Box>
//       </Grid>
//       <Grid item xs={1}>
//         :
//       </Grid>
//       <Grid item xs={2}>
//         <Box>01</Box>
//         <Box
//           sx={{
//             fontSize: "14px",
//             lineHeight: "21px",
//           }}
//         >
//           دقيقة
//         </Box>
//       </Grid>
//       <Grid item xs={1}>
//         :
//       </Grid>
//       <Grid item xs={2}>
//         <Box>01</Box>
//         <Box
//           sx={{
//             fontSize: "14px",
//             lineHeight: "21px",
//           }}
//         >
//           ثانية
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

// Clock try

function Clock() {
  const [time, setTime] = useState({ hours: 2, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (
          prevTime.hours === 0 &&
          prevTime.minutes === 0 &&
          prevTime.seconds === 0
        ) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prevTime.seconds === 0) {
          return {
            hours: prevTime.hours,
            minutes: prevTime.minutes - 1,
            seconds: 59,
          };
        }
        return {
          hours: prevTime.hours,
          minutes: prevTime.minutes,
          seconds: prevTime.seconds - 1,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "60px",
        color: "#005288",
      }}
    >
      <Grid item xs={2}>
        <Box>{time.hours.toString().padStart(2, "0")}</Box>
        <Box
          sx={{
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          ساعة
        </Box>
      </Grid>
      <Grid item xs={1}>
        :
      </Grid>
      <Grid item xs={2}>
        <Box>{time.minutes.toString().padStart(2, "0")}</Box>
        <Box
          sx={{
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          دقيقة
        </Box>
      </Grid>
      <Grid item xs={1}>
        :
      </Grid>
      <Grid item xs={2}>
        <Box>{time.seconds.toString().padStart(2, "0")}</Box>
        <Box
          sx={{
            fontSize: "14px",
            lineHeight: "21px",
          }}
        >
          ثانية
        </Box>
      </Grid>
    </Grid>
  );
}
function OrderInfo({ xs, type, info }) {
  return (
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
        color: "#213039",
        "& > span": {
          paddingLeft: ".5rem",
        },
      }}
    >
      <span>{type} : </span>
      <span style={{ color: "#005288" }}>{info}</span>
    </Grid>
  );
}

function Order({ proPic, employee, createOrder }) {
  return (
    <>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 0px 20px 6px #26282A26",
            padding: ".5rem",
            borderRadius: "20px",
            marginBottom: "1rem",
          }}
        >
          <Grid item md={2} xs={12}>
            <Box
              sx={{
                width: {
                  md: "100%",
                  xs: "100px",
                },
                height: {
                  md: "100%",
                  xs: "100px",
                },
                borderRadius: "15px",
                overflow: "hidden",
                backgroundImage: employee.image
                  ? `url(${employee.image})`
                  : `url(${proPic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
          </Grid>

          <Grid
            item
            md={9.8}
            xs={12}
            sx={{
              padding: ".5rem 0rem",
              boxSizing: "border-box",
              textAlign: "right",
              color: "#213039",
              "& > div:not(:last-child)": { paddingBottom: ".5rem" },
            }}
          >
            {/* <Box
              sx={{
                fontFamily: "Almarai",
                fontSize: "30px",
                fontWeight: "800",
                lineHeight: "40.18px",
              }}
            >
              {employee.name}
            </Box> */}

            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                "& > div:not(:last-child)": { marginBottom: ".2rem" },
              }}
            >
              <OrderInfo
                xs={12}
                type={"رقم الطلب"}
                info={`#${createOrder.id}`}
              />
              <OrderInfo
                xs={12}
                type={"تاريخ الطلب"}
                info={createOrder.created_at.split("T")[0]}
              />
              <OrderInfo xs={12} type={"الإسم"} info={employee?.name} />
              <Info xs={12} type={"المهنة"} info={employee?.profession}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V12C1.25 8.92 3.15 6.69001 6.1 6.32001C6.38 6.28001 6.69 6.25 7 6.25H17C17.24 6.25 17.55 6.26 17.87 6.31C20.82 6.65 22.75 8.89 22.75 12V17C22.75 20.44 20.44 22.75 17 22.75ZM7 7.75C6.76 7.75 6.53 7.76999 6.3 7.79999C4.1 8.07999 2.75 9.68 2.75 12V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V12C21.25 9.66 19.88 8.05001 17.66 7.79001C17.42 7.75001 17.21 7.75 17 7.75H7Z"
                    fill="#292D32"
                  />
                  <path
                    d="M6.19005 7.80995C5.95005 7.80995 5.73005 7.69995 5.58005 7.49995C5.41005 7.26995 5.39005 6.96995 5.52005 6.71995C5.69005 6.37995 5.93005 6.04995 6.24005 5.74995L9.49005 2.48994C11.15 0.839941 13.85 0.839941 15.51 2.48994L17.26 4.25996C18 4.98996 18.45 5.96996 18.5 7.00996C18.51 7.23996 18.42 7.45994 18.25 7.60994C18.08 7.75994 17.85 7.82996 17.63 7.78996C17.43 7.75996 17.22 7.74995 17 7.74995H7.00005C6.76005 7.74995 6.53005 7.76994 6.30005 7.79994C6.27005 7.80994 6.23005 7.80995 6.19005 7.80995ZM7.86005 6.24995H16.82C16.69 5.90995 16.48 5.59996 16.2 5.31996L14.44 3.53996C13.37 2.47996 11.62 2.47996 10.54 3.53996L7.86005 6.24995Z"
                    fill="#292D32"
                  />
                  <path
                    d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z"
                    fill="#292D32"
                  />
                </svg>
              </Info>

              <Info
                type={"الجنسية"}
                xs={12}
                info={employee?.nationality?.name}
                infoImg={employee?.nationality?.image}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 3.16807C6.85082 3.16807 2.66797 7.35091 2.66797 12.5001C2.66797 17.6493 6.85082 21.8321 12 21.8321C17.1492 21.8321 21.332 17.6493 21.332 12.5001C21.332 7.35091 17.1492 3.16807 12 3.16807ZM11.5 4.24383V7.98568C10.5581 7.95782 9.66032 7.85328 8.82681 7.68575C8.97524 7.24983 9.14163 6.84436 9.3246 6.47841C9.94804 5.23154 10.7195 4.47208 11.5 4.24383ZM12.5 4.24383C13.2805 4.47208 14.052 5.23154 14.6754 6.47841C14.859 6.8456 15.0259 7.25262 15.1747 7.69023C14.3422 7.85597 13.4433 7.95846 12.5 7.98575V4.24383ZM7.85034 7.45358C7.15749 7.26159 6.52632 7.02675 5.9721 6.75772C6.898 5.78541 8.05211 5.03438 9.35376 4.59868C9.00959 5.00933 8.69967 5.49201 8.43009 6.03116C8.21186 6.46763 8.0194 6.94569 7.85034 7.45358ZM14.6463 4.59868C15.947 5.03411 17.1004 5.78454 18.0259 6.75591C17.4791 7.02953 16.8487 7.26702 16.1521 7.45986C15.9825 6.94957 15.789 6.4694 15.5699 6.03116C15.3003 5.49202 14.9904 5.00933 14.6463 4.59868ZM16.4321 8.42367C17.2661 8.19152 18.0239 7.89378 18.6852 7.53856C19.6228 8.8001 20.2177 10.331 20.3165 12.0001H16.9031C16.8687 10.7237 16.706 9.5153 16.4321 8.42367ZM3.68356 12.0001C3.78219 10.3334 4.37557 8.80441 5.31095 7.54386C5.97854 7.89064 6.7375 8.18484 7.56945 8.4166C7.29447 9.51006 7.13138 10.721 7.09694 12.0001H3.68356ZM8.09718 12.0001C8.13205 10.797 8.28886 9.66296 8.54349 8.65197C9.46747 8.8425 10.4599 8.95823 11.5 8.98672V12.0001H8.09718ZM12.5 8.98678C13.5406 8.95906 14.5341 8.84593 15.458 8.65727C15.7119 9.66693 15.868 10.7991 15.9028 12.0001H12.5V8.98678ZM5.31483 17.4616C4.37717 16.2001 3.78233 14.6692 3.68356 13.0001H7.09694C7.13132 14.2765 7.29398 15.4849 7.56793 16.5765C6.73394 16.8087 5.97615 17.1064 5.31483 17.4616ZM8.54201 16.3429C8.28816 15.3333 8.13198 14.2011 8.09718 13.0001H11.5V16.0134C10.4594 16.0411 9.46589 16.1543 8.54201 16.3429ZM12.5 13.0001H15.9028C15.868 14.2032 15.7112 15.3372 15.4565 16.3482C14.5325 16.1577 13.5401 16.042 12.5 16.0135V13.0001ZM16.4306 16.5836C16.7055 15.4901 16.8686 14.2792 16.9031 13.0001H20.3165C20.2178 14.6668 19.6244 16.1958 18.6891 17.4563C18.0215 17.1096 17.2625 16.8154 16.4306 16.5836ZM8.82527 17.31C9.65784 17.1442 10.5567 17.0417 11.5 17.0144V20.7564C10.7195 20.5281 9.94804 19.7687 9.3246 18.5218C9.14101 18.1546 8.97407 17.7476 8.82527 17.31ZM12.5 20.7564V17.0145C13.4419 17.0424 14.3397 17.1469 15.1732 17.3144C15.0248 17.7504 14.8584 18.1558 14.6754 18.5218C14.052 19.7687 13.2805 20.5281 12.5 20.7564ZM5.97407 18.2443C6.52088 17.9707 7.15131 17.7332 7.84794 17.5403C8.01752 18.0506 8.21097 18.5308 8.43009 18.969C8.69967 19.5082 9.00958 19.9909 9.35375 20.4015C8.05299 19.9661 6.89966 19.2157 5.97407 18.2443ZM15.5699 18.969C15.7882 18.5326 15.9806 18.0545 16.1497 17.5466C16.8425 17.7386 17.4737 17.9734 18.0279 18.2425C17.102 19.2148 15.9479 19.9658 14.6462 20.4015C14.9904 19.9909 15.3003 19.5082 15.5699 18.969Z"
                    fill="#213039"
                    stroke="#213039"
                    stroke-width="0.2"
                  />
                </svg>
              </Info>

              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: {
                    xs: "column",
                  },
                }}
              >
                <Info md={3} xs={12} type={"العمر"} info={employee?.age}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C16.01 2.75 16.03 2.75 16.04 2.75C20.15 2.98 21.75 4.91 21.75 9.65V15.82C21.75 20.1 20.62 22.75 15 22.75ZM8 4.25C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C19.52 21.25 20.25 19.65 20.25 15.82V9.65C20.25 5.3 18.81 4.41 15.98 4.25H8Z"
                      fill="#292D32"
                    />
                    <path
                      d="M20.75 18.3501H3.25C2.84 18.3501 2.5 18.0101 2.5 17.6001C2.5 17.1901 2.84 16.8501 3.25 16.8501H20.75C21.16 16.8501 21.5 17.1901 21.5 17.6001C21.5 18.0101 21.16 18.3501 20.75 18.3501Z"
                      fill="#292D32"
                    />
                    <path
                      d="M12 8.25C10.77 8.25 9.73 8.92 9.73 10.22C9.73 10.84 10.02 11.31 10.46 11.61C9.85 11.97 9.5 12.55 9.5 13.23C9.5 14.47 10.45 15.24 12 15.24C13.54 15.24 14.5 14.47 14.5 13.23C14.5 12.55 14.15 11.96 13.53 11.61C13.98 11.3 14.26 10.84 14.26 10.22C14.26 8.92 13.23 8.25 12 8.25ZM12 11.09C11.48 11.09 11.1 10.78 11.1 10.29C11.1 9.79 11.48 9.5 12 9.5C12.52 9.5 12.9 9.79 12.9 10.29C12.9 10.78 12.52 11.09 12 11.09ZM12 14C11.34 14 10.86 13.67 10.86 13.07C10.86 12.47 11.34 12.15 12 12.15C12.66 12.15 13.14 12.48 13.14 13.07C13.14 13.67 12.66 14 12 14Z"
                      fill="#292D32"
                    />
                  </svg>
                </Info>
                <Info
                  md={4}
                  xs={12}
                  type={"الحالة الاجتماعية"}
                  info={employee?.social_status?.status}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.12 13.53C12.1 13.53 12.07 13.53 12.05 13.53C12.02 13.53 11.98 13.53 11.95 13.53C9.68 13.46 7.98 11.69 7.98 9.50998C7.98 7.28998 9.79 5.47998 12.01 5.47998C14.23 5.47998 16.04 7.28998 16.04 9.50998C16.03 11.7 14.32 13.46 12.15 13.53C12.13 13.53 12.13 13.53 12.12 13.53ZM12 6.96998C10.6 6.96998 9.47 8.10998 9.47 9.49998C9.47 10.87 10.54 11.98 11.9 12.03C11.93 12.02 12.03 12.02 12.13 12.03C13.47 11.96 14.52 10.86 14.53 9.49998C14.53 8.10998 13.4 6.96998 12 6.96998Z"
                      fill="#292D32"
                    />
                    <path
                      d="M12 22.7498C9.31 22.7498 6.74 21.7498 4.75 19.9298C4.57 19.7698 4.49 19.5298 4.51 19.2998C4.64 18.1098 5.38 16.9998 6.61 16.1798C9.59 14.1998 14.42 14.1998 17.39 16.1798C18.62 17.0098 19.36 18.1098 19.49 19.2998C19.52 19.5398 19.43 19.7698 19.25 19.9298C17.26 21.7498 14.69 22.7498 12 22.7498ZM6.08 19.0998C7.74 20.4898 9.83 21.2498 12 21.2498C14.17 21.2498 16.26 20.4898 17.92 19.0998C17.74 18.4898 17.26 17.8998 16.55 17.4198C14.09 15.7798 9.92 15.7798 7.44 17.4198C6.73 17.8998 6.26 18.4898 6.08 19.0998Z"
                      fill="#292D32"
                    />
                    <path
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                      fill="#292D32"
                    />
                  </svg>
                </Info>
                <Info
                  md={4}
                  xs={12}
                  type={"عدد الاطفال"}
                  info={employee?.kids_number}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.1596 11.62C9.1296 11.62 9.1096 11.62 9.0796 11.62C9.0296 11.61 8.9596 11.61 8.8996 11.62C5.9996 11.53 3.8096 9.25 3.8096 6.44C3.8096 3.58 6.1396 1.25 8.9996 1.25C11.8596 1.25 14.1896 3.58 14.1896 6.44C14.1796 9.25 11.9796 11.53 9.1896 11.62C9.1796 11.62 9.1696 11.62 9.1596 11.62ZM8.9996 2.75C6.9696 2.75 5.3096 4.41 5.3096 6.44C5.3096 8.44 6.8696 10.05 8.8596 10.12C8.9196 10.11 9.0496 10.11 9.1796 10.12C11.1396 10.03 12.6796 8.42 12.6896 6.44C12.6896 4.41 11.0296 2.75 8.9996 2.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M16.5396 11.75C16.5096 11.75 16.4796 11.75 16.4496 11.74C16.0396 11.78 15.6196 11.49 15.5796 11.08C15.5396 10.67 15.7896 10.3 16.1996 10.25C16.3196 10.24 16.4496 10.24 16.5596 10.24C18.0196 10.16 19.1596 8.96 19.1596 7.49C19.1596 5.97 17.9296 4.74 16.4096 4.74C15.9996 4.75 15.6596 4.41 15.6596 4C15.6596 3.59 15.9996 3.25 16.4096 3.25C18.7496 3.25 20.6596 5.16 20.6596 7.5C20.6596 9.8 18.8596 11.66 16.5696 11.75C16.5596 11.75 16.5496 11.75 16.5396 11.75Z"
                      fill="#292D32"
                    />
                    <path
                      d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z"
                      fill="#292D32"
                    />
                    <path
                      d="M18.3396 20.75C17.9896 20.75 17.6796 20.51 17.6096 20.15C17.5296 19.74 17.7896 19.35 18.1896 19.26C18.8196 19.13 19.3996 18.88 19.8496 18.53C20.4196 18.1 20.7296 17.56 20.7296 16.99C20.7296 16.42 20.4196 15.88 19.8596 15.46C19.4196 15.12 18.8696 14.88 18.2196 14.73C17.8196 14.64 17.5596 14.24 17.6496 13.83C17.7396 13.43 18.1396 13.17 18.5496 13.26C19.4096 13.45 20.1596 13.79 20.7696 14.26C21.6996 14.96 22.2296 15.95 22.2296 16.99C22.2296 18.03 21.6896 19.02 20.7596 19.73C20.1396 20.21 19.3596 20.56 18.4996 20.73C18.4396 20.75 18.3896 20.75 18.3396 20.75Z"
                      fill="#292D32"
                    />
                  </svg>
                </Info>
              </Grid>
              <Info
                type={"الراتب"}
                info={
                  <>
                    {Math.round(employee?.salary)}
                    <span style={{ fontWeight: "700", marginRight: ".5rem" }}>
                      ر.س /
                    </span>{" "}
                    شهر
                  </>
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.4 17.4201H10.89C9.25 17.4201 7.92 16.0401 7.92 14.3401C7.92 13.9301 8.26 13.5901 8.67 13.5901C9.08 13.5901 9.42 13.9301 9.42 14.3401C9.42 15.2101 10.08 15.9201 10.89 15.9201H13.4C14.05 15.9201 14.59 15.3401 14.59 14.6401C14.59 13.7701 14.28 13.6001 13.77 13.4201L9.74 12.0001C8.96 11.7301 7.91 11.1501 7.91 9.36008C7.91 7.82008 9.12 6.58008 10.6 6.58008H13.11C14.75 6.58008 16.08 7.96008 16.08 9.66008C16.08 10.0701 15.74 10.4101 15.33 10.4101C14.92 10.4101 14.58 10.0701 14.58 9.66008C14.58 8.79008 13.92 8.08008 13.11 8.08008H10.6C9.95 8.08008 9.41 8.66008 9.41 9.36008C9.41 10.2301 9.72 10.4001 10.23 10.5801L14.26 12.0001C15.04 12.2701 16.09 12.8501 16.09 14.6401C16.08 16.1701 14.88 17.4201 13.4 17.4201Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                    fill="#292D32"
                  />
                </svg>
              </Info>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function OrderReview({ employee, createOrder }) {
  return (
    <>
      <Grid item xs={12}>
        <Box
          sx={{
            fontSize: "40px",
            fontWeight: "700",
            lineHeight: "44.64px",
            marginBottom: ".5rem",
            color: "#005288",
          }}
        >
          مراجعة الطلب
        </Box>
        <Box
          sx={{
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "18px",
            color: "#213039",
          }}
        >
          برجاء مراجعة البيانات أدناه والتواصل مع خدمة العملاء
        </Box>
      </Grid>
      <Order employee={employee} createOrder={createOrder} />
      <ConfirmOrder />
    </>
  );
}
