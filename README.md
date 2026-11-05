# Task Manager

An academic React and Next.js project for managing tasks through reusable components and shared state.

## Features
- Add tasks with a title and description.
- Change status between Pending, In Progress, and Completed.
- Delete tasks and display an empty state when no tasks exist.
- Typed Context API, immutable state updates, and accessible form labels.

## Stack
Next.js, React, TypeScript, CSS and React Context.

## Run locally
Use Node.js 20.9 or newer and npm.
```bash
npm ci
npm run dev
```
Open http://localhost:3000. Add a task, change its status, then delete it.

## Checks
```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Scope
This is a single-user learning project. Tasks are stored in memory and are lost when the page reloads. It does not include authentication, a database, or team synchronization.
