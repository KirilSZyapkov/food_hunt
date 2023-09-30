import React from "react";
import { fetchRecipeData } from "../../service/index";

async function recipe({ params }: any) {
  const id = params.id;
  const recipe = await fetchRecipeData(id);
  const instructions = recipe.instructions;
  const ingredients = recipe.sections[0].components;

  console.log(ingredients);
  

  return (
    <section className="flex flex-col items-center bg-[#343a40] text-white">
      <div className="text-7xl mt-[200px]">{recipe.name}</div>
      <div className="flex pt-[100px]">
        <img src={recipe.thumbnail_url} alt="picture" />
        <div>{ingredients.map((i: any )=> (
          <p>{i.raw_text}</p>
        ))}</div>
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
