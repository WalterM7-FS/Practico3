import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(() => {
      const storedValue = localStorage.getItem('modal');
      return storedValue === "true";
      })
    console.log(`modal get -> ${isModalOpen}`)

    const [theme, setTheme] = useState(() => {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme || 'light';
    });

      useEffect(() => {

         localStorage.setItem("modal", isModalOpen.toString())
        
      }, [isModalOpen]);
        console.log(`modal set -> ${isModalOpen}`)

        useEffect(() => {
          localStorage.setItem("theme", theme);
          document.documentElement.setAttribute('data-theme', theme);
        }, [theme]);

  const onClose = () => setIsModalOpen(false); 
    
  const onOpenModal = () => setIsModalOpen(true);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  
    
 

  return (
    <ThemeContext.Provider value={{ isModalOpen, setIsModalOpen, onClose, onOpenModal, theme, toggleTheme} }>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)