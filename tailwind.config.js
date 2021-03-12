const { FaBorderNone } = require("react-icons/fa");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3AAFA9",
        "primary-light": "#f5fbfa",
        "primary-dark": "#379392",
        secondary: "#f35b8e",
        "canary-color": "#E6D72A",
        "magister-color": "#013A81",
        "cbi-color": "#2F7198",
        "wetaca-color": "#E2655E",
        "redegal-color": "#318DCC",
        "baby-color": "#E0008A",
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
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.primary"),
              fontWeight: "normal",
              margin: "1.5rem 0 0",
            },
            a: {
              color: theme("colors.primary"),
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.primary.darker"),
              },
            },
            p: {
              margin: "0",
            },
            code: {
              color: theme("colors.secondary"),
              backgroundColor: theme("colors.gray.100"),
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
  plugins: [require("@tailwindcss/typography")],
};
