import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";

import Search from "../../components/searchBar";
import CardHeroe from "../../components/card";
import DialogBattle from "../../components/dialog";
import Alerts from "../../components/alert";
import AlertsInfo from "../../components/alertInfo";
import Spinner from "../../components/spinner";
import ButtonTop from "../../components/buttonTop";
import Pagination from "../../components/pagination";

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

  //initialize

  useEffect(() => {
    const fetchPosts = async () => {
      const allList = data.currentPosts.map((item) => {
        return item;
      });
      setState(allList);
    };

    fetchPosts();
  }, [data]);

  // search

  function HandleSearch(e) {
    const result = data.provider.filter((provider) =>
      provider.name.toLowerCase().includes(e.toLowerCase())
    );
    setState(result);
  }

  // search publisher

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

  // verification object empty

  function objEmpty(obj) {
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  // select character for battle

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

  // close modal battle

  const handleClose = () => {
    setIsOpenDialog(false);
    setSelectBattle({
      player1: "",
      player2: "",
    });
  };

  // button navegation
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "1rem" }}>
      <Box onClick={scrollTop}>
        <ButtonTop />
      </Box>

      {isOpenAlert === true ? (
        <Alerts selectHeroesName={selectBattle.player1.name} />
      ) : null}
      {isOpenAlertInfo === true ? (
        <AlertsInfo selectHeroesName={selectBattle.player1.name} />
      ) : null}
      <Pagination />
      <Search
        HandleSearch={HandleSearch}
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
