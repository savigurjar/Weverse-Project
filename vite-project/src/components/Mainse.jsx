import React, { useRef } from "react";
import "../css/Mainse.css";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";


const arr = [
  { cimg: nine, cnu: "nine", name: "BTS", link: "https://weverse.io/bts/media" },
  { cimg: second, cnu: "second", name: "SEVENTEEN", link: "https://weverse.io/seventeen/media" },
  { cimg: eight, cnu: "eight", name: "HANNIE", link: "https://weverse.io/seventeen/media/new" },
  { cimg: seven, cnu: "seven", name: "SEVENTEEN HOSHI" },
  { cimg: sixth, cnu: "sixth", name: "BTS JIN" },
  { cimg: fifth, cnu: "fifth", name: "ASTRO" },
  { cimg: fourth, cnu: "fourth", name: "TEAM WANG" },
  { cimg: third, cnu: "third", name: "NCT" },
  { cimg: second, cnu: "second", name: "SEVENTEEN" },
  { cimg: first, cnu: "first", name: "ITZY" },
];

function Mainse() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
  };

  return (
    <>
      <div className="mainse-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>&#10094;</button>

        <div id="section" ref={scrollRef}>
          {arr.map((item, index) => (
            <a
              href={item.link || "#"}
              key={index}
              className="alink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="cimg" src={item.cimg} alt={item.cnu} />
              <p className="para">{item.name}</p>
            </a>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>&#10095;</button>
      </div>


 







    </>
  );
}

export default Mainse;
