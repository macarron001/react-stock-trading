import { IoIosClose }from 'react-icons/io' 

const Create = ({ setIsCreatingUser }) => {

  const handleClick = () => {
    setIsCreatingUser(false)
  }

  return (
    <div className='wrapper-portfolio'>
      <div className='create-wrapper'>
        <div className='create'>
          <div className="popup-channel">
            <IoIosClose onClick={handleClick}/>
          </div>
          <div className="main-register">
            <div className="sub-header-register">
              <h1>Who do you want to add?</h1>
              <div>
                {/* <p>
                  We suggest using the{" "}
                  <strong>email address you use at work.</strong>
                </p> */}
              </div>
            </div>
          </div>
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
            <button className="btn-create" type="submit">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create