import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-6 md:top-5 z-50 w-10 h-10 rounded-full border border-dark/20 dark:border-light/20 flex items-center justify-center hover:border-accent transition-colors bg-dark/5 dark:bg-light/5 backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
