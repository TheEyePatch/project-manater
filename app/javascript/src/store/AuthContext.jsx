import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  loggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export function AuthContextProvider(props) {
  const initialToken = sessionStorage.getItem('session_token');
  const [token, setToken] = useState(initialToken);

  const userLoggedIn = token != null

  const loginHandler = (token) => {
    setToken(token);
    sessionStorage.setItem('session_token', token);
  }

  const logoutHandler = () => {
    sessionStorage.removeItem('session_token');
    setToken(null);
  }

  const AuthContextValue = {
    token: token || sessionStorage.getItem('session_token'),
    loggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }
  return <AuthContext.Provider value={AuthContextValue}>{props.children}</AuthContext.Provider>
}


export default AuthContext;