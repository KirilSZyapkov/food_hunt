"use client";

import React, { useEffect } from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("navbar")?.classList.add("afix");

        document.getElementById("navLogo")?.classList.add("afix_logo");
        document.getElementById("navTxt")?.classList.add("afix_txt");
        console.log("a");
      } else {
        console.log("b");
        document.getElementById("navbar")?.classList.remove("afix");

        document.getElementById("navLogo")?.classList.remove("afix_logo");
        document.getElementById("navTxt")?.classList.remove("afix_txt");
      }
    }
  }, []);

  return (
    <nav
      id="navbar"
      className={`flex justify-between items-center w-full p-5 ${styles.custom_navbar} ${styles.fixed_top} ${styles.navbar_expand_lg}`}
    >
      <div className="flex basis-0 grow items-center">
        <div className="flex items-center gap-5 text-white font-bold text-base">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Book-Table</a>
        </div>
        <a href="#" className={styles.nav_brand}>
          <img
            id="navLogo"
            className={styles.nav_logo}
            src="/logo.svg"
            alt="logo"
          />
          <span id="navTxt" className={styles.nav_brand_text}>
            Food Hunt
          </span>
        </a>
        <div className="flex items-center gap-5 text-white font-bold text-base">
          <a href="#">Blog</a>
          <a href="#">Reviews</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
