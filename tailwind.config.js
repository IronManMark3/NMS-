module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          red: "var(--primary-red)",
          blue: "var(--primary-blue)",
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'book-antiqua': ['Book Antiqua', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'cormorant-sc': ['Cormorant SC', 'serif'],
        'fustat': ['Fustat', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(80deg, #c30015 0%, #0025ae 100%)',
        'gradient-secondary': 'linear-gradient(53deg, #c30015 0%, #0025ae 100%)',
        'gradient-overlay': 'linear-gradient(53deg, #c30015a0 0%, #0025aea0 100%)',
      },
    },
  },
  plugins: [],
};