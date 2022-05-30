import "./index.css"
import Register from "./components/Register"
import Login from "./components/Login"
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
