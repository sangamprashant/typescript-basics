import React from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true)
  }
  const handleLogOut = () => {
    setIsLoggedIn(false)

  }

  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
      <div>User is logged {isLoggedIn ? "in" : "out"}.</div>
    </div>
  );
};

export default LoggedIn;
