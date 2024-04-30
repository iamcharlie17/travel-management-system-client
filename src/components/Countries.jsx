import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [loadedCountries, setLoadedCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setLoadedCountries(data));
  }, []);

  const countries = loadedCountries.slice(0, 6);

  return (
    <div className="my-8">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Countries</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-4">
        {countries.map((country) => (
          <Country key={country._id} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
