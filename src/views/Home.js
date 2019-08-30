import React, { Component } from "react";
import { loadAll } from "../js/home.js";
import $ from "jquery";

class Home extends Component {
  componentDidMount() {
    $('.loader').css("display", "flex");
    loadAll();
  }
  render() {
    return (
      <section>
        <div className="grid-container">
          <div className="row">
            <div className="level-one col-xs-12 col-sm-12 col-md-12 col-lg-12 img-grid">
              <figure className="img-container">
                <img className="group-thumb" id="me-and-ball"></img>
                <figcaption className="title-container">
                  <h5 className="group-title"></h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
