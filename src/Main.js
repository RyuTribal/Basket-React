import React, { Component } from "react";
import { Route, NavLink, HashRouter, Redirect } from "react-router-dom";
import Home from "./Home";
import Video from "./Video";
import Account from "./Account";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import $ from 'jquery';

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div id="wrapper">
          <SideNav
            onSelect={selected => {
              if(selected == "home"){
              }
              else if(selected == "watch"){
              }
              else if(selected == "account"){
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem id="home" eventKey="home">
                <NavIcon>
                  <i
                    className="fa fa-fw fa-home"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>Home</NavText>
                <NavLink id="home" to="/"></NavLink>
              </NavItem>
              <NavItem id="watch" eventKey="watch">
                <NavIcon>
                  <i
                    className="fas fa-film"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>Videos</NavText>
                <NavLink to="/watch"></NavLink>
              </NavItem>
              <NavItem id="account" eventKey="account">
                <NavIcon>
                  <i
                    className="fas fa-user"
                    style={{ fontSize: "1.75em" }}
                  />
                </NavIcon>
                <NavText>Account</NavText>
                <NavLink to="/account"></NavLink>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main className="content">
            <Route exact path="/" component={Home} />
            <Route path="/watch" component={Video} />
            <Route path="/account" component={Account} />
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
