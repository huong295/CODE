import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import classes from "./SelectionInput.module.scss";
export default function SelectionInput() {
  const [location, setLocation] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  return (
    <Box className={classes.selectionInput} sx={{ width: 367, height: 64 }}>
      <FormControl className = {classes.selectionInputFormCotrol} sx={{ width: 390, height: 64 }} color="primary">
        <InputLabel className = {classes.selectionInputFormControlInputLabel}id="demo-simple-select-label">Places</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Loacation"
          onChange={handleChange}
        >
          <MenuItem value={1}>Hà Nội</MenuItem>
          <MenuItem value={2}>Hồ Chí Minh</MenuItem>
          <MenuItem value={3}>Đà Nẵng</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
