import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import Header from './Header'
import Navbar from './Navbar'
import Cliente from './Cliente'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={Login} />
                <div className="container">
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                    <div>
                        <Switch>
                            <Route exact path="/cliente" component={Cliente} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))