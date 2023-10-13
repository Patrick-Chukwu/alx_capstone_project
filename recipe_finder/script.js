document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');
    const recipeList = document.querySelector('.recipe-list');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = document.querySelector('#search-input').value;

        // Make an AJAX request to the Flask backend to fetch recipes
        fetch('/search', {
            method: 'POST',
            body: new URLSearchParams({ query }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Display the search results
            recipeList.innerHTML = '';
            data.forEach(recipe => {
                const recipeItem = document.createElement('div');
                recipeItem.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                    <p>Instructions: ${recipe.instructions}</p>
                    <p>Cooking Time: ${recipe.cooking_time}</p>
                `;
                recipeList.appendChild(recipeItem);
            });
        })
        .catch(error => console.error('Error:', error));
    });
});
