"use client";

import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import GoogleLogo from "/public/google-icon.svg";
import AppleLogo from "/public/apple-icon.svg";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: `${window.location.origin}/dashboard` });
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.leftContainer}>
        <p>Board.</p>
      </div>
      <div className={style.rightContainer}>
        <div className={style.signInContainer}>
          <p>Sign In</p>
          <p>Sign in to your account</p>
          <div className={style.authContainer}>
            <button
              type="button"
              className={style.authButton}
              onClick={() => handleGoogleLogin()}
            >
              <Image
                className={style.logo}
                src={GoogleLogo}
                alt="Google Logo"
              />
              Sign in with Google
            </button>
            <button type="button" className={style.authButton}>
              <Image className={style.logo} src={AppleLogo} alt="Apple Logo" />
              Sign in with Apple
            </button>
          </div>
          <div className={style.loginContainer}>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="email" />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
            <p>Forgot password?</p>
            <button type="button" className={style.signInButton}>
              Sign In
            </button>
          </div>
          <p className={style.register}>
            Don&apos;t have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
}
