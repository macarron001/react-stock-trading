import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
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
        <NavBtn>
          <NavBtnLink to='/logout'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
