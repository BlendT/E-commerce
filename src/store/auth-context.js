import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  showRegister: () => {},
  registerIsShown: false,
  isRegistered: false,
  registerHandler: () => {},
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(!showRegister);
  };

  const registerHandler = (isReg) => {
    setIsRegistered(isReg);
  };

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const lougoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: lougoutHandler,
    registerIsShown: showRegister,
    showRegister: handleShowRegister,
    registerHandler: registerHandler,
    isRegistered: isRegistered,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
