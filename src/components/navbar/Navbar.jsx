import { useState } from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements'

const Navbar = () => {
  const [role, setRole] = useState("admin");

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        {role != 'admin'? <NavMenu>
          <NavLink to="/Stocks" activeStyle>
            Stocks
          </NavLink>
          <NavLink to="/Portfolio" activeStyle>
            Portfolio
          </NavLink>
          <NavLink to="/Transactions" activeStyle>
            Transactions
          </NavLink>
        </NavMenu>
        :
        <NavMenu>
          <NavLink to="/pending" activeStyle>
            Pending
          </NavLink>
          <NavLink to="/traders" activeStyle>
            Traders
          </NavLink>
        </NavMenu>
        }
        <NavBtn>
          <NavBtnLink to='/logout'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
