import React from "react";
import { useHistory } from "react-router-dom";

export default function DataEntry(props) {
  const { plate } = props;
  const history = useHistory();

  return (
    <div
      className="data-entry"
      onClick={() => {
        history.push(`/single/${plate.plate}`);
      }}
    >
      <div className="column-one">
        <p>Tempo atual</p>
        <span>{plate.time}</span>
      </div>

      <div className="column-two">
        <p>Pagamento</p>
        <span>{plate.paid === true ? "Pago" : "-"}</span>
      </div>
    </div>
  );
}
