import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {HomeGridView} from './components/home/homeGrid/homeGridView'
import Header from './components/home/header/header'
import Login from "./components/login/main";
function App() {

    return (
        <>
            {/*<Login></Login>*/}
            <Router>
                <Header/>
            </Router>
            <HomeGridView/>
        </>
    );
}

export default App;
