import React, { useState } from "react";
import Entrance from "../components/entrance";
import Exit from "../components/exit";
import Header from "../components/header";

function Home() {
  const [isEntrance, setIsEntrance] = useState(true);

  const changeMode = () => {
    setIsEntrance(!isEntrance);
  };
  return (
    <div className="Home">
      <Header />

      <div className="content">
        <div className="card">
          <div className="buttons">
            <button onClick={changeMode} className={isEntrance ? "active" : ""}>
              Entrada
            </button>
            <button onClick={changeMode} className={isEntrance ? "" : "active"}>
              Saída
            </button>
          </div>

          <div className="card-body">
            {isEntrance === true ? <Entrance /> : <Exit />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
