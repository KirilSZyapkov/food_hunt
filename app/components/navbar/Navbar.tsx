import React from "react";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav
      className={`flex justify-between items-center w-full p-5 ${
        (styles.custom_navbar, styles.fixed_top, styles.navbar_expand_lg)
      }`}
    >
      <div className="flex basis-0 grow items-center">
        <div className="flex items-center gap-5 text-white font-bold text-base">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Gallery</a>
          <a href="#">Book-Table</a>
        </div>
        <a href="#" className={styles.nav_brand}>
          <img className={styles.nav_logo} src="/logo.svg" alt="logo" />
          <span className={styles.nav_brand_text}>Food Hunt</span>
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
