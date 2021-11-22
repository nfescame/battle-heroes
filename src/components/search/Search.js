import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import "./search.css";

export default function CustomizedInputBase(props) {
  const { handleChange, search } = props;

  return (
    <section className='sectionSearch'>
      <Paper className='containerSearch'>
        <InputBase
          className='inputSearch'
          placeholder='Search '
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
        <IconButton type='submit' aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </section>
  );
}
