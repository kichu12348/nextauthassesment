'use client';
import { useState } from "react";
import styles from "./page.module.css";
import { CssBaseline, Typography, Box, Button } from "@mui/material";
import GoogleAuth from "./lib/googleAuth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuth= (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    window.ReactNativeWebView?.postMessage(JSON.stringify({ uid: userData?.uid,data: userData }));
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isAuthenticated) {
    return (
      <Box className={styles.glassCard}>
        <Typography 
          variant="h4" 
          className={styles.title} 
          gutterBottom
        >
          Successfully Logged In!
        </Typography>
        <Typography 
          variant="body1" 
          className={styles.subtitle}
        >
          Welcome, {user?.displayName || 'User'}!
        </Typography>
        <div className={styles.authButton}>
          <Button
            variant="contained"
            onClick={handleSignOut}
            fullWidth
            sx={{
              background: "rgba(25, 25, 40, 0.8)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              color: "rgba(255, 255, 255, 0.9)",
              "&:hover": {
                background: "rgba(138, 43, 226, 0.8)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 25px rgba(138, 43, 226, 0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Sign Out
          </Button>
        </div>
      </Box>
    );
  }

  return (
    <Box className={styles.glassCard}>
      <Typography 
        variant="h4" 
        className={styles.title} 
        gutterBottom
      >
        Welcome to NextExpoAuth
      </Typography>
      <Typography 
        variant="body1" 
        className={styles.subtitle}
      >
        Sign in to your account to continue
      </Typography>
      <div className={styles.authButton}>
        <GoogleAuth onAuth={handleAuth} />
      </div>
    </Box>
  );
}

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <CssBaseline />
        <App />
      </div>
    </>
  );
}
