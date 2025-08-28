import "./App.css";
import Header from "./components/Header.jsx";
import Mainse from "./components/Mainse.jsx";
import Mainto from "./components/Mainto.jsx";
import Mainth from "./components/Mainth.jsx";
import Community from "./components/Community.jsx";
import Merch from "./components/Merch.jsx"
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Community/>
        <Merch/>
        <Mainse />
        <Mainto />
        < Mainth />
        <Routes>
          {/* <Route path="/" element={<Mainse />} />
          <Route path="/" element={<Mainto />} />
          <Route path="/" element={<Mainth />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
