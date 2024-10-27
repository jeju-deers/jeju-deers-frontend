module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        green: "#0A281E",
        "green-dark": "#0C2F23",
        blue: "#69A6FF",
        "gray-100": "F9F9FA",
        "gray-200": "#F0F1F3",
        "gray-300": "#EBEBEB",
        "gray-400": "#DFDFDF",
        "gray-500": "#C8C8C8",
        "gray-1000": "#6B6B6B",
      },
      width: {
        75: "300px",
        100: "400px",
        125: "500px",
        145: "580px",
        150: "600px",
        184: "735px",
        235: "940px",
      },
      minWidth: {
        235: "940px",
        250: "1000px",
        363: "1452px",
      },
      maxWidth: {
        300: "1200px",
        428: "1712px",
      },
      height: {
        17.5: "70px",
        75: "300px",
        137.5: "550px",
        "6/10-screen": "60vh",
      },
      fontSize: {
        1.75: "28px",
        2.5: "40px",
      },
    },
  },
  plugins: [],
};
