import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [counties, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [filteredCounties, setFilteredCounties] = useState([]);

  const fetchCounties = () => {
    const URL = "https://xcountries-backend.azurewebsites.net/all";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data: ", error);
      });
  };

  const filterCountries = (search) => {
    const filter = counties.filter((country) => country.name.includes(search));
    setFilteredCounties(filter);
  };
  useEffect(() => {
    filterCountries(search);
  }, [search]);

  useEffect(() => {
    fetchCounties();
  }, []);

  return (
    <main>
      <h1>XCountries</h1>
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error ? (
        <h2>"Error fetching data : {error}"</h2>
      ) : filteredCounties ? (
        <div className="container">
          {filteredCounties.map((country, index) => (
            <Card data={country} key={index} />
          ))}
        </div>
      ) : (
        <div className="container">
          {counties.map((country, index) => (
            <Card data={country} key={index} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
