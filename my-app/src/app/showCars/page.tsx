"use client";
import useCars from "../components/connect";

export default function Main() {
  const { cars, loading } = useCars();

  return (
    <main className="">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cars.map((car, index) => (
            <li key={index}>
              {Object.entries(car).map(([key, value]) => (
                <span key={key}>
                  {key.toUpperCase()}: {value},{" "}
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
