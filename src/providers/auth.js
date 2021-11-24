import React, { useEffect, useState } from "react";
import api from "../apis/api";

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [provider, setProviders] = useState([]);

  useEffect(() => {
    api.get().then(({ data }) => {
      setProviders(data);
    });
    console.log(provider);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ provider }}>
      {props.children}
    </AuthContext.Provider>
  );
};
