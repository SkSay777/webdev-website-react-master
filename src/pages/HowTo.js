import React from "react";
import "./HowTo.css"
import Navbar from "../components/Navbar";
import { SidebarData2 } from "../components/SlidebarData";

function howto() {

    return <> 
    <Navbar data={SidebarData2} title="Documentation" />


            <div className="contents">
                <div className="content-heading-1"><h1>MERN Stack Web Development Guide</h1></div>
                <img className="content-inside-images" src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png" alt="HTML" />
                <img className="content-inside-images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXQ6aMdHX5vRYnRSyo9OdagU1D2Fhx_t4nsARH1geBtpa7CI&s" alt="JS"/>
                <img className="content-inside-images" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" />
                <img className="content-inside-images" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node" />
                <img className="content-inside-images" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                <img className="content-inside-images" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Redux" />

                <div className="content-inside-1">
                    <ul className="content-lists"><h4>**Pre-requisites**</h4>
                        <li className="content-list">Good understanding of core programming concepts.</li>
                        <li className="content-list"> Comfortable with basic command line actions and familiarity with source code version control systems such as Git.</li>
                    </ul>
                </div>

                <div className="content-heading-2">
                    <h1>How to begin</h1>
                </div>

                <div className="content-inside-2">
                    <li>Choose a Code Editor</li>
                    <li>One can do Web Development on any code editor be it Visual Studio, Atom, Sublime etc.</li>
                    <li>It is recommended to use Visual Studio Code, the setup for the same can be found <a className="content-link" href="https://code.visualstudio.com/docs/languages/html">here</a>.</li>
                </div>
            </div>
    </>
}

export default howto;