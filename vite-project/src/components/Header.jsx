import React from "react";
 import "../css/Header.css";

import searchIcon from "../assets/search.png";
import alarmIcon from "../assets/alarm.png";
import settingsIcon from "../assets/settings.png";
import userIcon from "../assets/user.png";


function Header() {
  return (
    <div id="header">
      <div><h1>Weverse</h1></div>
      <div className="dv">
        <ul>
          <li><img src={searchIcon} alt="search" /></li>
          <li><img src={alarmIcon} alt="alarm" /></li>
          <li><img src={settingsIcon} alt="settings" /></li>
          <li><img src={userIcon} alt="user" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
