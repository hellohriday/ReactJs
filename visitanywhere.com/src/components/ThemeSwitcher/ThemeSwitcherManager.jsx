import React, { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider, ThemeContext } from "./context/Theme";

function ThemeSwitcherManager() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto dark:selection:">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ThemeSwitcherManager;
