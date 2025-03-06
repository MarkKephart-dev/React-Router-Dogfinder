import './App.css'
import { BrowserRouter, Routes, Route, Navigate, redirect } from 'react-router-dom'
import { useState } from 'react';
import ColorDetail from './ColorDetail';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';

function App() {
  const [colors, setColors] = useState([
    { color: "Red", value: "#FF0000" },
    { color: "Green", value: "#00FF00" },
    { color: "Blue", value: "#0000FF" }
  ]);

  const addColor = ({color, value}) => {
    setColors([ { color, value}, ...colors ]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/colors' element={<ColorList colors={colors} />} />
          <Route path='/colors/:color' element={<ColorDetail colors={colors}/>} />
          <Route path='/colors/new' element={<NewColorForm addColor={addColor}/>} />
          <Route path='*' element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
