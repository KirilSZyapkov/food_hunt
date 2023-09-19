import React from "react";
import styles from "./Gallery.module.css";
import { fetchRecipes } from "@/service";
import Link from "next/link";

async function Gallery() {
  const someRecipies = await fetchRecipes();
  
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
        {someRecipies?.results.map((it: any) => (
          <Link href={`${it.id}`} className={styles.card}>
              <img src={it.thumbnail_url} alt="recepie" />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Gallery;
