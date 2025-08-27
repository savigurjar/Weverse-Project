import React from "react";
import "../css/Mainth.css";


import minzy from "../assets/three/minzy.png";
import lesserafim from "../assets/three/lesserafim.png";
import kimjunsu from "../assets/three/kimjunsu.jpeg";
import jenni from "../assets/three/jenni.png";
import irese from "../assets/three/irese.png";
import idle from "../assets/three/idle.jpeg";
import hyolyn from "../assets/three/hyolyn.png";
import hebi from "../assets/three/hebi.png";
import fits from "../assets/three/fits.jpeg";
import exo from "../assets/three/exo.jpg";
import enhypen from "../assets/three/enhypen.jpeg";
import dxmon from "../assets/three/dxmon.png";
import dazebi from "../assets/three/dazebi.png";
import cnblue from "../assets/three/cnblue.png";
import blackpink from "../assets/three/blackpink.jpeg";
import classy from "../assets/three/classy.jpeg";
import bts from "../assets/three/bts.png";
import boynext from "../assets/three/boynext.jpeg";
import billi from "../assets/three/billi.png";
import bigbang from "../assets/three/bigbang.png";
import Ateam from "../assets/three/Ateam.jpeg";
import arrc from "../assets/three/arrc.png";
import arin from "../assets/three/arin.jpg";
import ariana from "../assets/three/ariana.png";
import aespa from "../assets/three/aespa.jpeg";
import wooah from "../assets/three/wooah.jpeg";
import winner from "../assets/three/winner.png";
import whee from "../assets/three/whee.jpeg";
import weverse from "../assets/three/weverse.png";
import zico from "../assets/three/zico.png";
import svt from "../assets/three/svt.jpeg"
import nct from "../assets/three/nct.jpeg"


const arr = [
    { timg: bts, tnu: "first", name: "BTS" },
    { timg: svt, tnu: "second", name: "SEVENTEEN" },
    { timg: blackpink, tnu: "third", name: "BLACKPINK" },


    { timg: minzy, tnu: "fourth", name: "Minzy" },
    { timg: lesserafim, tnu: "fifth", name: "Lesserafim" },
    { timg: kimjunsu, tnu: "sixth", name: "Kim Junsu" },
    { timg: jenni, tnu: "seventh", name: "Jenni" },
    { timg: irese, tnu: "eighth", name: "Irese" },
    { timg: idle, tnu: "ninth", name: "(G)I-DLE" },
    { timg: hyolyn, tnu: "tenth", name: "Hyolyn" },
    { timg: hebi, tnu: "eleventh", name: "Hebi" },
    { timg: fits, tnu: "twelfth", name: "FITS" },
    { timg: exo, tnu: "thirteenth", name: "EXO" },
    { timg: enhypen, tnu: "fourteenth", name: "ENHYPEN" },
    { timg: dxmon, tnu: "fifteenth", name: "Dxmon" },
    { timg: dazebi, tnu: "sixteenth", name: "Dazebi" },
    { timg: cnblue, tnu: "seventeenth", name: "CNBLUE" },
    { timg: classy, tnu: "eighteenth", name: "Classy" },
    { timg: boynext, tnu: "nineteenth", name: "Boynext" },
    { timg: billi, tnu: "twentieth", name: "Billlie" },
    { timg: bigbang, tnu: "twentyFirst", name: "BIGBANG" },
    { timg: Ateam, tnu: "twentySecond", name: "Ateam" },
    { timg: arrc, tnu: "twentyThird", name: "ARRC" },
    { timg: arin, tnu: "twentyFourth", name: "Arin" },
    { timg: ariana, tnu: "twentyFifth", name: "Ariana" },
    { timg: aespa, tnu: "twentySixth", name: "Aespa" },
    { timg: wooah, tnu: "twentySeventh", name: "Woo!ah" },
    { timg: winner, tnu: "twentyEighth", name: "Winner" },
    { timg: whee, tnu: "twentyNinth", name: "Whee In" },
    { timg: weverse, tnu: "thirtieth", name: "Weverse" },
    { timg: zico, tnu: "thirtyFirst", name: "Zico" },
    { timg: nct, tnu: "thirtySecond", name: "NCT" },
];


function Mainth() {
    return (
        <>
            <h2 className="hh">Looking for new artists?</h2>
            <div id="mainthree">

                {arr.map((item, index) => (
                    <div key={index} className="tile">
                        {/* Main big image */}
                        <img className="timg" src={item.timg} alt={item.name} />

                        {/* Circular logo (reusing same image) */}
                        <div className="logo-wrap">
                            <img className="logo" src={item.timg} alt={`${item.name} logo`} />
                        </div>


                        <p className="para2">{item.name}</p>
                    </div>
                ))}
            </div></>
    );
}

export default Mainth;