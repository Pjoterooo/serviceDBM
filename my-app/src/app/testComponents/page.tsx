"use client";
import "../tailwind.css";
import ActiveUser from "../components/activeUser";
import { useState, useEffect } from "react";

export default function Main() {
  let [liczba, setLiczba] = useState(0);
  console.log(liczba);

  const [windowSize, setWindowSize] = useState({width: window.innerWidth,height: window.innerHeight,});

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <ActiveUser></ActiveUser>
      <button onClick={() => setLiczba(liczba + 1)}>+</button>
      <p>Liczba: {liczba}</p>
      <div>
        <p>Szerokość okna: {windowSize.width}px</p>
        <p>Wysokość okna: {windowSize.height}px</p>
      </div>
    </div>
  );
}
