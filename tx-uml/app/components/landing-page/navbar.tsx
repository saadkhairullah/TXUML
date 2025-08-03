'use client';
import React from "react";
import styles from "./Navbar.module.css";
import { useUser } from "../../context/userContext";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const navbar = () => {
  const router = useRouter();
   const { user, setUser } = useUser();
   


    const handleLogout = async () => {
      try {
        const res = await fetch('/api/logout', {
          method: 'GET',
          credentials: 'include',
        });
  
        const data = await res.json();
  
        if (res.ok) {
  setUser(null); // update context before redirect
  toast.success(data.message || 'Logout successful');
  router.push('/');
        } else {
          toast.error(data.error || 'Logout failed');
        }
      } catch (error: any) {
        toast.error('Logout failed: ' + error.message);
      }
    };
    
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logoName}>
        <img src="/TXUML-logo.svg" alt="TXUML Logo" />
        <h3>TXUML</h3>
      </a>
      <div className={styles.navLinks}>
        {user  ? (
          <>
            <a href="/settings">Settings</a>
              <a href="/mapPage">Map</a>
            <a onClick={handleLogout}>Log out</a>
          </>
        ) : (
          <>
            <a href="/login">Log in</a>
            <a href="/signup">Sign up</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default navbar;