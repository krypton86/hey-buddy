import React, {useState, useEffect} from "react";
import axios from 'axios'
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import SingleEventView from "./singleEventView";
import "./event.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));


function EventView() {
    const classes = useStyles();
    const [events, setEvents] = useState([]);

    const loadEvents = async () => {
        const res = await axios.get(`http://localhost:3006/events`);
        setEvents(res.data);
    }
    useEffect(() => {
        loadEvents();
    }, [])


    return (
        <div className={`${classes.root} home-event-view-container`}>
            <Grid container spacing={6} justify="space-around" alignItems="center">
                {events.map(data => {
                    return <SingleEventView data={data}/>
                })}
            </Grid>
        </div>
    )
}

export default EventView;