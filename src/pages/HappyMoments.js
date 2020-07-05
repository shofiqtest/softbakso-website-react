import React, { Component } from "react";
import photo1 from "../assets/images/HappyMoments/photo1.png";
import photo2 from "../assets/images/HappyMoments/photo2.png";
import photo4 from "../assets/images/HappyMoments/photo4.png";
import photo3 from "../assets/images/HappyMoments/photo3.png";
import photo5 from "../assets/images/HappyMoments/photo5.png";

export default class HappyMoments extends Component {
  render() {
    return (
      <div className="momentDiv">
        <p className="galleryFont">Happy Moments</p>
        <hr className="hrTag" />
        <div className="row photoDiv">
          <div
            className="
                    col-lg-6
                    col-md-5
                    col-sm-10
                    col-xs-12
                    padImage"
          >
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 padImage cont1">
                <img src={photo2} className="photoLeft" alt="" />
                <div className="overlay">Meeting</div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 padImage cont2">
                <img src={photo4} className="photoLeft" alt="" />
                <div className="overlay">Outing</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 padImage cont3">
                <img src={photo5} className="photoLeft" alt="" />
                <div className="overlay">Signing</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padImage cont4">
                <img src={photo3} className="photoLeft" alt="" />
                <div className="overlay">Talk Js</div>
              </div>
            </div>
          </div>
          <div
            className="
                    col-lg-3
                    col-md-3
                    col-sm-6
                    col-xs-12
                    container
                    padImage cont5"
          >
            <img src={photo1} className="photoRight" alt="" />
            <div className="overlay">Softbakso</div>
            {/*<div className="bottomRight">*/}
            {/*<p className="discoverText">discover More</p>*/}
            {/*<div className="list-inline moreContact">*/}

            {/*<a href="#"*/}
            {/*className="icon-block-happyMoments" style={{*/}
            {/*color: '#000000',*/}
            {/*boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'*/}

            {/*}}*/}
            {/*>*/}
            {/*<i className="fab fa-instagram moreImage"></i>*/}

            {/*</a>*/}
            {/*<a href="#"*/}
            {/*className="icon-block-happyMoments"*/}
            {/*style={{*/}
            {/*color: '#000000',*/}
            {/*boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'*/}
            {/*}}*/}
            {/*>*/}
            {/*<i className="fab fa-flickr moreImage"></i>*/}

            {/*</a>*/}

            {/*</div>*/}
            {/*</div>*/}
          </div>
          <div
            className="
                    col-lg-3
                    col-md-3
                    col-sm-6
                    col-xs-12
                    container
                    padImage cont5"
          >
            <img src={photo1} className="photoRight" alt="" />
            <div className="overlay">Softbakso</div>
            <div className="bottomRight">
              <p className="discoverText">discover More</p>
              <div className="list-inline moreContact">
                <a
                  href="#"
                  className="icon-block-happyMoments"
                  style={{
                    color: "#000000",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <i className="fab fa-instagram moreImage"></i>
                </a>
                <a
                  href="#"
                  className="icon-block-happyMoments"
                  style={{
                    color: "#000000",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <i className="fab fa-flickr moreImage"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
