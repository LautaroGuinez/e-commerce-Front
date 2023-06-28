import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Sidebar = () => {
  const data = [
    {
      id: 1,
      imgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_944449-MLA50305077491_062022-O.webp",
      titulo: "teclado",
    },
    {
      id: 2,
      imgUrl:
        "https://medias.musimundo.com/medias/00431006-144267-144267-02-144267-02.jpg-size515?context=bWFzdGVyfGltYWdlc3w4MDI2N3xpbWFnZS9qcGVnfGgwNC9oNTcvMTA0NDA3MzI4Njg2MzgvMDA0MzEwMDYtMTQ0MjY3LTE0NDI2N18wMi0xNDQyNjdfMDIuanBnX3NpemU1MTV8NjkwMDRjMmI1ZWMxY2Q1MmNkZTIyZTE1ZGY2Nzg3OGQ5MmFmZDU4MGMzOTYwMzY2YTM0ZThmMTYyNWIzNGQ5YQ",
      titulo: "tv",
    },
    {
      id: 3,
      imgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_803086-MLA47920649105_102021-O.webp",
      titulo: "consola",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{data[activeStep].titulo}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {data.map((step, index) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgUrl}
                  alt={step.titulo}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
};

export default Sidebar;
