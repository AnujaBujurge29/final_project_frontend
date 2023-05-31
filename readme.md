#
## The project must include a README.md file with the following sections:
- Introduction: A paragraph used to introduce interested parties to the project and needs to include one or more screenshots.
- Technologies Used: A list of all technologies, libraries, APIs, etc. used in the project.
- Getting Started: Links to the project's planning (Trello board) and the deployed app on Render-DashBoard.
- Unsolved Problems: List any unsolved issues.
- Future Enhancements: Identify future features and enhancements planned for the project.
------------------------------------------------------------------------
## front end installations
* npm create vite@latest frontend
* cd frontend
* npm install *
* npm run dev
----------------------------------------------------------------------
# Dependancies:
1.  Tailwind CSS
### Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

### Configure your template paths
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

### Add the Tailwind directives to your index.CSS
@tailwind base;

@tailwind components;

@tailwind utilities;

### install PostCSS Language Support extension in VS Code
- This extension is applied to .css, .pcss and .postcss files. It also applies to the following contexts:
- * HTML <style> elements.
- * Markdown css and pcss code blocks.

2. React-router-dom
### Installation
npm install react-router-dom

3. React Icons
npm install react-icons --save

4. Axios installation
npm install axios
----------------------------------------------------------------------
## API from backend
api =https://mern-project-backend-58df.onrender.com/books
