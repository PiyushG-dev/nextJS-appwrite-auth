"use client";
import React from "react";
import { useRouter } from "next/navigation";

const PrivateRoutes = ({ children }) => {
  const user = false;
  const router = useRouter();

  return <>{user ? children : router.replace("/login")}</>;
};

export default PrivateRoutes;
