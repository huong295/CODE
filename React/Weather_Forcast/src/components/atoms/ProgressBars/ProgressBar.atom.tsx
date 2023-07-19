import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import classes from "./ProgressBar.module.scss";
const marks = [
  {
    value: 0,
    label: "0 ",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
];

function valuetext(value: number) {
  return `${value} %`;
}
const ProgressBar = () => {
  return (
    <Box className={classes.progressBar} sx={{ width: 229, marginLeft: 7 }}>
      <Slider
        disabled
        defaultValue={30}
        aria-label="Disabled slider"
        step={10}
        marks={marks}
      />
      <div className={classes.progressBarUnitHumidity}>%</div>
    </Box>
  );
};

export default ProgressBar;
