/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#c9a74a",
        "obsidian": "#0D0D12",
        "slate-dark": "#2A2A35",
        "ivory": "#FAF8F5",
        "background-light": "#f8f7f6",
        "background-dark": "#0D0D12",
        // Fallback para manter as antigas, se usadas
        "champagne": '#C9A84C',
        "slate": '#2A2A35',
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "serif": ["'Playfair Display'", "serif"],
        "serif-italic": ["'Playfair Display'", "serif"],
        "mono": ["'JetBrains Mono'", "monospace"],
        // Fallback
        "inter": ['Inter', 'sans-serif'],
        "playfair": ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
