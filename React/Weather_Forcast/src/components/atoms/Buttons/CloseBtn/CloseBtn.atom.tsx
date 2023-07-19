import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { searchActiveActions } from "../../../../redux/searchActive";

import classes from "./CloseBtn.module.scss";
const CloseBtn = () => {
  const dispatch = useDispatch();
  return (
    <IconButton
      aria-label="close"
      sx={{ color: "white" }}
      onClick={() => {
        dispatch(searchActiveActions.toggleSearchActive());
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBtn;
