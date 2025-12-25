# Club Website

Welcome to this project! This repository follows a clear GitHub workflow to ensure smooth collaboration, proper versioning, and code consistency. Please read this guide before contributing.

---

## 🚀 Contributing

Thank you for your interest in contributing! Follow this guide to work with this repository.

This project uses a **protected main branch workflow**. The `main` branch represents the current stable version (**v1.0**). Contributors **cannot push directly to main**. All changes must be made via **feature branches** and **pull requests (PRs)**. Only the **repo owner** can merge PRs.  

**Versioning:**  
- **🟢 v1.0** — Current stable version  
- **🔴 v2.0** — Major overhaul or complete redesign

**Branching Conventions:**  
- 🌿 Feature branches: `feature/<short-description>` (e.g., `feature/add-login-form`)  
- 🐞 Bugfix branches: `bugfix/<short-description>` (e.g., `bugfix/fix-header-alignment`)  
- Version branches: Only for major releases (e.g., `v1.0`, `v2.0`)  

> ⚠️ Do not push directly to `main`. Always branch from the latest `main`.

**📝 Commit Message Conventions:**  
Format:  
- **type:** feat, fix, docs, chore, refactor  
- **scope:** optional, file/module/feature name  
- **short description:** 1-line present tense  

**Examples:**  
- feat(auth): add login form
- fix(header): align navigation links
- docs(readme): add contributing guide


**Pull Requests:**  
- Always target `main` or the latest version branch (`v1.0`)  
- PR title format: `<type>: <short description>` (e.g., `feat: add user profile page`)  
- PR description must include:
  - What changed  
  - Why it changed  
  - Testing instructions  
- **PRs require owner approval before merging**  
- **Do not merge your own PR**  
- **Do not push directly to main**  

**🔧 Local Development:**  
```bash
# Clone the repo
git clone <YOUR_GIT_URL>

# Go to project folder
cd <PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

---

# Git Workflow:
```
# Create a branch
git checkout -b feature/<short-description>

# Stage changes
git add .

# Commit
git commit -m "feat(auth): add login form"

# Push branch
git push origin feature/<short-description>
```

# ✅ Status Checks & CI:
- All PRs must pass automated tests, linters, and deploy previews
- Merging is blocked if checks fail
- Only the repo owner can merge after checks pass

Additional Notes:
- Always pull the latest main before starting a branch:
```
git checkout main
git pull origin main
git checkout feature/addLoginPage
```
- Keep branches short-lived — delete after merging
- Follow branch, commit, and PR naming conventions strictly
- For questions about workflow or versioning, contact the repo owner

🤝 Thank you for contributing! Following these guidelines helps the whole team keep the project organized and stable.
