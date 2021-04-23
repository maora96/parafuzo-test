import React, { useState } from "react";
import { fetchWithBody } from "../utils/fetch";
import Loading from "../assets/loading.png";
import Done from "../assets/done.png";

export default function Entrance() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(1);

  return (
    <div className="entrance-body">
      {isLoading === 0 ? (
        <>
          <img src={Loading} alt="" /> <p class="center-me">Registrando...</p>
        </>
      ) : isLoading === 1 ? (
        <>
          <p>Número da placa:</p>
          <input
            type="text"
            placeholder="AAA-0000"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <button
            disabled={input === "" ? true : false}
            onClick={() => {
              setIsLoading(1);
              fetchWithBody(
                "https://parking-lot-to-pfz.herokuapp.com/parking",
                "POST",
                { plate: input }
              )
                .then((res) => res.json())
                .then((resJson) => {
                  console.log(resJson);
                  setIsLoading(2);
                });
            }}
          >
            Confirmar entrada
          </button>
        </>
      ) : (
        <>
          <img src={Done} alt="" /> <p class="center-me">REGISTRADO!</p>
        </>
      )}
    </div>
  );
}
