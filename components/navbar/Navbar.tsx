"use client";

import React, { useEffect, useState } from "react";

import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  const [afix, setAfix] = useState(false);
  const [afixLogo, setAfixLogo] = useState(false);
  const [afixTxt, setAfixTxt] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu(): void {
    setIsOpen(false);
  }

  function openMenu(): void {
    setIsOpen(true);
  }

  useEffect(()=>{
    scrollFunction();
  },[]);

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [scrollPos]);
  function scrollFunction() {
    const htmlElement = document.documentElement;
    const percentScroll = (htmlElement.scrollTop / htmlElement.clientHeight)*100;
    const scrollPosition = Math.min(percentScroll, 10);
    
    setScrollPos(scrollPosition);

    if (scrollPosition >= 10) {
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
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="#about">
            About
          </Link>
          <Link className={styles.link} href="#gallery">
            Gallery
          </Link>
          <Link className={styles.link} href="#book_table">
            Book-Table
          </Link>
        </div>
        <Link href="/" className={styles.nav_brand}>
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
        </Link>
        <div className="flex items-center gap-5 text-white font-bold text-base">
          <Link className={styles.link} href="#blog">
            Blog
          </Link>
          <Link className={styles.link} href="#reviews">
            Reviews
          </Link>
          <Link className={styles.link} href="#contact_us">
            Contact Us
          </Link>
        </div>
      </div>
      {isOpen ? (
        ""
      ) : (
        <i
          className={`uil uil-bars text-4xl pl-2 mt-5 cursor-pointer text-gray-400 ${styles.menu}`}
          onClick={openMenu}
        ></i>
      )}
      {isOpen && (
        <div className={styles.header_burger_menu_container}>
          <ul className={styles.header_burger_menu}>
            <li className="text-medium text-xl py-[10px]">
              <Link onClick={closeMenu} className={styles.link} href="/">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="text-medium text-xl py-[10px]">
              <Link onClick={closeMenu} className={styles.link} href="#about">
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="text-medium text-xl py-[10px]">
              <Link onClick={closeMenu} className={styles.link} href="#gallery">
                {" "}
                Gallery{" "}
              </Link>
            </li>
            <li className="text-medium text-xl py-[10px]">
              <Link
                onClick={closeMenu}
                className={styles.link}
                href="#book_table"
              >
                {" "}
                Book-Table{" "}
              </Link>
            </li>
            <li className="text-medium text-xl py-[10px]">
              <Link onClick={closeMenu} className={styles.link} href="#blog">
                {" "}
                Blog{" "}
              </Link>
            </li>
            <li className="text-medium text-xl py-[10px]">
              <Link onClick={closeMenu} className={styles.link} href="#reviews">
                {" "}
                Reviews{" "}
              </Link>
            </li>
            <li className="text-medium text-xl py-[10px]">
              <Link
                onClick={closeMenu}
                className={styles.link}
                href="#contact_us"
              >
                {" "}
                Contact Us{" "}
              </Link>
            </li>
          </ul>
          <span
            className="text-4xl fixed right-5 top-1 cursor-pointer hover:text-red-500"
            onClick={closeMenu}
          >
            &times;
          </span>
        </div>
      )}
    </header>
  );
}

export default Navbar;
