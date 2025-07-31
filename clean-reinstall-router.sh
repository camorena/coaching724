#!/bin/bash

# Navigate to the web app directory
cd apps/web

# Remove existing react-router-dom
pnpm remove react-router-dom

# Install the latest version
pnpm add react-router-dom@latest

# Go back to project root
cd ../..

# Run the dev server
pnpm dev
