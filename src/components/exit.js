import React, { useState } from "react";
import { fetchNoBody } from "../utils/fetch";
import { useHistory } from "react-router-dom";

export default function Exit() {
  const [input, setInput] = useState("");
  const history = useHistory();

  return (
    <div className="exit-body">
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
          fetchNoBody(
            `https://parking-lot-to-pfz.herokuapp.com/parking/${input}/pay`,
            "POST"
          )
            .then((res) => res.json())
            .then((resJson) => {
              console.log(resJson);
            })
            .catch((err) => console.log(err));
        }}
      >
        Pagamento
      </button>
      <button
        disabled={input === "" ? true : false}
        onClick={() => {
          fetchNoBody(
            `https://parking-lot-to-pfz.herokuapp.com/parking/${input}/out`,
            "POST"
          )
            .then((res) => res.json())
            .then((resJson) => {
              console.log(resJson);
            })
            .catch((err) => console.log(err));
        }}
      >
        Saída
      </button>
      <span
        onClick={() => {
          console.log(input);
          history.push(`/data/${input}`);
        }}
      >
        Ver histórico
      </span>
    </div>
  );
}
