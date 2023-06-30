import React from "react"

import ProgressPage from "./Components/ProgressPage";

import {Routes,Route} from "react-router-dom";
import "./App.css";

import FetchPage from "./Components/FetchPage";

const App = ()=>{
  return(
    <div>
      <Routes>
      <Route path="/" element= {<ProgressPage/>} />
      <Route path="/Fetch" element={<FetchPage/>} />  
      

      </Routes>
    </div>
  )
}

export default App