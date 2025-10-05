# Deployment Instructions

This document provides step-by-step instructions for updating and deploying your portfolio to Firebase hosting.

## Prerequisites

1. Ensure you have Node.js installed
2. Ensure Firebase CLI is installed (`npm install -g firebase-tools`)
3. Ensure you're logged into Firebase (`firebase login`)

## Update and Deploy Process

### 1. Make Changes to Your Portfolio

Edit any files in the `src` directory to update your portfolio content.

### 2. Test Changes Locally

```bash
npm run dev
```

Visit http://localhost:3000 to preview your changes.

### 3. Build the Application

```bash
npm run build
```

This creates an optimized production build.

### 4. Export Static Files

```bash
npm run export
```

This generates static files in the `out` directory.

### 5. Deploy to Firebase

```bash
firebase deploy --only hosting
```

Or use the shortcut command:

```bash
npm run deploy
```

## Directory Structure

- `src/` - Source code for your portfolio
- `.next/` - Build output (server-side files)
- `out/` - Static export (used for Firebase hosting)
- `firebase.json` - Firebase hosting configuration
- `.firebaserc` - Firebase project configuration

## Troubleshooting

### "firebase: command not found"

Install Firebase CLI globally:

```bash
npm install -g firebase-tools
```

### Deployment Issues

1. Ensure you're in the `modern-portfolio` directory
2. Verify you're logged into the correct Firebase account
3. Check that the "moj-nu" project exists in your Firebase console

### Build Issues

1. Clear build cache: Delete `.next` and `out` directories
2. Reinstall dependencies: `npm install`
3. Run build again: `npm run build && npm run export`

## Custom Domain Setup

To use a custom domain:

1. Purchase a domain from a registrar
2. In Firebase Console:
   - Go to Hosting section
   - Click "Connect domain"
   - Follow the instructions to verify ownership
   - Update DNS records as instructed

## Automated Deployments

Consider setting up GitHub Actions for automated deployments:

1. Create a GitHub repository for your portfolio
2. Set up GitHub Actions workflow to run build and deploy on push to main branch
3. Add Firebase token as a secret in GitHub repository settings
