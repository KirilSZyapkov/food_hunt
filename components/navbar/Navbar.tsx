"use client";

import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  const [afix, setAfix] = useState("");
  const [afixLogo, setAfixLogo] = useState("");
  const [afixTxt, setAfixTxt] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setAfix("afix");
      setAfixLogo("afix_logo");
      setAfixTxt("afix_txt");
    } else {
      setAfix("");
      setAfixLogo("");
      setAfixTxt("");
    }
  }

  return (
    <header className={`${afix} ${styles.header_menu}`}>
      <div className={styles.header_container}>
        <div className="flex items-center gap-5 font-bold text-base">
          <a className={styles.link} href="#">
            Home
          </a>
          <a className={styles.link} href="#">
            About
          </a>
          <a className={styles.link} href="#">
            Gallery
          </a>
          <a className={styles.link} href="#">
            Book-Table
          </a>
        </div>
        <a href="#" className={styles.nav_brand}>
          <img
            id="navLogo"
            className={styles.nav_logo}
            src="./logo.svg"
            alt="logo"
          />
          <span id="navTxt" className={styles.nav_brand_text}>
            Food Hunt
          </span>
        </a>
        <div className="flex items-center gap-5 text-white font-bold text-base">
          <a className={styles.link} href="#">
            Blog
          </a>
          <a className={styles.link} href="#">
            Reviews
          </a>
          <a className={styles.link} href="#">
            Contact Us
          </a>
        </div>
      </div>
      <div className={styles.header_burger_menu}>burger</div>
    </header>
  );
}

export default Navbar;
