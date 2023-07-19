import React, { FC } from "react";
import classes from "./SmallSlightLabel.module.scss";

interface SmallSlightLabelProps {
    title: string;
}

const SmallSlightLabel: FC<SmallSlightLabelProps> = ({ title }) => {
    return (
        <div className={classes.smallSlightLabel}>
            <span className={classes.smallSlightLabelData}>{title}</span>
        </div>
    );
};

export default SmallSlightLabel;
