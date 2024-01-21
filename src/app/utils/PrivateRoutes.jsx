"use client";
import React from "react";
import { useRouter } from "next/router";

const PrivateRoutes = ({ children }) => {
  const user = true;
  const router = useRouter();

  return <>{user ? children : router.replace("/login")}</>;
};

export default PrivateRoutes;
