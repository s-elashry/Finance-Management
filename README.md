# Finance Management Frontend

This project represents my learning journey while building a finance management frontend application.  
The purpose of this repository is to document the steps I followed, the structure I ended up with, and the decisions I made — both as a learning curve and as a reference for future revisits.

---

## 📌 Project Purpose

- Practice modern frontend development
- Learn and experiment with tools like **Vite**, **Vue**, and **Node.js**
- Build a foundation for a personal finance management system
- Keep track of mistakes, fixes, and improvements over time

This project is **not optimized for production** — it is focused on learning and growth.

---

## 🛠️ Tech Stack

- **Node.js** (v20+ required)
- **Vite**
- **Vue.js**
- **npm**

---

# Vue.js Installation & Project Setup Guide

This guide documents the steps I followed to install **Vue.js** and set up a new project, including installing **Node.js**, **npm**, and creating a Vue application using the official Vue CLI.

Official Vue documentation:
👉 [https://vuejs.org/guide/quick-start](https://vuejs.org/guide/quick-start)

---

## Prerequisites

Before starting, make sure you have:

* A Linux/macOS/Windows system
* Internet connection
* Terminal access

---

## 1. Install Node.js and npm (Using NVM)

Vue requires **Node.js** and **npm**. I installed Node.js on Linux  using **NVM (Node Version Manager)** with **npm**.

### Download and install NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Load NVM without restarting the shell:

```bash
. "$HOME/.nvm/nvm.sh"
```

### Install Node.js (v24)

```bash
nvm install 24
```

### Verify installation

```bash
node -v
# Expected output: v24.12.0 (dated 30-12-2025)

npm -v
# Expected output: 11.6.2 (dated 30-12-2025)
```

---

## 2. Create a New Vue Project

To create a Vue project using the **latest version**, run:

```bash
npm create vue@latest
```

You will be prompted with several configuration questions. Below are the options I selected:

```text
Project Name: Finance_Interface or <Project-Name>
Add TypeScript? → No
Add JSX Support? → No
Add Vue Router (SPA)? → No
Add Pinia (State Management)? → No
Add Vitest (Unit Testing)? → No
Add an End-to-End Testing Solution? → No
Add ESLint for Code Quality? → No
Add Prettier for Code Formatting? → No
Add Vue DevTools 7 Extension? → No
```

---

## 3. Install Dependencies & Run the Project

Navigate into the project directory:

```bash
cd Finance_Interface or cd <Project-Name>
```

Install dependencies:

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

This will start a local development server.



### Build for Production

```bash
npm run build
```

This command creates an optimized production build of the application.



# How to Add Bootstrap to Your Vue Project?

Bootstrap can be easily added to your Vue project using **npm**.

## Step 1: Install Bootstrap

Open your terminal and run the following command:

```bash
npm install bootstrap
```

## Step 2: Validate Configuration

Open **package.json**, You should be able to see

```json
{
  "dependencies": {
    "bootstrap": "^5.x.x",
    "vue": "^3.x.x"
  }
}
```

Now you are able to use bootstrap classes in your code

# How to install Tailwind CSS v4?

## Step 1: Run the following command to install Tailwind CSS v4 along with its Vite plugin

```bash
npm install -D tailwindcss @tailwindcss/vite
```

## Step 2: Configure Vite to Use Tailwind CSS

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

## Step 3: Create CSS file and add the following in the file

```css
@import "tailwindcss";
```

## Last Step : Add the style reference in main.js
```js
import 'path/style.css'
```

# How to install flowbite for Vue?

## Step 1: You need to follow the installation procedures for Tailwind CSS v

## Step 2: Install Flowbite and Flowbite Vue as part of dependencies:

```bash
npm i flowbite flowbite-vue
```

## Step 3: Update style.css file
```css
/* import Flowbite Vue styles */
@import "flowbite/src/themes/default";
```

## Step 4: Now you can use Flowbite Vue anywhere in your project.



# Folder Structure
The folder structure of components is something that has not been standardized yet around the
industry and this can differ from developer to developer.

I am going to follow a hierarchy that was proposed by a book named "Vue.js 3 for Beginners
" by Simone Cuomo.

The hierarchy is Atomic design. 
The Atomic Design methodology created by Brad Frost (https://bradfrost.com/) is a design methodology
for crafting robust design systems with an explicit order and hierarchy - blog.kamathrohan.com

> **Atomic design layers are as follows:**
> - **Sub-atomic:** The sub-atomic layers include all the variables and settings that will be used within
>   the application. These are not going to be “components,” but just CSS variables that will be shared
>   globally within our application. In the sub-atomic layer, we find colors, typography, and spacing.
> - **Atoms:** These are components that will define individual HTML elements, so, for example, a
>   button, an icon, and an input text are all part of atoms.
> - **Molecules:** Molecules are made up of two or more atoms or plain HTML elements. For example,
>   an input field with a label and an error is a molecule.
> - **Organisms:** These are UI components that make up a standalone section that can be used on the
>   site. For example, a login form is an organism, a slideshow is an organism, and so is a footer.
> - **Templates:** These are commonly called layouts within the frontend ecosystem and are used to
>   define a reusable structure used by multiple pages.
> - **Pages:** These define our web application page or subpage where data is loaded and components
>   are composed.





**To Be Continued**
