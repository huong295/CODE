import React, { FC } from "react";
import SmallIcon from "../../../atoms/Icons/SmallIcon/SmallIcon.atom";
import SmallSlightLabel from "../../../atoms/Labels/SlightLabels/SmallSlightLabel/SmallSlightLabel.atom";
import CircleBtn from "../../../atoms/Buttons/CircleBtn/CircleBtn.atom";
import classes from "./SmallDetailLabel.module.scss";
import Box from "@mui/material/Box";
interface SmallDetailLabelProps {
  name: string;
}

const SmallDetailLabel: FC<SmallDetailLabelProps> = ({ name }) => {
  return (
    <div className={classes.smallDetailLabel}>
      <Box className={classes.smallDetailLabelDate} sx={{ display: "flex" }}>
        <div>
          <SmallSlightLabel title="Sunday" />
        </div>
        <div>
          <SmallSlightLabel title="." />
        </div>
        <div>
          <SmallSlightLabel title="12 November 2022" />
        </div>
      </Box>

      <Box
        className={classes.smallDetailLabelLocation}
        sx={{ display: "flex" }}
      >
        <div className={classes.smallDetailLabelLocationDetail}>
          <CircleBtn type="location"></CircleBtn>
        </div>
        <div className={classes.smallDetailLabelLocationDetail}>
          <SmallSlightLabel title="Ha Noi" />
        </div>
      </Box>
    </div>
  );
};
export default SmallDetailLabel;
