import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";
import Home from "./views/Home";
import Forum from "./views/Forum";
import Account from "./views/Account";
import Error404 from "./views/Error404";
import Nav from "./Nav";
import $ from "jquery";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route
            render={({ location }) => {
              const { pathname, key } = location;

              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 750, exit: 150 }}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/forum" component={Forum} />
                      <Route path="/account" component={Account} />
                      <Route component={Error404} />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              );
            }}
          />
        </div>
        <Nav />
      </BrowserRouter>
    );
  }
}

export default Main;
