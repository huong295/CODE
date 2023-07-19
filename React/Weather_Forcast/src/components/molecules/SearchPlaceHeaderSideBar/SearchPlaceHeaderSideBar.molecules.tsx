import React from "react";
import SearchPlaceBtn from "../../atoms/Buttons/SearchPlaceBtn/SearchPlaceBtn.atom";
import CircleBtn from "../../atoms/Buttons/CircleBtn/CircleBtn.atom";
import Box from "@mui/material/Box";
import classes from "./SearchPlaceHeaderSideBar.module.scss";
const SearchPlaceHeaderSideBar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", width: 327 }}>
      <div className={classes.searchPlaceHeaderSideBarBtn}>
        <SearchPlaceBtn />
      </div>
      <div className={classes.searchPlaceHeaderSideBarCircleBtn}>
        <CircleBtn type="location" />
      </div>
    </Box>
  );
};

export default SearchPlaceHeaderSideBar;
