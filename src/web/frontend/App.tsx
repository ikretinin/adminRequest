import {Layout} from "./Layout";
import {Route, Switch} from "react-router";
import {Home} from "./Home";
import {Counter} from "./Counter";
import React, {Component} from "react";
import { Form } from "./Form";
import {Request} from "./Request";


export default class App extends Component {
    displayName = App.name;

    render() {
        return (
            <div>
                <Switch>
                    <Layout>
                        <Route exact path='/' component={Home} />
                        <Route path='/counter' component={Counter} />
                        <Route path='/form' component={Form} />
                        <Route path='/request' component={Request} />
                    </Layout>
                </Switch>
            </div>
        );
    }
}


