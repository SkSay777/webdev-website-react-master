import React from "react"
import Navbar from "../components/Navbar";
import { SidebarData } from "../components/SlidebarData";

function Javascript() {
  return <>
    <Navbar data={SidebarData} />

    <div className="main-container">
      <div className="video-gallery-container">


        <div className="video-gallery" style={{ marginTop: "40px" }}>
          <div className="featured-video">
            <div className="header video-title onlyonevideo">

              JavaScript Crash Course

            </div>
            <div className="video-container">
              <div className="responsive-iframe ">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hdI2bqOjy3c?rel=0"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div> </>;
};

export default Javascript;
