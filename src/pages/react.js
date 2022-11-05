import React from "react"
import "../pages.css";
import select from "./videoselector";
import { Reactdata } from "../videolinkdata";
import Navbar from "../components/Navbar";

function MyReact() {
  function createlist(Dataone) {
    return (<div onMouseOver={select} className="video ">
      <div
        className="thumbnail"
        data-id={Dataone.dataid}
        data-title={Dataone.datatitle}
      >
        {Dataone.datatitle}
      </div>
    </div>)

  }


  return <>
    <Navbar />

    <div className="main-container">
      <div className="video-gallery-container">
        <h2 className="title"> Full ReactJs crash course</h2>
        <div className="video-gallery">
          <div className="featured-video">
            <div className=" header video-title"> Introduction</div>
            <div className="video-container">
              <div className="responsive-iframe">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/j942wKiXFu8?rel=0"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="all-videos-container">
            <div className="header">All Videos</div>
            <div className="all-videos">
              <div onMouseEnter={select} className="video active ">
                <div
                  className="thumbnail "
                  data-id="j942wKiXFu8"
                  data-title="Introduction"
                >
                  Introduction
                </div>
              </div>
              {Reactdata.map(createlist)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default MyReact;
