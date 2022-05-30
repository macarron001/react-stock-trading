import React from 'react'
import { useForm } from "react-hook-form";

const Register = () => {
  return (
    <div className='wrapper'>
      <header>
        <div></div>
        <div className='center-column'>
          <h1>LOGO</h1>
        </div>
        <div className='right-column'></div>
      </header>
      <div className="main-register">
        <div className="sub-header-register">
          <h1>Let's set you up with an account first!</h1>
          <div>
            {/* <p>
              We suggest using the{" "}
              <strong>email address you use at work.</strong>
            </p> */}
          </div>
        </div>
        <div className="form-container-register">
          <form>
            <div>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="email"
              ></input>
              <span></span>
              <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="password"
              ></input>
              <span></span>
              <input
                required
                type="password"
                id="confirmedPassword"
                name="confirmedPassword"
                placeholder="confirm password"
              ></input>
              <span>
              </span>
            </div>
            <button className="btn-signup" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="registered">
        <p>Already got an account?</p>
        {/* <Link to="/slack-app">Sign in to an existing account</Link> */}
      </div>
      <footer>
        <div>© 2022 Ronny Pinoon</div>
      </footer>
    </div>
  )
}

export default Register