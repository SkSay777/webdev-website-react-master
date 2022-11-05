import React from "react";
import { AiFillHtml5,AiOutlineBell,AiOutlinePieChart } from "react-icons/ai";
import { MdAssignment, MdAssignmentTurnedIn } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { BsBarChart } from "react-icons/bs";
import { FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";



 const SidebarData = [

  {
    path: "/",
    title: "html",
    icon: <AiFillHtml5 />,
    cName: 'nav-text'
  },
  {
    path: "/project1",
    title: "project1",
    icon: <MdAssignment />,
    cName: 'nav-text'
  },
  {
    path: "/javascript",
    title: "javascript",
    icon: <IoLogoJavascript />,
    cName: 'nav-text'
  },

  {
    path: "/bootstrap",
    title: "bootstrap",
    icon: <FaBootstrap />,
    cName: 'nav-text'
  },
  {
    path: "/project2",
    title: "project2",
    icon: <MdAssignment />,
    cName: 'nav-text'
  }
  ,
  {
    path: "/react",
    title: "react",
    icon: <FaReact />,
    cName: 'nav-text'
  }
  ,
  {
    path: "/redux",
    title: "redux",
    icon: <SiRedux />,
    cName: 'nav-text'
  }
  ,
  {
    path: "/node",
    title: "node",
    icon: <FaNodeJs />,
    cName: 'nav-text'
  }
  ,
  {
    path: "/project3",
    title: "project3",
    icon: <MdAssignmentTurnedIn />,
    cName: 'nav-text'
  }
];
const SidebarData2 = [
  {
    path: "/howto",
    title: "How to begin?",
    icon: <AiOutlineBell />,
    cName: 'nav-text'
  },
  {
    path: "/frontpage",
    title: "Frontend Guide",
    icon: <BsBarChart />,
    cName: 'nav-text'
  },
  
  {
    path: "/backpage",
    title: "Backend Guide",
    icon: <IoLogoJavascript />,
    cName: 'nav-text'
  },
  
  {
    path: "/mernpage",
    title: "Online Resources and Help",
    icon: <AiOutlinePieChart />,
    cName: 'nav-text'
  }
  
];
export {SidebarData,SidebarData2};