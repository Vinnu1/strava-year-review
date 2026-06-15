import React, { createContext, useState } from "react";

type User = {
  username: string;
};

// I might later need to create one context for everything or maybe 2 contexts for user and user data
type UserContextType = {
  user: User | null;
  addUser: (userDetails: User) => void; //React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({
  user: null,
  addUser: () => {},
});

type Props = {
  children?: React.ReactNode;
};

// use JWT to set token in cookie
export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  // define specific object type later
  const addUser = (userDetails: User) => {
    setUser(userDetails);
  };

  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
