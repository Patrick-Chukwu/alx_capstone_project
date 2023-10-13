from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Replace this with your external API integration (e.g., Spoonacular or Edamam)
def fetch_recipes(query):
    # Simulated data for testing
    recipes = [
        {
            'title': 'Spaghetti Carbonara',
            'ingredients': ['spaghetti', 'eggs', 'bacon', 'parmesan cheese'],
            'instructions': 'Cook spaghetti; mix eggs, bacon, and cheese; toss.',
            'cooking_time': '20 minutes',
        },
        # Add more recipes here
    ]
    return recipes

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search_recipes():
    query = request.form['query']
    recipes = fetch_recipes(query)
    return jsonify(recipes)

if __name__ == '__main__':
    app.run(debug=True)
