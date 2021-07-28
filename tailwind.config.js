module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat,Helvetica,sans-serif",
        titles: "Raleway, Helvetica,sans-serif",
      },
      colors: {
        primary: {
          DEFAULT: "#00cac1",
          50: "#f5fbfa",
          100: "#C8EDEB",
          200: "#A2E0DD",
          300: "#7CD3CF",
          400: "#55C7C1",
          500: "#3AAFA9",
          600: "#2D8984",
          700: "#21625F",
          800: "#143C3A",
          900: "#071615",
        },
        dark: {
          DEFAULT: "#23263A",
          50: "#8A90B8",
          100: "#7A81AF",
          200: "#5D6599",
          300: "#49507A",
          400: "#363B5A",
          500: "#23263A",
          600: "#1F2235",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        "block-code-color": "#afafaf",
        secondary: "#f35b8e",
        "magister-color": "#013A81",
        "cbi-color": "#2F7198",
        "wetaca-color": "#E2655E",
        "redegal-color": "#318DCC",
        "baby-color": "#E0008A",
        "trevenque-color": "#1EBD00",
      },
      gridTemplateColumns: {
        // Simple 24 column grid
        24: "repeat(24, minmax(0, 1fr))",
        36: "repeat(36, minmax(0, 1fr))",
        48: "repeat(48, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-24": "span 24 / span 24",
        "span-36": "span 36 / span 36",
        "span-48": "span 48 / span 48",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        26: "26",
        47: "47",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
        19: "19",
        20: "20",
        21: "21",
        22: "22",
        23: "23",
        24: "24",
        26: "26",
        47: "47",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#FFF",
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.primary.DEFAULT"),
              fontWeight: "normal",
              margin: "1.5rem 0 0",
              fontFamily: theme("fontFamily.titles"),
            },
            p: {
              margin: "0",
            },
            pre: {
              backgroundColor: "transparent",
              padding: 0,
            },
            code: {
              color: theme("colors.block-code-color"),
              padding: theme("spacing.1"),
              display: "block",
              fontWeight: "normal",
              borderRadius: ".125rem",
              marginTop: ".5rem",
            },
            "code::before": false,
            "code::after": false,
            "ol > li > *:first-child": {
              marginTop: "0",
            },
            "ol > li > *:last-child": {
              marginBottom: "0",
            },
            a: {
              color: theme("colors.primary.DEFAULT"),
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            strong: {
              color: theme("colors.primary.DEFAULT"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      borderStyle: ["hover", "focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
