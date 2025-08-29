import "../css/User.css";

function User() {
    return (<>
        <div id="first">
            <div id="hul">
                <h2 className="username">savi thv</h2>
                <ul>
                    <li>Notices</li>
                    <li>Account Settings</li>
                    <li>Enter Digital Code</li>
                </ul>
            </div>
            <p className="email">svt****@gmail.com</p>
            <p className="logout">Log out</p>
        </div>

        {/* Main Content */}
        <div id="settings-content">
            {/* Left Side */}
            <div className="left-panel">
                <div className="balance-card">
                    <span className="coin">🪙 0</span>
                    <button className="charge-btn">Charge</button>
                </div>

                <div className="option-card">Order History </div>
                <div className="option-card">Coupon Box </div>

                {/* New Extra Links */}
                <div className="extra-links">
                    <div className="extra-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="magazine" />
                        <span>Weverse Magazine</span>
                    </div>
                    <div className="extra-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/61/61456.png" alt="concerts" />
                        <span>Weverse Concerts</span>
                    </div>
                    <div className="extra-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="survey" />
                        <span>Weverse Survey</span>
                    </div>
                    <div className="extra-card">
                        <img src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png" alt="game" />
                        <span>BTS Island: In the SEOM</span>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="right-panel">
                <h3>Purchased Media</h3>
                <div className="tabs">
                    <button className="active">Paid Content</button>
                    <button>Digital code</button>
                </div>

                <div className="history-box">
                    <p>No history yet!</p>
                </div>
            </div>
        </div>
    </>
    );
}
export default User;