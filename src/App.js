import "./index.css"
import Register from "./components/Register"
import Login from "./components/Login"
import Navbar from "./components/navbar/Navbar"
import Stocks from './components/trader/Stocks'
import Portfolio from './components/trader/Portfolio'
import Transactions from './components/trader/Transactions'
import Create from './components/admin/Create'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Create />
    </Router>
  );
}

export default App;
