🍳 Interactive Recipe Finder

An interactive web app that suggests recipes based on the ingredients you already have.
Just type in what’s available in your kitchen, and the app fetches smart recipe suggestions using the Spoonacular API.

Live Demo :
 https://vaishnavi110426.github.io/Interactive-Recipe-Finder/

📌 Features

✅ Search recipes by entering multiple ingredients (e.g., egg, tomato, onion)

✅ Displays recipe cards with image, title, used/missed ingredients

✅ Click recipe → opens full recipe link with instructions

✅ Responsive, modern UI with animated gradient & floating food icons

✅ Built with HTML, CSS, JavaScript

⚠️ Uses Spoonacular API (requires an API key for live demo)

🛠️ Tech Stack

Frontend: HTML5, CSS3, JavaScript (Vanilla JS)

API: Spoonacular Food API

Tools: VS Code, GitHub Pages (for deployment)

🚀 Getting Started
1. Clone the repo
git clone https://github.com/<USERNAME>/Interactive-Recipe-Finder.git
cd Interactive-Recipe-Finder

2. Add your API Key

Open script.js and replace:

const apiKey = "REPLACE_WITH_YOUR_KEY";

with your real Spoonacular API key.

3. Run locally

Option A: Open index.html directly in your browser.

Option B: Install Live Server extension in VS Code → Right-click index.html → Open with Live Server.

🌍 Deployment
GitHub Pages

Push repo to GitHub.

Enable Pages in repo → Settings → Pages → Source: main branch, / (root).

Your site will be live at:

https://<USERNAME>.github.io/Interactive-Recipe-Finder/

Netlify (Recommended for API key protection)

Add SPOONACULAR_API_KEY as an environment variable.

Use a Netlify Function to proxy API requests (keeps your key hidden).

📌 Future Enhancements

🔖 Save favorite recipes (local storage)

🎤 Voice input for ingredients

🥗 Filters for diet type (Veg, Vegan, Keto, etc.)

📊 Show nutrition info per recipe

📱 Convert to Progressive Web App (PWA) for offline use

📚 References

Spoonacular Food API

W3Schools HTML/CSS/JS

MDN Web Docs

Google Fonts – Poppins

🙌 Acknowledgements

Made with ❤️ by Pragathi Vaishnavi
