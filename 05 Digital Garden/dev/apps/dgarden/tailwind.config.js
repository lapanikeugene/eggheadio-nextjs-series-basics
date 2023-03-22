const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // cut size of css by removing of all unusing tailwind classes
  //createGlobPatternsForDependencies - automatically get info about all new added components.  
  purge:[join(__dirname,
    'pages/**/*.{js,ts,jsx, tsx}'), createGlobPatternsForDependencies(__dirname)],
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
