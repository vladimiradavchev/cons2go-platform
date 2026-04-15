# cons2go CMS Setup Guide

## What Changed
All hardcoded content (consultants, problems, blog posts, pricing, about team, careers, homepage text) has been moved to **Sanity.io** — a headless CMS. You now manage all content through a web interface.

## Step 1: Create a Sanity Project
1. Go to [sanity.io](https://www.sanity.io/) and sign up (free tier is generous)
2. Click **"Create new project"** → name it `cons2go`
3. Create a dataset named `production`
4. Copy your **Project ID** from the project settings

## Step 2: Add Environment Variables
In your **Vercel dashboard** (Settings → Environment Variables), add:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` = `production`

Also update `.env.local` locally for development.

## Step 3: Push Schema & Deploy Sanity Studio
Run these commands (in a Windows terminal or Git Bash with Node in PATH):

```bash
cd cons2go
npm install
npx sanity@latest init
```

When prompted, choose to use the existing `sanity/` folder configuration (don't overwrite).

Then push the schema:
```bash
npx sanity@latest schema deploy
```

## Step 4: Access the CMS Editor
- Your Sanity Studio will be at: **`https://cons2go-platform.vercel.app/studio`**
- Sign in with your Sanity account
- You'll see document types: Consultant, Problem, Blog Post, Job Posting, Team Member, Site Content

## How to Manage Content

### Add/Remove Consultants
1. Go to Sanity Studio → "Consultant"
2. Click **"Create new"** to add a consultant
3. Fill in all fields (name, title, category, bio, price, etc.)
4. Click **"Publish"**
5. The consultant appears on `/consultants` page
6. **To remove:** Find the consultant document → click **⋯** → **Delete** → confirm

### Add/Remove Problems
1. Go to "Problem" → "Create new"
2. Fill in title, category, budget, status, description, tags
3. **Publish** — appears on `/problems` page

### Edit Homepage Text
1. Go to "Site Content" → edit the single document
2. Update hero title, description, features, testimonials, CTA text
3. **Publish**

### Edit Pricing & FAQ
1. In "Site Content", scroll to "Pricing Plans" and edit
2. Each plan has: name, price, period, description, features list, CTA text
3. FAQ entries are managed the same way

### Edit About Page
1. In "Site Content": hero text, story paragraphs, values, milestones
2. Add team members separately under "Team Member"

### Edit Blog Posts
1. Go to "Blog Post" → "Create new"
2. Write title, category, excerpt, author, date, read time
3. Slug auto-generates from title

### Edit Careers
1. In "Site Content": hero text, benefits
2. Add jobs separately under "Job Posting"

## Deploying Changes
After adding/editing content in Sanity:
- The site uses **ISR (Incremental Static Regeneration)** — changes appear within ~60 seconds
- Or, trigger a manual redeploy on Vercel: go to vercel.com → your project → Deployments → **Redeploy**

## Local Development
```bash
npm run dev
# Site will show CMS content if NEXT_PUBLIC_SANITY_PROJECT_ID is set in .env.local
# Falls back to default content if Sanity is not configured
```
