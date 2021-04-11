import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomeGridView} from './components/home/homeGrid/homeGridView'
import Header from './components/home/header/header'
import Login from "./components/login/main";
import About from "./components/home/pages/about"
import PageNotFound from "./components/home/pages/pageNotFound";
import EventView from "./components/home/event/eventView";
import Birthday from "./components/home/birthday/birthday";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import CreateEvent from "./components/home/event/createEvent";
import DetailedEventView from "./components/home/event/detailedEvent/detailedEventView";

function App() {

    return (
        <>
            {/*<Login></Login>*/}
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomeGridView}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/event" component={EventView}/>
                    <Route exact path="/event/create" component={CreateEvent}/>
                    <Route exact path="/event/:id" component={DetailedEventView}/>
                    <Route exact path="/birthday" component={Birthday}/>
                    <Route  component={PageNotFound}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
