import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import './App.css';


function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);


  return (
    <div className="root">
      <div className="page">
        <div className=""></div>{/* input */}
        <div className=""></div>{/* flex */}


      </div>
    </div>
  );
}

export default App;
