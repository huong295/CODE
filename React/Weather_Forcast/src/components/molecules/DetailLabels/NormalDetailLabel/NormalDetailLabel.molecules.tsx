import React, { FC } from "react";
import NormalBoldLabel from "../../../atoms/Labels/BoldLabels/NormalBoldLabel/NormalBoldLabel.atom";
import NormalSlightLabel from "../../../atoms/Labels/SlightLabels/NormalSlightLabel/NormalSlightLabel.atom";
import Box from "@mui/material/Box";
import classes from "./NormalDetailLabel.module.scss";
interface NormalDetailLabelProps {
  number: string;
  unit: string;
}

const NormalDetailLabel: FC<NormalDetailLabelProps> = ({ number, unit }) => {
  return (
    <Box className={classes.normalDetailLabel} sx = {{display: "flex",}}>
      <div className={classes.normalDetailLabelNormalBoldLabel}>
        <NormalBoldLabel title={number} />
      </div>
      <div className={classes.normalDetailLabelNormalSlightLabel}>
        <NormalSlightLabel title={unit} />
      </div>
    </Box>
  );
};
export default NormalDetailLabel;
