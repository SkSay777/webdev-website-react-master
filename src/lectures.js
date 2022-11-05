import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Html from "./pages/html";
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Bootstrap from "./pages/bootstrap";
import Javascript from "./pages/javascript";
import Node from "./pages/node";
import MyReact from "./pages/react";
import MyRedux from "./pages/redux";
import frontpage from "./pages/Frontend-page";
import backpage from "./pages/Backend-page";
import mernpage from "./pages/Mern-page";
import howtopage from "./pages/HowTo";
import "./styles.css";

function Lectures() {
    return <Router>

        <Switch>
            <Route path='/' exact component={Html} />
            <Route path='/project1' component={Project1} />
            <Route path='/javascript' component={Javascript} />
            <Route path='/bootstrap' component={Bootstrap} />
            <Route path='/project2' component={Project2} />
            <Route path='/react' component={MyReact} />
            <Route path='/redux' component={MyRedux} />
            <Route path='/node' component={Node} />
            <Route path='/project3' component={Project3} />
            <Route path='/frontpage' component={frontpage} />
            <Route path='/backpage' component={backpage} />
            <Route path='/mernpage' component={mernpage} />
            <Route path='/howto' component={howtopage} />
        </Switch>
    </Router>
}

export default Lectures;