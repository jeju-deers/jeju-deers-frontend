module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        green: "#0A281E",
        "green-dark": "#0C2F23",
        "green-light": "#285E67",
        blue: "#69A6FF",
        "gray-300": "#EBEBEB",
        "gray-400": "#DFDFDF",
        "gray-450": "#CCCCCC",
        "gray-500": "#C8C8C8",
        "gray-600": "#A5A5A5",
        "gray-1000": "#6B6B6B",
      },
      width: {
        25: "100px",
        28.25: "113px",
        33: "132px",
        75: "300px",
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
        "sm-base": "15px",
        4.5: "18px",
        8: "32px",
        1.75: "28px",
        2.5: "40px",
      },
      borderRadius: {
        "lg-xl": "10px",
      },
    },
  },
  plugins: [],
};
