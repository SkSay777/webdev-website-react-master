import "./Accordion.css";
import React, { useState } from "react";
import MernData from "../pages/data/mern";

function Accordion() {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {MernData.map((item, i) => (
          <>
            <div
              className={
                selected === i
                  ? "accordionItemHeading open"
                  : "accordionItemHeading"
              }
              onClick={() => toggle(i)}
            >
              
              <h2>{item.name}</h2>
              <span>{selected === i ? "▲" : "▼"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <img className="content-inside-images" src={item.img} alt="" />
            <div class="accordionItemContent">
            <ul className="accordion-content">
                {item.meaning}
                <li className="textWrapper-list">
                  <a className="list-decoration" href={item.href1}>
                    {item.list1}
                  </a>
                </li>
                <li className="textWrapper-list">
                  <a className="list-decoration" href={item.href1}>
                    {item.list2}
                  </a>
                </li>
                <li className="textWrapper-list">
                  <a class="list-decoration" href={item.href1}>
                    {item.list3}
                  </a>
                </li>
                <li className="textWrapper-list">
                  <a className="list-decoration" href={item.href1}>
                    {item.list4}
                  </a>
                </li>
                <li className="textWrapper-list">
                  <a className="list-decoration" href={item.href1}>
                    {item.list5}
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
