import React from "react";
import Entrance from "../components/entrance";
import Exit from "../components/exit";
import Header from "../components/header";

function Home() {
  return (
    <div className="Home">
      <Header />

      <div className="content">
        <div className="card">
          <div className="buttons">
            <div className="entrance">Entrada</div>
            <div className="exit">Saída</div>
          </div>

          <div className="card-body">
            <Entrance />
            <Exit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
