import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Library from "./components/Library"
import About from "./components/About"
import './App.css'
import Item from "./components/Library/Items/Item";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/item" element={<Item />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
