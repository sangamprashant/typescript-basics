import React from "react";

type UserType = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = React.useState<UserType | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "Prasahant",
      email: "prashantsrivastav@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {user?.name}.</div>
      <div>User email is {user?.email}.</div>
    </div>
  );
};

export default User;
