import React, { useEffect, useState } from "react";
import "./App.module.css";
import Cards from "./components/cards/Cards";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/countryPicker/CountryPicker";

import styles from "./App.module.css";
import { fetchData } from "./api";
import CoronaImage from "./images/image.png";

function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    setData();
    async function fetchMyAPI() {
      let response = await fetchData();
      setData(response);
    }

    fetchMyAPI();
    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);

  const handleCountryChange = async (country) => {
    setCountry(country);
    let fetchedData = await fetchData(country);
    setData(fetchedData);
  };

  return (
    <div className={styles.container}>
      <img src={CoronaImage} className={styles.image} alt="Covid-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
