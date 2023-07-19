import React, { FC } from "react";
import classes from "./BigBoldLabel.module.scss";

interface BigBoldLabelProps {
  title: string;
}

const BigBoldLabel: FC<BigBoldLabelProps> = ({ title }) => {
  return (
    <div className={classes.bigBoldLabel}>
      <div className={classes.bigBoldLabelData}>{title}</div>
    </div>
  );
};

export default BigBoldLabel;
