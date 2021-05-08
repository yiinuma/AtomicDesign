import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const cotextName = "@hero";
  return (
    <UserContext.Provider value={{ cotextName }}>
      {children}
    </UserContext.Provider>
  );
};
