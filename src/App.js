import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomeGridView} from './components/home/homeGrid/homeGridView'
import Header from './components/home/header/header'
import Login from "./components/login/main";
import About from "./components/home/pages/about"
import PageNotFound from "./components/home/pages/pageNotFound"

function App() {

    return (
        <>
            {/*<Login></Login>*/}
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomeGridView}/>
                    <Route exact path="/about" component={About}/>
                    <Route  component={PageNotFound}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
