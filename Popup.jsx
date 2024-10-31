import React from 'react';

const Popup = ({ hidePopups }) => {
  return (
    <>
      <div className="overlay" id="overlay" onClick={hidePopups}></div>

      <div className="popup" id="loginPopup">
        <span className="close" onClick={hidePopups}>&times;</span>
        <h2>Login</h2>
        <form method="get" action="search.html">
          <div>
            <span>@</span>
            <input type="text" placeholder="your@email.com" />
          </div>
          <div>
            <span>🔒</span>
            <input type="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Popup;
