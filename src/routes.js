import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import classList from './components/ClassList/ClassList';
import Student from './components/Student/Student';


export default (
    <div>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/classlist/:class" component={classList}></Route>
            <Route path="/student/:id" component={Student}></Route>
            <Route component={NotFound} />
        </Switch>
    </div>
)

function NotFound() {
    return(
        <h1>404 Page Not Found</h1>
    )
}