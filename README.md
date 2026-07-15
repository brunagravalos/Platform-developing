# Open Science Platform website user guide


## Installation

Before you begin, ensure you have the following installed on your computer:
* **[Node.js](https://nodejs.org/en/download/)**: (Version 20.0 or higher is recommended). This includes `npm`, the package manager you will use to install dependencies.

For more information, visit the [docusaurus installation page](https://docusaurus.io/docs/installation).


## Running the site locally

1. Clone the code into your computer.
2. Navigate into the project folder:
```bash
   cd path/to/your/project-folder
   ```
3. Install the project dependencies:
```bash
   npm install
   ```
4. Start the local development server:
```bash
   npm run start
   ```
5. Your browser should automatically open to `http://localhost:3000`. Any changes you make to the code will now live-reload in the browser with `ctrl + s`.

## Deploying the site

To host the site, you need to link this local code to your own GitHub account.

1. Log in to [GitHub](https://github.com/) and create a **New Repository**. *(Do not initialize it with a README, .gitignore, or license).*
2. In your terminal (still inside the project folder), run the following commands to link the project to your new repository and push the code:
```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [https://github.com/](https://github.com/)<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

3. Open the `docusaurus.config.js` file in your code editor.
4. Locate and update the following fields at the top of the file with your specific GitHub details:

```javascript
// docusaurus.config.js
module.exports = {
  // ...
  url: 'https://<YOUR-GITHUB-USERNAME>.github.io', // Your GitHub Pages URL
  baseUrl: '/<YOUR-REPO-NAME>/',                   // The name of your GitHub repo (Keep the slashes!)
  organizationName: '<YOUR-GITHUB-USERNAME>',      // Your GitHub username
  projectName: '<YOUR-REPO-NAME>',                 // Your GitHub repo name
  deploymentBranch: 'gh-pages',                    // Keep this as 'gh-pages'
  trailingSlash: false,
  // ...
};
```

Docusaurus has a built-in command to automatically build and deploy your site to GitHub Pages.

Run the appropriate command below in your terminal, replacing `<YOUR-GITHUB-USERNAME>` with your actual GitHub username:

**For Mac / Linux:**
```bash
GIT_USER=<YOUR-GITHUB-USERNAME> npm run deploy
```

### Final step: enable gitHub pages
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment**, ensure the **Source** is set to `Deploy from a branch`.
4. Under **Branch**, select the `gh-pages` branch and `/ (root)`, then click **Save**.

Wait a few minutes, and your site will be live at: `https://<YOUR-GITHUB-USERNAME>.github.io/<YOUR-REPO-NAME>/`!
