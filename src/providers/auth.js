import React, { useEffect, useState } from "react";
import api from "../apis/api";

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [provider, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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

  //get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = provider.slice(indexOfFirstPost, indexOfLastPost);

  const totalPosts = provider.length;

  return (
    <AuthContext.Provider
      value={{
        currentPosts,
        loading,
        provider,
        postsPerPage,
        totalPosts,
        setCurrentPage,
        setProviders,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
