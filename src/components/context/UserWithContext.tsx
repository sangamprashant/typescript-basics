import React from "react";
import { UserContext } from "./UserContext";

const UserWithContext = () => {
  const userContext = React.useContext(UserContext);

  const handleLogIn = () => {
    if (userContext) {
      userContext?.setUser({
        name: "Prashant Srivastav from context api",
        email: "srivastavp891@gmail.com",
      });
    }
  };

  const handleLogOut = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <>
      <button onClick={handleLogIn}>LogIn</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User Name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </>
  );
};

export default UserWithContext;
