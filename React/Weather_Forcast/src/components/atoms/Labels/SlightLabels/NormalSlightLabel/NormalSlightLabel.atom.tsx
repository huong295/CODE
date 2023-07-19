import React, { FC } from "react";
import classes from "./NormalSlightLabel.module.scss";

interface NormalSlightLabelProps {
    title: string;
}

const NormalSlightLabel: FC<NormalSlightLabelProps> = ({ title }) => {
    return (
        <div className={classes.normalSlightLabel}>
            <span className={classes.normalSlightLabelData}>{title}</span>
        </div>
    );
};

export default NormalSlightLabel;
