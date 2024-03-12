"use client"
import { useState, useEffect } from "react";

export default function useCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/samochody")
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
            });
    }, []);

    return cars;
}
