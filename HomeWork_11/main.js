// взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        let {recipes} = recipesObject;
        console.log(recipes);

        let div = document.getElementById('recipes');
        let h1 = document.createElement("h1");
        h1.innerText = "RECIPES";

        let recipeContainer = document.createElement("div");
        recipeContainer.classList.add('recipe-container');

        for (let recipe of recipes) {
            let divTitle = document.createElement( 'div' );
            divTitle.classList.add('recipe-title');
            let pTitleId = document.createElement( 'p' );
            pTitleId.innerText = `${recipe.id}`;
            let h2TitleName = document.createElement( 'h2' );
            h2TitleName.innerText = `${recipe.name}`;
            divTitle.append(pTitleId, h2TitleName);
            recipeContainer.appendChild(divTitle);

            let ratingDiv = document.createElement("div");
            ratingDiv.classList.add('rating');
            ratingDiv.innerText = `userId: ${recipe.userId} | rating: ${recipe.rating} | reviewCount: ${recipe.reviewCount}`;
            recipeContainer.appendChild(ratingDiv);

            let infoDiv = document.createElement("div");
            infoDiv.classList.add('info');
            let img = document.createElement("img");
            img.classList.add('img');
            img.src = recipe.image;
            let infoIngredients = document.createElement("div");
            infoIngredients.classList.add('infoIngredients');
            let typeP = document.createElement("p");
            typeP.classList.add('type');
            typeP.innerText = `MealType: ${recipe.mealType.join(", ")}`;
            infoIngredients.appendChild(typeP);

            let infoP = document.createElement("p");
            infoP.classList.add('infoP');
            infoP.innerText = `prepTimeMinutes: ${recipe.prepTimeMinutes},
            cookTimeMinutes: ${recipe.cookTimeMinutes},
            servings: ${recipe.servings},
            difficulty: ${recipe.difficulty},
            cuisine: ${recipe.cuisine},
            caloriesPerServing: ${recipe.caloriesPerServing}`;

            let h3Ingredients = document.createElement("h3");
            h3Ingredients.innerText = `Ingredients`;

            let ulIngredients = document.createElement("ul");
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement("li");
                li.innerText = `${ingredient}`;
                ulIngredients.appendChild(li);
            }

            let instructionsDiv = document.createElement("div");
            instructionsDiv.classList.add('instructions');
            let instructionsH3 = document.createElement("h3");
            instructionsH3.innerText = `Instructions`;
            let instructionsOl = document.createElement("ol");
            instructionsDiv.append(instructionsH3, instructionsOl);
            for (const instructionsElement of recipe.instructions) {
                let li = document.createElement("li");
                li.innerText = `${instructionsElement}`;
                instructionsOl.appendChild(li);
            }

            let tagsP = document.createElement("p");
            tagsP.classList.add('tags');
            tagsP.innerText = recipe.tags
                .map(tag => `#${tag}`)
                .join(", ");
            infoIngredients.append(infoP,h3Ingredients,ulIngredients);
            infoDiv.append(img, infoIngredients);
            recipeContainer.append(infoDiv, instructionsDiv, tagsP);

        }
        div.append(h1, recipeContainer);


    });