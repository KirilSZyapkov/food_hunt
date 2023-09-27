"use client";

import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  const [afix, setAfix] = useState(false);
  const [afixLogo, setAfixLogo] = useState(false);
  const [afixTxt, setAfixTxt] = useState(false);

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
      setAfix(true);
      setAfixLogo(true);
      setAfixTxt(true);
    } else {
      setAfix(false);
      setAfixLogo(false);
      setAfixTxt(false);
    }
  }

  return (
    <header className={`${styles.header_menu} ${afix ? styles.afix : ""}`}>
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
            className={`${styles.nav_logo} ${afixLogo ? styles.afix_logo : ""}`}
            src="./logo.svg"
            alt="logo"
          />
          <span
            id="navTxt"
            className={`${styles.nav_brand_text} ${
              afixTxt ? styles.afix_txt : ""
            }`}
          >
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
      <div className={styles.header_burger_menu_container}>
        <ul className={styles.header_burger_menu}>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            Home          </a></li>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            About          </a></li>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            Gallery          </a></li>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            Book-Table          </a></li>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            Blog          </a></li>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            Reviews          </a></li>
          <li className="text-medium text-xl py-[10px] hover:text-[#ff214f]"><a className={styles.link} href="#">            Contact Us          </a></li>
        </ul>
        <span className=" text-white hover:text-black text-4xl fixed right-5 top-5 cursor-pointer">&times;</span>
      </div>
    </header>
  );
}

export default Navbar;
