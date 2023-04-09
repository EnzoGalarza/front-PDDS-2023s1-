import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './components/Users'
import Navbar from "./components/Navbar";
import 'bootswatch/dist/lux/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-2">
        <Routes>
          <Route path="/" element={<Users/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
