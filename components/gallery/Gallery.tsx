"use client";

import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { fetchRecipes, fetchRecipesByName } from "@/service";
import Link from "next/link";
import Image from "next/image";

function Gallery() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      if (query === "") {
        const data = await fetchRecipes();
        setRecipes((prev) => (prev = data));
      } else {
        const data = await fetchRecipesByName(query);
        setRecipes((prev) => (prev = data));
      }
      setIsLoading(false);
    }
    fetch();
  }, [query]);

  function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    setQuery(target.search.value);
  }

  return (
    <>
      <div
        className="text-center bg-[#343a40] text-[#f8f9fa] min-h-[300px] flex flex-col justify-center"
        id="gallery"
      >
        <h2 className="text-7xl mb-2 font-medium mt-0">OUR MENU</h2>
      </div>
      <form
        className={`${styles.form} bg-[#343a40] text-center`}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="Search.." name="search" />
        <button className={styles.search_btn} type="submit">
          <i className="uil uil-search text-xl"></i>
        </button>
      </form>
      <div className="flex flex-wrap bg-[#343a40]">
        {isLoading ? (
          <h1 className="w-full text-white text-center py-[50px] text-7xl">
            Loading recipes...
          </h1>
        ) : recipes.length === 0 ? (
          <h1 className="w-full text-white text-center py-[50px] text-7xl">No recipes found!</h1>
        ) : (
          <>
            {recipes.map((it: any) => (
              <Link href={`${it.id}`} className={styles.card} key={it.id}>
                <div className={styles.overlay}>
                  <span className="text-8xl text-slate-50">&#43;</span>
                </div>
                <Image src={it.thumbnail_url} alt="recepie" width={530} height={530}/>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Gallery;
