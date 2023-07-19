import React, { FC } from "react";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import IconButton from "@mui/material/IconButton";
import classes from "./CircleBtn.module.scss";

interface CircleBtnProps {
  type: string;
  isActive?: boolean | undefined;
  onChangeActiveStatus?: (value: any) => void | undefined;
}

const CircleBtn: FC<CircleBtnProps> = ({
  type,
  isActive,
  onChangeActiveStatus,
}) => {
  const renderType = (
    type: string,
    isActive: boolean | undefined,
    onChangeActiveStatus: any
  ) => {
    if (type === "gps") {
      return (
        <IconButton>
          <GpsFixedRoundedIcon />
        </IconButton>
      );
    }
    if (type === "location") {
      return (
        <IconButton>
          <LocationOnRoundedIcon />
        </IconButton>
      );
    }
    if (type === "navigation") {
      return (
        <IconButton>
          <NavigationRoundedIcon />
        </IconButton>
      );
    }

    if (type === "celsius") {
      return (
        <IconButton
          className={isActive ? classes.active : ""}
          onClick={()=>{
            onChangeActiveStatus();
            
          }}
          value="celsius"
        >
          ℃
        </IconButton>
      );
    }
    return (
      <IconButton
        className={isActive ? classes.active : ""}
        value="fahrenheit"
        onClick={onChangeActiveStatus}
      >
        ℉
      </IconButton>
    );
  };

  return (
    <div className={classes.circleBtn}>
      {renderType(type, isActive, onChangeActiveStatus)}
    </div>
  );
};

export default CircleBtn;
