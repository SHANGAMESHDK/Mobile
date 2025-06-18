from flask import Flask, render_template, request, redirect, url_for, flash, session
import json, os
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "your_secret_key"
DB_FILE = "users.json"

def load_users():
    if not os.path.exists(DB_FILE):
        return {}
    with open(DB_FILE, "r") as f:
        return json.load(f)

def save_users(users):
    with open(DB_FILE, "w") as f:
        json.dump(users, f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        users = load_users()
        username = request.form['username']
        password = request.form['password']

        if username in users and check_password_hash(users[username], password):
            session["user"] = username
            flash("Login successful!", "success")
            return redirect(url_for('index'))
        else:
            flash("Invalid credentials or user not found.", "danger")
            return redirect(url_for('login'))
    return render_template('login.html')

@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == "POST":
        users = load_users()
        username = request.form['username']
        password = request.form['password']
        confirm = request.form['confirm']

        if username in users:
            flash("Username already exists.", "warning")
            return redirect(url_for('register'))
        elif password != confirm:
            flash("Passwords do not match.", "warning")
            return redirect(url_for('register'))
        else:
            users[username] = generate_password_hash(password)
            save_users(users)
            flash("Registration successful! Please log in.", "success")
            return redirect(url_for('login'))

    return render_template('register.html')

@app.route('/logout')
def logout():
    session.pop("user", None)
    flash("Logged out.", "info")
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
