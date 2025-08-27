import React, { useRef } from "react";
import "../css/Mainto.css";
import dm from "../assets/dm.png";
import AhnHyoSeop from "../assets/AhnHyoSeop.jpeg"
import AndTeam from "../assets/AndTeam.jpeg"
import Classy from "../assets/Classy.jpeg"
import Kateseye from "../assets/Kateseye.jpeg"
import Lesserafim from "../assets/Lesserafim.png"
import Tnx from "../assets/Tnx.jpeg"
import txt from "../assets/txt.jpeg"
import unios from "../assets/unios.jpeg"
import Chuu from "../assets/Chuu.jpeg"
import Dxmon from "../assets/Dxmon.jpg"
import Illit from "../assets/Illit.jpeg"
import Irese from "../assets/Irese.png"
import Munkayoung from "../assets/Munkayoung.jpg"
import Whib from "../assets/Whib.jpeg"
import Wooseok from "../assets/Wooseok.jpeg"



const arrr = [
    { dimg: AndTeam, dnu: "first", name: "&Team" },
    { dimg: Classy, dnu: "second", name: "Class:y" },
    { dimg: Kateseye, dnu: "third", name: "Kateseye" },
    { dimg: Lesserafim, dnu: "fourth", name: "Lesserafim" },
    { dimg: Tnx, dnu: "fifth", name: "Tnx" },
    { dimg: txt, dnu: "sixth", name: "txt" },
    { dimg: unios, dnu: "seventh", name: "unis" },
    { dimg: Chuu, dnu: "eighth", name: "Chuu" },
    { dimg: Dxmon, dnu: "ninth", name: "Dxmon" },
    { dimg: Illit, dnu: "tenth", name: "Illit" },
    { dimg: Irese, dnu: "eleventh", name: "Irese" },
    { dimg: Munkayoung, dnu: "twelfth", name: "Mun ka young" },
    { dimg: Whib, dnu: "thirteenth", name: "Whib" },
    { dimg: Wooseok, dnu: "fourteenth", name: "Wooseok" },
    { dimg: AhnHyoSeop, dnu: "fifteenth", name: "Ahn Hyo Seop" },
];

function Mainto() {
    const scrollRef = useRef(null);
    return (
        <>


            {/* second page */}

            <div id="mainsecond">
                <div id="headline">
                    <img src={dm} alt="DM Icon" />
                    <h2>DM with your Artist!</h2>
                </div>
                <div id="scroll-wrapp">
                    <button className=" scroll-bt left" onClick={() => scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' })}>&#10094;</button>
                    <div id="box" ref={scrollRef}>
                        <div className="boxes">
                            {
                                arrr.map((item, index) => (
                                    <div key={index}>
                                        <img className="dimg" src={item.dimg} alt={item.dnu} />
                                        <p className="para1">{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button className=" scroll-bt right" onClick={() => scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })}>&#10095;</button>
                </div>
            </div>
        </>
    )
}
export default Mainto;