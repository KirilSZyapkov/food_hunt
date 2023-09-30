import React from "react";
import { fetchRecipeData } from "../../service/index";
import Link from "next/link";

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
      <div className="flex pt-[70px] w-full px-[50px] gap-[55px] mb-[50px]">
        <img src={recipe.thumbnail_url} alt="picture" className="w-[750px]" />
        <div>
          <h2 className="text-4xl text-medium text-center pb-[35px] decoration-2">Ingredients:</h2>
          <ul className="text-3xl flex flex-col">
            {ingredients.map((i: any) => (
              <li className="list-disc">{i.raw_text}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {instructions?.map((i: any) => (
          <p>{i.display_text}</p>
        ))}
      </div>
    </section>
  );
}

export default recipe;
