from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to retrieve book data
@app.route('/api/books', methods=['GET'])
def get_books():
    # Implement code to fetch books from the database
    # Example using SQLite:
    connection = sqlite3.connect('book_library.db')
    cursor = connection.cursor()
    cursor.execute('SELECT * FROM books')
    books = cursor.fetchall()
    connection.close()
    
    # Format and return the book data as JSON
    book_data = [{'title': book[0], 'author': book[1], 'genre': book[2]} for book in books]
    return jsonify(book_data)

# Implement API endpoints for adding, editing, and deleting books

if __name__ == '__main__':
    app.run(debug=True)
