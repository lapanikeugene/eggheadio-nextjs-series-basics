const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  //just in time mode for tailwind. 
  mode:'jit',
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
  plugins: [

  ],

  //global import when you need preset for many apps. 
  presets:[
    require('../../tailwind-workspace-preset')
  ]
};
