"use client";

import { useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";

const LogOut = () => {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push("/authentication"); 
  }, [logout, router]);

  return <div>Logging out...</div>;
};

export default LogOut;