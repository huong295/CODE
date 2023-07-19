import React from "react";
import Button from "@mui/material/Button";
import classes from "./SearchBtn.module.scss";

const SearchBtn = () => {
    return (
        <div className={classes.searchBtn}>
            <Button variant="contained" size = "large" color = "info">Search</Button>
        </div>
    );
};

export default SearchBtn;
