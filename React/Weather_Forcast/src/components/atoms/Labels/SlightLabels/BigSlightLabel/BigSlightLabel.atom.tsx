import React, { FC } from "react";
import classes from "./BigSlightLabel.module.scss";
interface BigSlightLabelProps {
    title: string;

}
const BigSlightLabel: FC<BigSlightLabelProps> = ({ title }) => {
    return (
        <div className={classes.bigSlightLabel}>
            <span className={classes.bigSlightLabelData}>{title}</span>
        </div>
    );
};

export default BigSlightLabel;
