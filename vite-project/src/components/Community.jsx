import bts from "../assets/three/bts.png";
import svt from "../assets/three/svt.jpeg"
import btslogo from "../assets/logo/btslogo.jpeg";
import svtlogo from "../assets/logo/svtlogo.jpeg";
import "../css/Community.css"


const arr = [
    { chimg: bts, himg: btslogo, hnu: "first", name: "BTS" },
    { chimg: svt, himg: svtlogo, hnu: "second", name: "SEVENTEEN" },]

function Community() {
    return (
        <>
            <h2 className="hh">My communities</h2>
            <div id="mainthr">

                {arr.map((item, index) => (
                    <div key={index} className="til">
                        {/* Main big image */}
                        <img className="chimg" src={item.chimg} alt={item.name} />

                        {/* Circular logo (reusing same image) */}
                        <div className="logo-wra">
                            <img className="logo" src={item.himg} alt={`${item.name} logo`} />
                        </div>


                        <p className="para2">{item.name}</p>
                    </div>
                ))}
            </div></>
    );
}
export default Community;