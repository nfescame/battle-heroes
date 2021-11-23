import React from "react";
import img from "../../img/background-battle-heroes.jpg";
import "./main.css";

export default function Main() {
  return (
    <section className='containerMain'>
      <img src={img} alt='background'></img>
    </section>
  );
}
