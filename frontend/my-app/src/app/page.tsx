"use client"
import React, { useEffect, useState } from "react";

function Home() {
  const [cars, setCars] = useState([{}])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/samochody").then(
      res => res.json())
      .then(
        data => {
          setCars(data)
        }
      )
  }, [])

  return (
    <main className="">
      <h1>ReactPythonConnect</h1>
      <li>SIEMA</li>
      <ul>
        {cars.map((car) => (
          <li key={car.vin}>{car.marka}</li>
        ))}
      </ul>
    </main>
  );
}

export default Home;