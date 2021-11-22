import React, { useState, useEffect } from "react";
import CardHeroes from "../../components/card/CardHeroes";
import Search from "../../components/search/Search";
import { AuthContext } from "../../providers/auth";

export default function Home() {
  const [search, setSearch] = useState("batman");
  const data = React.useContext(AuthContext);
  const [state, setState] = useState([]);

  useEffect(() => {
    async function getData() {
      await setState(data.provider);
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
    <div>
      <Search handleChange={handleChange} search={search} />
      <section className='row'>
        {state.map((item) => {
          return <CardHeroes item={item} />;
        })}
      </section>
    </div>
  );
}
