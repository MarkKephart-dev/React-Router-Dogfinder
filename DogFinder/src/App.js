import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./NavBar";
import DogList from "./DogList";
import DogDetail from "./DogDetail";
import dogs from "./dogData";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar dogs={dogs} />
        <Routes>
          <Route path='/dogs' element={<DogList dogs={dogs} />} />
          <Route path='/dogs/:name' element={<DogDetail />} />
          <Route path='*' element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
