import { useState } from 'react'
import Popup from './Popup';
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const hidePopups = () => setShowLogin(false);
  const showLoginPopup = () => setShowLogin(true);

  return (
    <>
      <h1>Poetry Portfolio</h1>
      <div class="button-container">
        <button onClick="showPopup('loginPopup')">Login</button>
        <button onClick="showPopup('createAccountPopup')">Create Account</button>
      </div>
      <div className="card">
      </div>
      <p className="intro-poem">
        Poets are the unacknowledged legislators of the 
        world, according to Percy Shelley,
        and as such, they should have a sufficient
        place to put their work.
      </p>
      <div class="long-quote">
        Read, write, revise, publish, share, discover. This is the place to unlock your inner poet. 
      </div>
      {showLogin && <Popup hidePopups={hidePopups} />}
      {/* Add CreateAccountPopup component if you have it */}
      {/* {showCreateAccount && <CreateAccountPopup hidePopups={hidePopups} />} */}
    </>
  )
}

export default App
