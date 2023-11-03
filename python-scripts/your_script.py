from flask import Flask, render_template, request, redirect
from pyppeteer import launch
import asyncio

app = Flask(__name)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/click', methods=['POST'])
def click():
    website = request.form.get('website')
    word = request.form.get('word')

    # Define an async function to perform browser automation
    async def automate_browser():
        # Specify the full path to chromedriver.exe in the python-scripts directory
        executablePath = r'C:\Users\chouchou\tasks-done.app\python-scripts\chromedriver.exe'

        browser = await launch(executablePath=executablePath)  # Launch a new Chrome browser
        page = await browser.newPage()  # Create a new page

        # Navigate to the specified website
        await page.goto(website)

        # Wait for the page to fully load (adjust the timeout as needed)
        await page.waitForSelector('body', {'timeout': 5000})

        # Implement code to find the word's position on the page and click on it
        # For demonstration purposes, we'll print a message
        print(f"Clicked on the word: {word} on the website: {website}")

        await browser.close()  # Close the browser

    asyncio.get_event_loop().run_until_complete(automate_browser())

    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
