"use client";
import { createContext, useState, useEffect } from "react";
import { account } from "../appwrite/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {}, []);

  const loginUser = async (userInfo) => {
    try {
      const response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      const accountDetails = await account.get();
      setUser(accountDetails);
    } catch (err) {
      console.error(err);
    }
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
