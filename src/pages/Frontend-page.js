import React from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion-Front"
import { SidebarData2 } from "../components/SlidebarData";

function FrontPage() {

  return <> <Navbar data={SidebarData2} title="Documentation" /> 
  <div className="accordion-container">
  <Accordion  />
  </div>
  </>
}

export default FrontPage;
