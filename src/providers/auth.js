import React, { useEffect, useState } from "react";
import api from "../apis/api";

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [provider, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await api.get();
        setProviders(result.data);
      } catch (err) {}
    })();

    return () => {};
  }, [provider]);

  return (
    <AuthContext.Provider value={{ provider }}>
      {props.children}
    </AuthContext.Provider>
  );
};
