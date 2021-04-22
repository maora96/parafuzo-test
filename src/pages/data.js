import React, { useEffect, useState } from "react";
import DataEntry from "../components/data-entry";
import Header from "../components/header";
import { useRouteMatch } from "react-router-dom";

export default function Data() {
  const { params } = useRouteMatch();
  const [plate, setPlate] = useState([]);
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

      <div className="data-content">
        <h2>Placa {plate[0].plate}</h2>
        {plate.map((entry) => {
          return <DataEntry plate={entry} />;
        })}
      </div>
    </div>
  );
}
