/* ================= RECIPES ARRAY ================= */

var recipes = [

    {
        name: "Caesar Salad",
        difficulty: "Easy",
        category: "Mediterranean",
        description: "Classic salad with crispy romaine and creamy dressing.",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=1200&q=85",
        rating: "4.4",
        reviews: "198 reviews",
        prepTime: 15,
        cookTime: 0,
        servings: 2,

        ingredients: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese, shaved",
            "1 cup croutons",
            "2 anchovy fillets (optional)",
            "Lemon wedges",
            "Black pepper"
        ],

        instructions: [
            "Wash and thoroughly dry the romaine lettuce.",
            "Tear the lettuce into bite-sized pieces.",
            "Place the lettuce in a large salad bowl.",
            "Add Caesar dressing and toss gently.",
            "Add parmesan cheese and croutons.",
            "Serve with lemon wedges and black pepper."
        ],

        nutrition: [
            { label: "Calories", value: "320 kcal" },
            { label: "Protein", value: "12g" },
            { label: "Carbs", value: "24g" },
            { label: "Fat", value: "20g" },
            { label: "Fiber", value: "4g" },
            { label: "Sodium", value: "680mg" }
        ],

        tips: [
            "Dry the lettuce well so the dressing sticks to the leaves.",
            "Add croutons just before serving to keep them crunchy.",
            "Use freshly shaved parmesan for better flavor."
        ]
    },

    {
        name: "Creamy Spaghetti Carbonara",
        difficulty: "Easy",
        category: "Italian",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta.",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1200&q=85",
        rating: "4.8",
        reviews: "234 reviews",
        prepTime: 15,
        cookTime: 20,
        servings: 4,

        ingredients: [
            "400g spaghetti",
            "150g pancetta, diced",
            "2 large eggs",
            "2 egg yolks",
            "3/4 cup grated parmesan cheese",
            "Freshly ground black pepper",
            "Salt"
        ],

        instructions: [
            "Bring salted water to a boil and cook the spaghetti.",
            "Cook the pancetta in a pan until golden.",
            "Whisk eggs, egg yolks, parmesan, and black pepper.",
            "Reserve some pasta water and drain the spaghetti.",
            "Toss the pasta with pancetta.",
            "Remove from heat and stir in the egg mixture.",
            "Add pasta water if needed and serve immediately."
        ],

        nutrition: [
            { label: "Calories", value: "520 kcal" },
            { label: "Protein", value: "28g" },
            { label: "Carbs", value: "62g" },
            { label: "Fat", value: "18g" },
            { label: "Fiber", value: "3g" },
            { label: "Sodium", value: "680mg" }
        ],

        tips: [
            "Take the pan off the heat before adding the eggs.",
            "Save pasta water to make the sauce smooth.",
            "Use freshly grated parmesan."
        ]
    },

    {
        name: "Greek Salad",
        difficulty: "Easy",
        category: "Mediterranean",
        description: "A refreshing mix of tomatoes, cucumber, olives, and feta cheese.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=85",
        rating: "4.7",
        reviews: "176 reviews",
        prepTime: 12,
        cookTime: 0,
        servings: 2,

        ingredients: [
            "2 ripe tomatoes",
            "1 cucumber",
            "1/2 red onion",
            "1/2 cup Kalamata olives",
            "100g feta cheese",
            "2 tablespoons olive oil",
            "Dried oregano"
        ],

        instructions: [
            "Cut tomatoes and cucumber into bite-sized pieces.",
            "Thinly slice the red onion.",
            "Combine vegetables and olives in a bowl.",
            "Add feta cheese and olive oil.",
            "Finish with dried oregano and serve."
        ],

        nutrition: [
            { label: "Calories", value: "240 kcal" },
            { label: "Protein", value: "8g" },
            { label: "Carbs", value: "14g" },
            { label: "Fat", value: "17g" },
            { label: "Fiber", value: "4g" },
            { label: "Sodium", value: "590mg" }
        ],

        tips: [
            "Choose ripe tomatoes for better flavor.",
            "Keep the feta in a large piece until serving.",
            "Add the dressing shortly before serving."
        ]
    },

    {
        name: "Margherita Pizza",
        difficulty: "Medium",
        category: "Italian",
        description: "Homemade pizza with tomato sauce, mozzarella, and fresh basil.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=85",
        rating: "4.9",
        reviews: "312 reviews",
        prepTime: 25,
        cookTime: 18,
        servings: 2,

        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "150g fresh mozzarella",
            "Fresh basil leaves",
            "1 tablespoon olive oil",
            "A pinch of salt",
            "Black pepper"
        ],

        instructions: [
            "Preheat the oven to its highest temperature.",
            "Stretch the pizza dough into a thin round.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella and olive oil.",
            "Bake until the crust is golden.",
            "Add fresh basil before serving."
        ],

        nutrition: [
            { label: "Calories", value: "610 kcal" },
            { label: "Protein", value: "25g" },
            { label: "Carbs", value: "70g" },
            { label: "Fat", value: "24g" },
            { label: "Fiber", value: "4g" },
            { label: "Sodium", value: "740mg" }
        ],

        tips: [
            "Preheat the baking tray before cooking.",
            "Avoid adding too much sauce.",
            "Add fresh basil after baking."
        ]
    },

    {
        name: "Grilled Chicken Salad",
        difficulty: "Easy",
        category: "Healthy",
        description: "Tender grilled chicken served over crisp greens and fresh vegetables.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85",
        rating: "4.6",
        reviews: "143 reviews",
        prepTime: 15,
        cookTime: 18,
        servings: 2,

        ingredients: [
            "2 chicken breasts",
            "4 cups mixed salad greens",
            "1 cup cherry tomatoes",
            "1 cucumber",
            "2 tablespoons olive oil",
            "1 tablespoon lemon juice",
            "Salt and black pepper"
        ],

        instructions: [
            "Season chicken with olive oil, lemon, salt, and pepper.",
            "Heat a grill pan over medium heat.",
            "Cook chicken until fully cooked.",
            "Allow chicken to rest, then slice it.",
            "Arrange vegetables in serving bowls.",
            "Top with chicken and serve."
        ],

        nutrition: [
            { label: "Calories", value: "390 kcal" },
            { label: "Protein", value: "38g" },
            { label: "Carbs", value: "16g" },
            { label: "Fat", value: "19g" },
            { label: "Fiber", value: "5g" },
            { label: "Sodium", value: "510mg" }
        ],

        tips: [
            "Let the chicken rest before slicing.",
            "Cut vegetables into similar-sized pieces.",
            "Add dressing right before serving."
        ]
    }

];


/* ================= GLOBAL VARIABLES ================= */

var currentRecipeIndex = 0;

var savedRecipes = [];

var app = document.getElementById("app");


/* ================= CREATE RECIPE LAYOUT ================= */

function renderRecipeLayout() {

    app.innerHTML = `

        <div class="page-shell">

            <section class="recipe-card">

                <!-- Image -->

                <div class="recipe-visual">

                    <img
                        id="recipeImage"
                        class="recipe-photo"
                        src=""
                        alt="Recipe">

                    <div class="rating-pill">

                        <i class="fa-solid fa-star"></i>

                        <span class="rating-value" id="rating"></span>

                        <span class="rating-reviews" id="reviews"></span>

                    </div>

                     <div class="image-stats d-flex justify-content-around align-items-center text-center" id="imageStats"></div>

                </div>


                <!-- Recipe Details -->

                <div class="recipe-details">

                    <div class="recipe-topline">

                        <div class="recipe-heading">

                            <div class="recipe-tags">

                                <span
                                    class="recipe-tag tag-difficulty"
                                    id="difficulty">
                                </span>

                                <span
                                    class="recipe-tag tag-category"
                                    id="category">
                                </span>

                            </div>

                            <h2 class="recipe-title" id="recipeName"></h2>

                            <p class="recipe-description" id="description"></p>

                        </div>

                        <div class="recipe-actions">

                            <button
                                class="recipe-action-btn"
                                id="saveRecipe"
                                type="button">

                                <i class="fa-regular fa-bookmark"></i>

                            </button>

                            <button
                                class="recipe-action-btn"
                                id="shareRecipe"
                                type="button">

                                <i class="fa-solid fa-share-nodes"></i>

                            </button>

                        </div>

                    </div>


                    <!-- Tabs -->

                    <div class="recipe-tabs" id="recipeTabs"></div>


                    <!-- Ingredients -->

                    <section
                        class="tab-panel active"
                        id="ingredientsPanel">

                        <ol
                            class="ingredient-list"
                            id="ingredientList">
                        </ol>

                    </section>


                    <!-- Instructions -->

                    <section
                        class="tab-panel"
                        id="instructionsPanel">

                        <div
                            class="instruction-list"
                            id="instructionList">
                        </div>

                    </section>


                    <!-- Nutrition -->

                    <section
                        class="tab-panel"
                        id="nutritionPanel">

                        <div
                            class="nutrition-grid"
                            id="nutritionList">
                        </div>

                    </section>


                    <!-- Tips -->

                    <section
                        class="tab-panel"
                        id="tipsPanel">

                        <div
                            class="tips-list"
                            id="tipsList">
                        </div>

                    </section>


                    <!-- New Recipe Button -->

                    <div class="recipe-footer">

                        <button
                            class="new-recipe-btn"
                            id="newRecipe"
                            type="button">

                            <i class="fa-solid fa-rotate"></i>
                            Try Another Recipe

                        </button>

                    </div>

                </div>

            </section>

        </div>

    `;

}


/* ================= CREATE TABS ================= */

function renderTabs() {

    var tabs = [

        {
            id: "ingredients",
            label: "Ingredients",
            icon: "fa-list-check"
        },

        {
            id: "instructions",
            label: "Instructions",
            icon: "fa-book-open"
        },

        {
            id: "nutrition",
            label: "Nutrition",
            icon: "fa-chart-pie"
        },

        {
            id: "tips",
            label: "Chef's Tips",
            icon: "fa-lightbulb"
        }

    ];

    var tabsHTML = "";

    tabs.forEach(function (tab, index) {

        tabsHTML += `

            <button
                class="recipe-tab ${index === 0 ? "active" : ""}"
                data-tab="${tab.id}"
                type="button">

                <i class="fa-solid ${tab.icon}"></i>

                ${tab.label}

            </button>

        `;

    });

    document.getElementById("recipeTabs").innerHTML = tabsHTML;

    var tabButtons = document.querySelectorAll(".recipe-tab");

    tabButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            activateTab(button.getAttribute("data-tab"));

        });

    });

}


/* ================= ACTIVATE TAB ================= */

function activateTab(tabName) {

    var buttons = document.querySelectorAll(".recipe-tab");

    var panels = document.querySelectorAll(".tab-panel");

    buttons.forEach(function (button) {

        button.classList.toggle(
            "active",
            button.getAttribute("data-tab") === tabName
        );

    });

    panels.forEach(function (panel) {

        panel.classList.remove("active");

    });

    document.getElementById(tabName + "Panel").classList.add("active");

}


/* ================= DISPLAY RECIPE ================= */

function displayRecipe(index) {

    var recipe = recipes[index];

    // Basic Information

    document.getElementById("recipeImage").src = recipe.image;

    document.getElementById("recipeImage").alt = recipe.name;

    document.getElementById("rating").textContent = recipe.rating;

    document.getElementById("reviews").textContent =
        "(" + recipe.reviews + ")";

    document.getElementById("difficulty").textContent =
        recipe.difficulty;

    document.getElementById("category").textContent =
        recipe.category;

    document.getElementById("recipeName").textContent =
        recipe.name;

    document.getElementById("description").textContent =
        recipe.description;


    // Time and Servings

    document.getElementById("imageStats").innerHTML = `

        <div class="stat-item">

            <i class="fa-solid fa-clock stat-icon fs-2"></i>

            <span class="stat-label">Prep Time</span>

            <strong class="stat-value">
                ${recipe.prepTime} min
            </strong>

        </div>

        <div class="stat-item">

            <i class="fa-solid fa-fire-burner stat-icon fs-2 text-danger"></i>

            <span class="stat-label">Cook Time</span>

            <strong class="stat-value">
                ${recipe.cookTime} min
            </strong>

        </div>

        <div class="stat-item">

            <i class="fa-solid fa-users stat-icon fs-2 text-primary"></i>

            <span class="stat-label">Servings</span>

            <strong class="stat-value">
                ${recipe.servings} people
            </strong>

        </div>

    `;


    // Ingredients

    var ingredientsHTML = "";

    recipe.ingredients.forEach(function (ingredient, index) {

        ingredientsHTML += `

            <li class="ingredient-row">

                <span class="ingredient-number">
                    ${index + 1}
                </span>

                <span>${ingredient}</span>

            </li>

        `;

    });

    document.getElementById("ingredientList").innerHTML =
        ingredientsHTML;


    // Instructions

    var instructionsHTML = "";

    recipe.instructions.forEach(function (instruction, index) {

        instructionsHTML += `

            <div class="instruction-row">

                <span class="ingredient-number">
                    ${index + 1}
                </span>

                <p>${instruction}</p>

            </div>

        `;

    });

    document.getElementById("instructionList").innerHTML =
        instructionsHTML;


    // Nutrition

    var nutritionHTML = "";

    recipe.nutrition.forEach(function (item) {

        nutritionHTML += `

            <div class="nutrition-item">

                <span class="nutrition-value">
                    ${item.value}
                </span>

                <span class="nutrition-label">
                    ${item.label}
                </span>

            </div>

        `;

    });

    document.getElementById("nutritionList").innerHTML =
        nutritionHTML;


    // Chef Tips

    var tipsHTML = "";

    recipe.tips.forEach(function (tip) {

        tipsHTML += `

            <div class="tip-row">

                <i class="fa-solid fa-lightbulb"></i>

                <span>${tip}</span>

            </div>

        `;

    });

    document.getElementById("tipsList").innerHTML =
        tipsHTML;


    // Saved Button Status

    var saveButton = document.getElementById("saveRecipe");

    var isSaved = savedRecipes.indexOf(recipe.name) !== -1;

    saveButton.classList.toggle("is-saved", isSaved);

    saveButton.innerHTML = isSaved
        ? '<i class="fa-solid fa-bookmark"></i>'
        : '<i class="fa-regular fa-bookmark"></i>';


    // Reset Active Tab

    activateTab("ingredients");

}


/* ================= RANDOM RECIPE ================= */

function getRandomRecipe() {

    var randomIndex;

    if (recipes.length < 2) {
        return;
    }

    do {

        randomIndex = Math.floor(Math.random() * recipes.length);

    } while (randomIndex === currentRecipeIndex);

    currentRecipeIndex = randomIndex;

    displayRecipe(currentRecipeIndex);

}


/* ================= SETUP ACTIONS ================= */

function setupActions() {

    // New Recipe

    document.getElementById("newRecipe").addEventListener("click", function () {

        getRandomRecipe();

    });


    // Save Recipe

    document.getElementById("saveRecipe").addEventListener("click", function () {

        var recipeName = recipes[currentRecipeIndex].name;

        var savedIndex = savedRecipes.indexOf(recipeName);

        if (savedIndex === -1) {

            savedRecipes.push(recipeName);

        } else {

            savedRecipes.splice(savedIndex, 1);

        }

        var saved = savedRecipes.indexOf(recipeName) !== -1;

        this.classList.toggle("is-saved", saved);

        this.innerHTML = saved
            ? '<i class="fa-solid fa-bookmark"></i>'
            : '<i class="fa-regular fa-bookmark"></i>';

    });


    // Share Recipe

    document.getElementById("shareRecipe").addEventListener("click", function () {

        var shareText =
            "Try this recipe: " + recipes[currentRecipeIndex].name;

        if (navigator.share) {

            navigator.share({
                title: "What's For Dinner",
                text: shareText
            });

        } else if (navigator.clipboard) {

            navigator.clipboard.writeText(shareText).then(function () {

                alert("Recipe name copied!");

            });

        } else {

            alert(shareText);

        }

    });


    // Navbar - Saved Recipes

    document.getElementById("savedNav").addEventListener("click", function () {

        alert(savedRecipes.length
            ? "Saved: " + savedRecipes.join(", ")
            : "No saved recipes yet.");

    });


    // Navbar - History

    document.getElementById("historyNav").addEventListener("click", function () {

        alert("Current recipe: " + recipes[currentRecipeIndex].name);

    });


    // Navbar - Settings

    document.getElementById("settingsNav").addEventListener("click", function () {

        alert("Settings");

    });

}


/* ================= INITIALIZE PROJECT ================= */

function init() {

    renderRecipeLayout();

    renderTabs();

    displayRecipe(currentRecipeIndex);

    setupActions();

}


/* ================= RUN PROJECT ================= */

init();