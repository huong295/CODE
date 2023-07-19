import React, { FC } from "react";
import Button from "@mui/material/Button";
import classes from "./SearchPlaceBtn.module.scss";
import WeatherSearchSidebar from "../../../templates/WeatherSearchSidebar/WeatherSearchSidebar.template";
import { useDispatch } from "react-redux";
import { searchActiveActions } from "../../../../redux/searchActive";
const SearchPlaceBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.searchPlaceBtn}>
      <Button
        onClick={() => {
          dispatch(searchActiveActions.toggleSearchActive());
        }}
      >
        Search For Place
      </Button>
    </div>
  );
};

export default SearchPlaceBtn;
