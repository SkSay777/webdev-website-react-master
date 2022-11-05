import React from "react";
import "../pages.css";
import select from "./videoselector";
import Navbar from "../components/Navbar";
import { SidebarData } from "../components/SlidebarData";

import { Htmldata } from "../videolinkdata";

export default function Html() {




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


  return (
    <><Navbar data={SidebarData} />
      <div className="main-container">
        <div className="video-gallery-container">
          <h2 className="title"> HTML and CSS crash course</h2>
          <div className="video-gallery">
            <div className="featured-video">
              <div className=" header video-title"> Introduction</div>
              <div className="video-container">
                <div className="responsive-iframe">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/hu-q2zYwEYs?rel=0"
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
                    data-id="hu-q2zYwEYs"
                    data-title="Introduction"
                  >
                    Introduction
                  </div>
                </div>
                {Htmldata.map(createlist)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
