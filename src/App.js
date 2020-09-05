import React, {useEffect} from 'react';
import './App.module.css';
import Cards from './components/cards/Cards'
import Chart from './components/chart/Chart'
import CountryPicker from './components/countryPicker/CountryPicker'

import styles from './App.module.css'
import {fetchData} from "./api";

function App() {
   useEffect( () => {
     async function getData() {
       await fetchData();
     }
    console.log(getData());
    return () => {
      // Anything in here is fired on component unmount.
    }
  }, []);

  return (
    <div className={styles.container}>
      <Cards/>
      <CountryPicker/>
      <Chart/>
    </div>
  );
}

export default App;
