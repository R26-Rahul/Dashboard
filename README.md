# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
#### Working on react and created Dashboard 
## uses step by step 
```
npm create vite@latest my-project
cd my-project

npm install

npm install tailwindcss @tailwindcss/vite

npm run dev
```
- install Tailwindcss in your project  `npm install tailwindcss @tailwindcss/vite`
- edit your  vite.config.js and add `import tailwindcss from '@tailwindcss/vite` and `tailwindcss(),` insite plugins example below: 

    ```
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [

        tailwindcss(),
    ],
    })

    ```
- add in main css `@import "tailwindcss";`

- use dotenv file and configration 
- using rechart `npm install recharts` for chart 
- using icon `npm install lucide-react` example below: 
    ```
    import { Camera } from 'lucide-react';

    // Usage
    const App = () => {
    return <Camera color="red" size={48} />;
    };

    export default App;
    ```
- using hooks `useState`