import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import React from "react";

function ReviewsNav({ categories, category, setCategory, sortby, setSortby }) {
  const onCategoryChange = (event) => {
    setCategory(event.target.value === "all" ? null : event.target.value);
  };
  const onSortChange = (event) => {
    setSortby(event.target.value);
  };

  return (
    <Box sx={{ my: 2 }}>
      <FormControl sx={{ width: "100%", mb: 2 }}>
        <FormLabel>Category</FormLabel>
        <RadioGroup row sx={{ width: "100%" }}>
          {categories.map(({ slug }) => {
            return (
              <FormControlLabel
                key={slug}
                value={slug}
                control={<Radio />}
                label={slug.split("-").join(" ")}
                checked={slug === category}
                onChange={onCategoryChange}
                sx={{
                  width: { xs: "100%", sm: "50%", md: "33.33%" },
                  mr: 0,
                  pr: 2,
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Sort by</InputLabel>
        <Select value={sortby} label="Sort by" onChange={onSortChange}>
          <MenuItem value="created_at">created at</MenuItem>
          <MenuItem value="comment_count">comment count</MenuItem>
          <MenuItem value="votes">votes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ReviewsNav;
