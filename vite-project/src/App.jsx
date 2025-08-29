import "./App.css";
import Header from "./components/Header.jsx";
import All from "./All";
import Settings from "./components/Settings.jsx";
import User from "./components/User.jsx";
// import Alarm from "./components/Alarm.jsx";
// import Search from "./components/Search.jsx";

import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/user" element={<User />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </BrowserRouter>


    </>
  );
}

export default App;
