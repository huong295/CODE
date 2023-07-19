import React, { FC } from "react";
import classes from "./SmallBoldLabel.module.scss";

interface SmallBoldLabelProps {
  title: string;
}

const SmallBoldLabel: FC<SmallBoldLabelProps> = ({ title }) => {
  return (
    <div className={classes.smallBoldLabel}>
      <span className={classes.smallBoldLabelData}>{title}</span>
    </div>
  );
};

export default SmallBoldLabel;
