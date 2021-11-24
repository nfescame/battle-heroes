import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Search from "../../components/searchBar";
import CardHeroe from "../../components/card";
import DialogBattle from "../../components/dialog";

import { AuthContext } from "../../providers/auth";

export default function ListHeroes() {
  const data = React.useContext(AuthContext);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [state, setState] = useState([]);
  const [selectBattle, setSelectBattle] = useState({
    player1: {},
    player2: {},
  });

  useEffect(() => {
    const getList = async () => {
      try {
        const allList = await data.provider.map((item) => {
          return item;
        });
        setState(allList);
      } catch (err) {
        console.error(err);
      }
    };
    getList();
  }, []);

  function handleChange(e) {
    let newArr = [];
    data.provider.map((item) => {
      if (item.name.toLowerCase().includes(e.toLowerCase())) {
        newArr.push(item);
      }
      return item;
    });
    setState(newArr);
  }
  function handleChangePublisher(e) {
    let newArr = [];
    data.provider.map((item) => {
      if (item.biography.publisher === e) {
        newArr.push(item);
      }
      return item;
    });
    setState(newArr);
  }

  function objEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  function handleBattle(Heroe) {
    if (objEmpty(selectBattle.player1) === true) {
      const name = "player1";
      setSelectBattle((prevState) => ({
        ...prevState,
        [name]: Heroe,
      }));
    } else {
      const name = "player2";
      setSelectBattle((prevState) => ({
        ...prevState,
        [name]: Heroe,
      }));
      setIsOpenDialog(true);
    }
  }

  const handleClose = () => {
    setIsOpenDialog(false);
    setSelectBattle({
      player1: "",
      player2: "",
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search
        handleChange={handleChange}
        handleChangePublisher={handleChangePublisher}
      />
      <Grid container spacing={4}>
        {state.map((item) => {
          return (
            <Grid
              onClick={() => handleBattle(item)}
              key={item.id}
              item
              lg={2}
              md={3}
              sm={4}
              xs={12}
            >
              {<CardHeroe item={item} />}
            </Grid>
          );
        })}
      </Grid>
      {isOpenDialog === true ? (
        <DialogBattle
          setIsOpenDialog={setIsOpenDialog}
          isOpenDialog={isOpenDialog}
          handleClose={handleClose}
          selectBattle={selectBattle}
        />
      ) : null}
    </Box>
  );
}
