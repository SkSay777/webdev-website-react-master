import React from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion-Back"
import { SidebarData2 } from "../components/SlidebarData";

function BackPage() {

  return <> <Navbar data={SidebarData2} title="Documentation" /> 
  <div className="accordion-container">
  <Accordion  />
  </div>
  </>
}

export default BackPage;
