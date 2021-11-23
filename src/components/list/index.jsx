import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Search from "../searchBar/Search";
import CardHeroe from "../card/CardHeroes";

import { AuthContext } from "../../providers/auth";

export default function ListHeroes() {
  const data = React.useContext(AuthContext);
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      await setState(data.provider);
      console.log(state);
    }
    getData();
  }, []);

  function searchHeroes(wordInput) {
    let newArr = [];
    data.provider.map((item) => {
      if (item.name.toLowerCase().includes(wordInput.toLowerCase())) {
        newArr.push(item);
      }
      return item;
    });
    setState(newArr);
  }

  function handleChange(e) {
    setSearch(e);
    searchHeroes(e);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search handleChange={handleChange} search={search} />
      <Grid container spacing={4}>
        {state.map((item, index) => {
          return (
            <Grid item lg={2} md={3} sm={4} xs={12}>
              {<CardHeroe item={item} />}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
