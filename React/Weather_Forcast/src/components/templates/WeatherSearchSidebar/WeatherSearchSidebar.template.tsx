import React from "react";
import CloseBtn from "../../atoms/Buttons/CloseBtn/CloseBtn.atom";
import InputText from "../../atoms/InputFields/InputText/InputText.atom";
import SearchBtn from "../../atoms/Buttons/SearchBtn/SearchBtn.atom";
import InputSelection from "../../atoms/InputFields/SelectionInput/SelectionInput.atom";
import Box from "@mui/material/Box";
import classes from "./WeatherSearchSidebar.module.scss";
const WeatherSearchSidebar = () => {
  return (
    <Box className={classes.weatherSearchSideBar}>
      <Box
        className={classes.weatherSearchSideBarCloseBtn}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <CloseBtn />
      </Box>
      <Box
        sx={{ display: "flex" }}
        className={classes.weatherSearchSideBarDetail}
      >
        <div className={classes.weatherSearchSideBarDetailInputText}>
          <InputText />
        </div>
        <div className={classes.weatherSearchSideBarDetailSearchBtn}>
          <SearchBtn />
        </div>
      </Box>
      <div className={classes.weatherSearchSideBarInputSelection}>
        <InputSelection />
      </div>
    </Box>
  );
};

export default WeatherSearchSidebar;
