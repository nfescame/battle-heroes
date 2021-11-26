import React, { useEffect, useState } from "react";
import api from "../apis/api";

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [provider, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await api.get();
      setProviders(res.data);
      setLoading(false);
    };

    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ provider, loading }}>
      {props.children}
    </AuthContext.Provider>
  );
};
