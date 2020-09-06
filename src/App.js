import React, {useEffect, useState} from 'react';
import './App.module.css';
import Cards from './components/cards/Cards'
import Chart from './components/chart/Chart'
import CountryPicker from './components/countryPicker/CountryPicker'

import styles from './App.module.css'
import {fetchData} from "./api";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData();
        async function fetchMyAPI() {
            let response = await fetchData();
            setData(response);
        }

        fetchMyAPI();
        return () => {
            // Anything in here is fired on component unmount.
        }
    }, []);

    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker/>
            <Chart/>
        </div>
    );
}

export default App;
