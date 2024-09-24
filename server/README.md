# Server Setup

This document outlines the setup process for the server-side of our project.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

## Folder Structure

After setup, your project structure should look like this:

````
server/
│
├── src/
│   └── index.ts
│
├── .huserver/
│
├── .husky/
│ └── pre-commit
│
├── .eslintrc.js
├── .prettierrc
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md



## Setup Steps

1. Initialize the project:
   ```bash
   npm init -y
````

2. Install necessary dependencies:

   ```bash
   npm install express typescript ts-node @types/express @types/node
   ```

3. Install development dependencies:

   ```bash
   npm install --save-dev nodemon eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier
   ```

4. Set up TypeScript configuration:
   Create a `tsconfig.json` file in the root directory with the following content:

   ```json
   {
     "compilerOptions": {
       "target": "es6",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true
     }
   }
   ```

5. Set up ESLint configuration:
   Create a `.eslintrc.js` file in the root directory with the following content:

   ```javascript
   module.exports = {
     parser: "@typescript-eslint/parser",
     extends: [
       "plugin:@typescript-eslint/recommended",
       "prettier/@typescript-eslint",
       "plugin:prettier/recommended",
     ],
     parserOptions: {
       ecmaVersion: 2020,
       sourceType: "module",
     },
     rules: {},
   };
   ```

6. Set up Prettier configuration:
   Create a `.prettierrc` file in the root directory with the following content:

   ```json
   {
     "semi": true,
     "trailingComma": "all",
     "singleQuote": true,
     "printWidth": 120,
     "tabWidth": 2
   }
   ```

7. Install and set up Husky and lint-staged:

   ```bash
   npm install --save-dev husky lint-staged
   npx husky install
   npm pkg set scripts.prepare="husky install"
   npx husky set .husky/pre-commit "npx lint-staged"
   ```

8. Configure lint-staged:
   Add the following to your `package.json`:

   ```json
   "lint-staged": {
     "*.{js,ts}": [
       "eslint --fix",
       "prettier --write"
     ]
   }
   ```

9. Update `package.json` scripts:
   Add the following scripts to your `package.json`:

   ```json
   "scripts": {
     "start": "node dist/index.js",
     "dev": "nodemon src/index.ts",
     "build": "tsc",
     "lint": "eslint . --ext .ts",
     "format": "prettier --write \"src/**/*.ts\""
   }
   ```

10. Create a basic Express server:
    Create a file `src/index.ts` with a basic Express server setup.

11. Test your setup:
    Run `npm run dev` to start the development server.

## Usage

- `npm run dev`: Start the development server with hot-reloading
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled JavaScript
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier

Remember to commit your changes to trigger the pre-commit hook and test your Husky setup.
