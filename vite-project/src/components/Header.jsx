import { Link } from "react-router";
import searchIcon from "../assets/search.png";
import alarmIcon from "../assets/alarm.png";
import settingsIcon from "../assets/settings.png";
import userIcon from "../assets/user.png";
import "../css/Header.css"

function Header() {
  return (
    <div id="header">
     <div>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1>Weverse</h1>
        </Link>
      </div>
      <div className="dv">
        <ul>
          <li>
            <Link to="/search">
              <img src={searchIcon} alt="search" />
            </Link>
          </li>
          <li>
            <Link to="/alarm">
              <img src={alarmIcon} alt="alarm" />
            </Link>
          </li>
          <li>
            <Link to="/user">
              <img src={userIcon} alt="user" />
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <img src={settingsIcon} alt="settings" />
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
