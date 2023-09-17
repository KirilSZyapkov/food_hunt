import React from "react";
import styles from "./Gallery.module.css";
import { fetchRecipes } from "@/service";

async function Gallery() {

  const someRecipies = await fetchRecipes();
  console.log(someRecipies);
  

  return (
    <>
      <div className="text-center bg-[#343a40] text-[#f8f9fa] min-h-[300px] flex flex-col justify-center">
        <h2 className="text-7xl mb-2 font-medium mt-0">OUR MENU</h2>
      </div>
      <form className={`${styles.form} bg-[#343a40] text-center`}>
        <input type="text" placeholder="Search.." name="search" />
        <button className={styles.search_btn} type="submit">
          <i className="uil uil-search text-xl"></i>
        </button>
      </form>
      <div className="flex flex-wrap">
        <div className={styles.card}>
          <img src="/gallary_1.jpg" alt="recepie" />
          <a href="#">link</a>
        </div>
        <div className={styles.card}>
          <img src="/gallary_2.jpg" alt="recepie" />
          <a href="#">link</a>
        </div>
        <div className={styles.card}>
          <img src="/gallary_3.jpg" alt="recepie" />
          <a href="#">link</a>
        </div>
        <div className={styles.card}>
          <img src="/gallary_4.jpg" alt="recepie" />
          <a href="#">link</a>
        </div>
      </div>
    </>
  );
}

export default Gallery;
