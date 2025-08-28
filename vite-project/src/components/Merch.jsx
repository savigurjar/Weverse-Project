import { useState } from "react";
import "../css/Merch.css"; // import css
import armymem from "../assets/merch/armymem.png";
import facekeybts from "../assets/merch/facekeybts.png";
import jpalbum from "../assets/merch/jpalbum.png";
import keysvt from "../assets/merch/keysvt.png";
import musebts from "../assets/merch/musebts.png";
import svtmerch from "../assets/merch/svtmerch.png";
import toysvt from "../assets/merch/toysvt.png";
import carat from "../assets/merch/carat.png";

const arr = [
  { id: 1, category: "BTS", ming: armymem, price: 19.67, name: "Army Membership" },
  { id: 2, category: "BTS", ming: facekeybts, price: 17.31, name: "Face Keyring" },
  { id: 3, category: "BTS", ming: jpalbum, price: 42.90, name: "BTS JAPAN OFFICIAL FANCLUB" },
  { id: 4, category: "BTS", ming: musebts, price: 40.84, name: "MUSE (LP)" },

  { id: 5, category: "SEVENTEEN", ming: keysvt, price: 19.67, name: "Face Plush Keyring" },
  { id: 6, category: "SEVENTEEN", ming: svtmerch, price: 38.56, name: "Official Light Stick VER.3 10th Anniv" },
  { id: 7, category: "SEVENTEEN", ming: toysvt, price: 22.67, name: "Pouch" },
  { id: 8, category: "SEVENTEEN", ming: carat, price: 19.67, name: "CARAT MEMBERSHIP" }
];

const categories = ["All", "SEVENTEEN", "BTS"];

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? arr
      : arr.filter((item) => item.category === selectedCategory);

  return (
    <div className="merch-container">
      <h1 className="merch-title">Merch</h1>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="merch-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="merch-card">
            <img src={item.ming} alt={item.name} className="merch-img" />
            <h2 className="merch-name">{item.name}</h2>
            <p className="merch-price">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
