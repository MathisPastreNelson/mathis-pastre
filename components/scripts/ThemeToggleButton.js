// components/theme.js

export default {
  getThemeFromLocalStorage() {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  },
  setThemeInLocalStorage(theme) {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  },
  updateThemeClass(theme) {
    const body = document.querySelector("body");
    if (theme === "dark") {
      body.classList.remove("light");
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  },
};
