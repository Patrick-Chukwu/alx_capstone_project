from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Simulated blog post data (replace with a database)
blog_posts = [
    {
        'title': 'My First Blog Post',
        'content': 'This is the content of my first blog post.',
        'author': 'John Doe',
        'date': '2023-10-11',
        'comments': [],
    },
    # Add more blog posts here
]

@app.route('/')
def index():
    return render_template('index.html', blog_posts=blog_posts)

@app.route('/post/<int:post_id>')
def view_post(post_id):
    # Display a single blog post and its comments
    return render_template('post.html', post=blog_posts[post_id])

@app.route('/create_post', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        # Handle form submission to create a new blog post
        title = request.form['title']
        content = request.form['content']
        author = request.form['author']
        date = request.form['date']
        blog_posts.append({
            'title': title,
            'content': content,
            'author': author,
            'date': date,
            'comments': [],
        })
        return redirect(url_for('index'))
    return render_template('create_post.html')

@app.route('/delete_post/<int:post_id>')
def delete_post(post_id):
    # Delete a blog post
    del blog_posts[post_id]
    return redirect(url_for('index'))

@app.route('/add_comment/<int:post_id>', methods=['POST'])
def add_comment(post_id):
    # Handle adding comments to a blog post
    comment_text = request.form['comment']
    blog_posts[post_id]['comments'].append(comment_text)
    return redirect(url_for('view_post', post_id=post_id))

if __name__ == '__main__':
    app.run(debug=True)
