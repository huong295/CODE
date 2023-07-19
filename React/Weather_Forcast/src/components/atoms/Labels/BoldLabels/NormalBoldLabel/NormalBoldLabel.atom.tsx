import React, { FC } from "react";
import classes from "./NormalBoldLabel.module.scss";

interface NormalBoldLabelProps {
    title: string;
}

const NormalBoldLabel: FC<NormalBoldLabelProps> = ({ title }) => {
    return (
        <div className={classes.normalBoldLabel}>
            <span className={classes.normalBoldLabelData}>{title}</span>
        </div>
    );
};

export default NormalBoldLabel;
