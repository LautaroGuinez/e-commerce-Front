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
        "https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/pcArmadasNew.jpg",
      titulo: "teclado",
    },
    {
      id: 2,
      imgUrl:
        "https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/placasDeVideoNew.jpg",
      titulo: "tv",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/asusDestornillador.webp",
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
    <div style={{ marginTop: "30px" }}>
      <Box sx={{ maxWidth: "100%", width: "100%", flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: "100%",
            pl: 2,
            bgcolor: "background.default",
            background: "transparent",
          }}
        ></Paper>
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
                    height: "600px",
                    display: "block",
                    height: "100%",
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
    </div>
  );
};

export default Sidebar;
