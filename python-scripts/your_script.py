from flask import Flask, render_template, request, redirect
import pyautogui
import webbrowser
import time

app = Flask(__name)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/click', methods=['POST'])
def click():
    website = request.form.get('website')
    word = request.form.get('word')

    # Open the specified website in a new tab
    webbrowser.open(website, new=2)
    
    # Wait for 5 seconds (adjust this time as needed)
    time.sleep(5)

    # Implement code to find the word's position on the screen and click on it
    # For demonstration purposes, we'll print a message
    print(f"Clicked on the word: {word} on the website: {website}")

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
