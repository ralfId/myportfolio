import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Home } from "../components/Home";
import { Nav } from "../components/Nav";
import { ProjectIndex } from "../components/Projects/ProjectIndex";
import {ProjectDetail} from "../components/Projects/ProjectDetail"
import { Footer } from "../components/Footer";
import { About }from '../components/About';


export const AppRouter = () => {
    return (
        <Router>
            <Nav />
            <div id="main" className="min-vh-100">
                <Switch>
                    <Route exact path="/index" component={Home} />
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/portfolio" component={ProjectIndex} />
                    <Route exact path="/item/:Id" component={ProjectDetail} />
                    <Redirect to="/index" />
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}
