import React, { useEffect, useState } from "react";
import DataEntry from "../components/data-entry";
import Header from "../components/header";
import { useRouteMatch, useHistory } from "react-router-dom";
import Arrow from "../assets/arrow.png";

export default function Data() {
  const { params } = useRouteMatch();
  const [plate, setPlate] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://parking-lot-to-pfz.herokuapp.com/parking/${params.id}`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        setPlate(resJson);
        console.log(plate[0]);
        console.log(typeof plate);
      });
  }, []);

  return (
    <div className="Data">
      <Header />

      {plate ? (
        <div className="data-content">
          <div className="data-header">
            <img
              src={Arrow}
              alt=""
              onCLick={() => {
                history.push("/");
              }}
            />
            <h2>Placa {plate[0].plate}</h2>
          </div>
          {plate.map((entry) => {
            return <DataEntry plate={entry} />;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
