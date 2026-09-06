# Deploying the AZ-900 Study Guide to Vercel

This folder contains everything you need to deploy the site to Vercel.
All 13 topics are rewritten in layman's terms and the project builds successfully.

## Two ways to deploy

### Option A — Vercel CLI (recommended, quickest)

From this folder (`/tmp/opencode/az900-deploy-ready`):

```bash
# 1. Login to Vercel (opens a browser to authenticate)
vercel login

# 2. Deploy
vercel --prod
```

The first time, Vercel will ask a couple of questions. Answer:

- **Set up and deploy?** → Yes
- **Which scope?** → your Vercel team/account (default)
- **Link to existing project?** → No (create a new one)
- **Your project name?** → `az900-study-guide` (or anything)

That's it. Vercel will run `npm run build`, detect the Vite framework from
`vercel.json`, and serve the `dist/` output. A public URL is printed when done.

### Option B — Vercel website (upload manually)

1. Go to https://vercel.com and sign in.
2. Click **Add New... → Project**.
3. Either:
   - Push this folder to a GitHub/GitLab repo and import it, **or**
   - Use **vercel deploy** from the CLI as above.
4. Vercel auto-detects **Vite** (framework preset) and build command
   `npm run build` with output directory `dist`.
5. Click **Deploy**.

## Notes

- `vercel.json` is already included: it tells Vercel to build with
  `npm run build`, output from `dist`, and falls back to `index.html` for
  client-side routing (React Router needs this so deep links work).
- `dist/` is already built in this folder, but Vercel rebuilds it fresh, so
  no need to worry about stale output.
- The original repo's remote is the upstream GitHub project. If you push
  manually, push to your **own** repo, not the original.

## Local preview (no deploy)

```bash
npm install
npm run dev        # dev server at http://localhost:5173
```
