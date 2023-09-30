export async function fetchRecipes() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2398b9f22emshef5491088782044p16bf06jsn430e9585cd66",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=12&tags=under_30_minutes",
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFeeds() {
  const url =
    "https://tasty.p.rapidapi.com/feeds/list?size=10&timezone=%2B0700&vegetarian=false&from=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2398b9f22emshef5491088782044p16bf06jsn430e9585cd66",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRecipeData(id: string) {
  const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2398b9f22emshef5491088782044p16bf06jsn430e9585cd66",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
