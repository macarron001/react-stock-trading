import axios from "axios";
import { useState} from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);

  const onChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="wrapper">
      <header>
        <div></div>
        <div className="center-column">
        </div>
        <div className="right-column"></div>
      </header>
      <main>
        <div className="sub-header">
          <h1>Sign in to Lacks</h1>
          <div>
            <p>
              We suggest using the{" "}
              <strong>email address you use at work.</strong>
            </p>
          </div>
        </div>
        <hr className="horizontal-ruler" />
        <div className="form-container">
          <form onSubmit={onSubmit} noValidate>
            <div>
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="name@work-email.com"
                value={email}
                onChange={onChange}
              ></input>
              <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={onChange}
              ></input>
              <span className={formError === false ? "visibility-hidden" : ""}>
                Incorrect email or password
              </span>
            </div>
            <button className="btn-login" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </main>
      <div className="registered">
        <p> New to Lacks?</p>
      </div>
      <footer>
        <div>© 2022 Raphael Padua and Ronny Pinoon</div>
      </footer>
    </div>
  )
}

export default Login
