import React, { useState } from "react";
import CircleBtn from "../../atoms/Buttons/CircleBtn/CircleBtn.atom";
import classes from "./UnitTemperatureBox.module.scss";
import Box from "@mui/material/Box";

const UnitTemperatureBox = () => {
  const [celsiusActive, setCelsiusActive] = useState(false);
  const onChangeStatus = (e: any) => {
    if (
      (celsiusActive && e.target.value === "fahrenheit") ||
      (!celsiusActive && e.target.value === "celsius")
    ) {
      setCelsiusActive(!celsiusActive);
    }
  };
  return (
    <Box sx={{ display: "flex" }} className={classes.unitTemperatureBox}>
      <div className={classes.unitTemperatureBoxCircleBtn}>
        <CircleBtn
          type="celsius"
          isActive={celsiusActive}
          onChangeActiveStatus={onChangeStatus}
          // onClick ={(=> changeUnit('Celcius'))}
        />
      </div>
      <div className={classes.unitTemperatureBoxCircleBtn}>
        <CircleBtn
          type="fahrenheit"
          isActive={!celsiusActive}
          onChangeActiveStatus={onChangeStatus}
        />
      </div>
    </Box>
  );
};

export default UnitTemperatureBox;
