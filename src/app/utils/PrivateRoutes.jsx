"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  return <>{user ? children : router.replace("/login")}</>;
};

export default PrivateRoutes;
