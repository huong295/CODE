import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import classes from "./Loading.module.scss";

export default function Loading() {
    return (
        <>
            <div className={`${classes.loading} ${classes.overlay}`}></div>
            <div className={`${classes.loading} ${classes.circular}`}>
                <CircularProgress />
            </div>
        </>
    );
}
