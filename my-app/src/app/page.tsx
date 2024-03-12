"use client";

import React from "react";
import Link from "next/link";
import "./tailwind.css";


export default function Main() {
  return (
    <div>
      <h1>Main site</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link href="/showCars">
        <button>ShowCars</button>
      </Link>
    </div>
  );
}
