import { useTheme } from "../context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={theme === 'light' ? "bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer":"bg-cyan-200 text-blue-900 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer" }
     onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

export default ThemeToggleButton;