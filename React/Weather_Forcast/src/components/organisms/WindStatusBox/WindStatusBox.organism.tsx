import React from "react";
import SmallSlightLabel from "../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import NormalDetailLabel from "../../molecules/DetailLabels/NormalDetailLabel/NormalDetailLabel.molecules";
import CircleBtn from "../../atoms/Buttons/CircleBtn/CircleBtn.atom";
import Box from "@mui/material/Box";
import classes from "./WindStatusBox.module.scss";
const WindStatusBox = () => {
  return (
    <Box
      className={classes.windStatusBox}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <div className={classes.smallSlightLabelText}>
        <SmallSlightLabel title="Wind Status" />
      </div>
      <NormalDetailLabel number="7" unit="mph" />
      <Box className={classes.windStatusBoxDetail} sx={{ display: "flex"}}>
        <CircleBtn type="navigation" />
        <div className={classes.windStatusBoxDetailText}>
          <SmallSlightLabel title="wsw" />
        </div>
      </Box>
    </Box>
  );
};

export default WindStatusBox;
