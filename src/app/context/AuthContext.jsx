"use client";
import { createContext, useState, useEffect } from "react";
import { account } from "../appwrite/auth";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      const response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      const accountDetails = await account.get();
      setUser(accountDetails);
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    setLoading(true);
    await account.deleteSession("current");
    setUser(null);
    setLoading(false);
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      const response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.createEmailSession(userInfo.email, userInfo.password);
      const accountDetails = await account.get();
      setUser(accountDetails);
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const contextValue = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <p>loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
