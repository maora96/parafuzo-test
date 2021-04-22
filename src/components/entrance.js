import React, { useState } from "react";
import { fetchWithBody } from "../utils/fetch";
export default function Entrance() {
  const [input, setInput] = useState("");
  return (
    <div className="entrance-body">
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
          fetchWithBody(
            "https://parking-lot-to-pfz.herokuapp.com/parking",
            "POST",
            { plate: input }
          )
            .then((res) => res.json())
            .then((resJson) => {
              console.log(resJson);
            });
        }}
      >
        Confirmar entrada
      </button>
    </div>
  );
}
