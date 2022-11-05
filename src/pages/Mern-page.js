import React from "react";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion-Mern"
import { SidebarData2 } from "../components/SlidebarData";

function MernPage() {

  return <> <Navbar data={SidebarData2} title="Documentation" /> 
  <div className="accordion-container">
  <Accordion  />
  </div>
  </>
}

export default MernPage;
