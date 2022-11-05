import React from "react";
import "../pages.css";
import select from "./videoselector";
import Navbar from "../components/Navbar";

import { nodedata } from "../videolinkdata";





function Node() {

  function createlist(Dataone) {
    return (

      <div onMouseOver={select} className="video ">
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
        <h2 className="title"> Full NodeJs crash course</h2>
        <div className="video-gallery">
          <div className="featured-video">
            <div className=" header video-title"> Introduction</div>
            <div className="video-container">
              <div className="responsive-iframe">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fupTFbQv3MQ?rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="all-videos-container">
            <div className="header">All Videos</div>
            <div className="all-videos">
              <div onMouseEnter={select} className="video active ">
                <div
                  className="thumbnail "
                  data-id="fupTFbQv3MQ"
                  data-title="Introduction to  backend"
                >
                  Introduction to backend
                </div>
              </div>
              {nodedata.map(createlist)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
};

export default Node;
