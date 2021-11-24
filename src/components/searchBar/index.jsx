import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { AuthContext } from "../../providers/auth";

export default function SearchBar(props) {
  const data = React.useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("");
  const [publisher, setPublisher] = useState([]);
  const { handleChange, handleChangePublisher } = props;

  useEffect(() => {
    const getPublisher = async () => {
      try {
        const allPublisher = data.provider.map((item) => {
          return item.biography.publisher;
        });
        let publisherFilter = allPublisher.filter(
          (item, index) => allPublisher.indexOf(item) === index
        );
        setPublisher(publisherFilter);
      } catch (err) {
        console.error(err);
      }
    };
    getPublisher();
  }, []);

  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <TextField
        className='textField'
        id='demo-helper-text-aligned'
        label='Search'
        value={search}
        onChange={(e) => {
          handleChange(e.target.value);
          setSearch(e.target.value);
        }}
        sx={{ m: 1, width: "100%" }}
      />
      <TextField
        id='outlined-select-currency'
        label='Select publisher'
        value={currency}
        onChange={(e) => {
          handleChangePublisher(e.target.value);
          setCurrency(e.target.value);
        }}
        select
        sx={{ m: 1, width: "100%" }}
      >
        {publisher.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
