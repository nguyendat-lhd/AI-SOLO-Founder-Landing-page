<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1W0r-N2NRb0jua9daD46zwz9egI1_gmyj

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

### Deploy to Netlify

1. Push your code to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and click "Add new site" > "Import from an existing project".
3. Select your repository.
4. Netlify will detect the `netlify.toml` file and automatically configure the build settings.
5. Click "Deploy site".

### Deploy to GitHub Pages

This project includes a GitHub Action to automatically deploy to GitHub Pages.

1. Push your code to a GitHub repository.
2. Go to your repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The deployment workflow will run automatically on push to `main` or `master`.
