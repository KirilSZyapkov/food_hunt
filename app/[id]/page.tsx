import React from "react";
import { fetchRecipeData } from "../../service/index";
import Link from "next/link";

import styles from "./styles.module.css";
import Image from "next/image";

async function recipe({ params }: any) {
  const id = params.id;
  const recipe = await fetchRecipeData(id);
  const instructions = recipe.instructions;
  const ingredients = recipe.sections[0].components;

  return (
    <section className="flex flex-col items-center bg-[#343a40] text-white relative">
      <Link href="/#gallery">
        <i className="uil uil-arrow-left absolute text-black text-5xl left-10 top-4 hover:bg-gray-200 rounded-full"></i>
      </Link>

      <div className="text-7xl pt-[55px]">{recipe.name}</div>
      <div
        className={`flex justify-evenly pt-[70px] w-full px-[50px] gap-[55px] mb-[50px] ${styles.details_container}`}
      >
        <Image
          src={recipe.thumbnail_url}
          alt="picture"
          className="max-w-[750px] max-h-[750px] inline-block"
          width={750}
          height={750}
        />
        <div>
          <h2 className="text-4xl text-medium text-center pb-[35px] decoration-2">
            Ingredients:
          </h2>
          <ul className="text-3xl flex flex-col gap-[10px]">
            {ingredients.map((i: any) => (
              <li className={`list-disc ${styles.li_style}`} key={i.id}>
                {i.raw_text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full px-[20px]">
        <h2 className="text-5xl text-center mb-[20px]">Preparation</h2>
        <div>
          {instructions?.map((i: any) => (
            <span className="text-xl" key={i.id}>
              <p>{i.display_text}</p>
              <br />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default recipe;
