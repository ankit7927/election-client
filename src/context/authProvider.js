import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ childern }) => {
  const [auth, setauth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setauth }}>
      {childern}
    </AuthContext.Provider>
  );
};

export default AuthContext;
