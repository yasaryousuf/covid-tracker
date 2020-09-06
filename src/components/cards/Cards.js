import React from 'react'
import {Card, CardContent, Typography, Grid} from "@material-ui/core";
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (props) => {
    console.log(props);
    return (
        <div >
            <Grid spacing={3} container justify={"center"}>
                <Grid component={Card} item xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant={"h5"}>
                            <CountUp
                                start={0}
                                end={props && props.data && props.data.confirmed && props.data.confirmed.value ? props.data.confirmed.value : ""}
                                separator={","}
                            />
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {props && props.data && props.data.lastUpdate && props.data.lastUpdate ? new Date(props.data.lastUpdate).toDateString() : ""}
                        </Typography>
                        <Typography variant={"body2"}>
                            Number of action cases  of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid component={Card} item xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant={"h5"}>
                            <CountUp
                                start={0}
                                end={props && props.data && props.data.recovered && props.data.recovered.value ? props.data.recovered.value : ""}
                                separator={","}
                            />
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {props && props.data && props.data.lastUpdate && props.data.lastUpdate ? new Date(props.data.lastUpdate).toDateString() : ""}
                        </Typography>
                        <Typography variant={"body2"}>
                            Number of recovered cases from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid component={Card} item xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant={"h5"}>

                            <CountUp
                                start={0}
                                end={props && props.data && props.data.deaths && props.data.deaths.value ? props.data.deaths.value : ""}
                                separator={","}
                            />
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {props && props.data && props.data.lastUpdate && props.data.lastUpdate ? new Date(props.data.lastUpdate).toDateString() : ""}
                        </Typography>
                        <Typography variant={"body2"}>
                            Number of deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;