import "./index.css"
import Register from "./components/Register"
import { useState } from "react";
import Login from "./components/Login"
import Navbar from "./components/navbar/Navbar"
import Stocks from './components/trader/Stocks'
import Portfolio from './components/trader/Portfolio'
import Transactions from './components/trader/Transactions'
import Create from './components/admin/Create'
import Pending from './components/admin/Pending'
import Traders from './components/admin/Traders'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [loggedUser, setLoggedUser] = useState("d");
  const [role, setRole] = useState("admin");
  return (
    <Router>
      {loggedUser != "" && <Navbar />}
      <Routes>
        <Route
         path="/login"
         element={
           <Login />
         }
         />
         <Route
         path="/signup"
         element={
           <Register />
         }
         />
         <Route
         path="/portfolio"
         element={
           <Portfolio />
         }
         />
         <Route
         path="/stocks"
         element={
           <Stocks />
         }
         />
         <Route
         path="/transactions"
         element={
           <Transactions />
         }
         />
         {role == 'admin' && <Route
         path="/pending"
         element={
           <Pending />
         }
         />}
         {role == 'admin' && <Route
         path="/traders"
         element={
           <Traders />
         }
         />}
      </Routes>
    </Router>
  );
}

export default App;
