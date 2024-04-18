/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'cc-black': '#363537',
      'cc-beige': '#fff9e7',
      'cc-green': '#e0f1b1',
      'cc-pink': {
        100: '#fab9d0',
        200: '#EFAAC4'
      },  
      'cc-blue': {
        100: '#abe8e6',
        200: '#98D4D3'
      }
    },
    extend: {
      fontFamily: {
        cocogoose: ['Cocogoose', 'sans'], // regular
        'cocogoose-semi': ['Cocogoose-Semilight', 'sans'], // semilight
        'cocogoose-semi-italic': ['Cocogoose-Semilight-Italic', 'sans'],
        'cocogoose-ultra': ['Cocogoose-Ultralight', 'sans'], // ultralight 
        'cocogoose-ultra-italic': ['Cocogoose-Ultralight-Italic', 'sans'],
        'xxck': ['XiaoXinChaoKu'],
        'hoonddukbokki': ['HoonDdukbokki']
      },
    },
  },
  plugins: [],
}
