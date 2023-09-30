import React from "react";
import { fetchRecipeData } from "../../service/index";

async function recipe({ params }: any) {
  const id = params.id;
  const recipe = await fetchRecipeData(id);

  return (
    <section>
      <div>{recipe.name}</div>
      <div>
        <img src={recipe.thumbnail_url} alt="picture"/>
        <div>продукти</div>
      </div>
      <div>инструкци за приготвяне</div>
    </section>
  );
}

export default recipe;
