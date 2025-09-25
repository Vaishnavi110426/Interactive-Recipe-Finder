const apiKey = "91dec257912c4801b629ec130c0c7155";

async function getRecipes() {
  const input = document.getElementById("ingredientInput").value;
  if (!input) {
    alert("Please enter at least one ingredient!");
    return;
  }

  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=6&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayRecipes(data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    alert("Could not fetch recipes. Please try again later.");
  }
}

function displayRecipes(recipes) {
  const container = document.getElementById("recipes");
  container.innerHTML = "";

  if (recipes.length === 0) {
    container.innerHTML = "<p>No recipes found. Try different ingredients!</p>";
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-info">
        <h3>${recipe.title}</h3>
        <p>Used ingredients: ${recipe.usedIngredientCount}</p>
        <p>Missed ingredients: ${recipe.missedIngredientCount}</p>
        <a href="https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}" 
           target="_blank">View Recipe</a>
      </div>
    `;

    container.appendChild(card);
  });
}