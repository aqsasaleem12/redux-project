import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./counter/counter";
import Modal from "./modal/modal";
import Create from "./create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
