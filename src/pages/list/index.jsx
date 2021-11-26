import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";

import Search from "../../components/searchBar";
import CardHeroe from "../../components/card";
import DialogBattle from "../../components/dialog";
import Alerts from "../../components/alert";
import AlertsInfo from "../../components/alertInfo";
import Spinner from "../../components/spinner";
import ButtonTop from "../../components/buttonTop";

import { AuthContext } from "../../providers/auth";

export default function ListHeroes() {
  const data = React.useContext(AuthContext);

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpenAlertInfo, setIsOpenAlertInfo] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [state, setState] = useState([]);
  const [selectBattle, setSelectBattle] = useState({
    player1: {},
    player2: {},
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const allList = data.provider.map((item) => {
        return item;
      });
      setState(allList);
    };

    fetchPosts();
  }, [data]);

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
      setIsOpenAlertInfo(true);
    } else {
      if (selectBattle.player1.id !== Heroe.id) {
        setIsOpenAlert(false);
        setIsOpenAlertInfo(false);
        const name = "player2";
        setSelectBattle((prevState) => ({
          ...prevState,
          [name]: Heroe,
        }));
        setIsOpenDialog(true);
      } else {
        setIsOpenAlert(true);
      }
    }
  }

  const handleClose = () => {
    setIsOpenDialog(false);
    setSelectBattle({
      player1: "",
      player2: "",
    });
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box onClick={scrollTop} sx={{ flexGrow: 1, padding: "1rem" }}>
      <ButtonTop />
      {isOpenAlert === true ? (
        <Alerts selectHeroesName={selectBattle.player1.name} />
      ) : null}
      {isOpenAlertInfo === true ? (
        <AlertsInfo selectHeroesName={selectBattle.player1.name} />
      ) : null}

      <Search
        handleChange={handleChange}
        handleChangePublisher={handleChangePublisher}
      />
      {data.loading === true ? (
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <h2>Loading...</h2> <Spinner />
        </Box>
      ) : null}

      <Grid container spacing={3}>
        {state.map((item) => {
          return (
            <Grid key={item.id} item lg={2} md={3} sm={4} xs={12}>
              {<CardHeroe item={item} handleBattle={handleBattle} />}
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
