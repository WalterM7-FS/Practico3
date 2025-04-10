import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(() => {
      const storedValue = localStorage.getItem('modal');
      return storedValue === "true" || ["false"];
      })
    console.log(`modal get -> ${isModalOpen}`)



      useEffect(() => {

         localStorage.setItem("modal", isModalOpen.toString())
        
      }, [isModalOpen]);
        console.log(`modal set -> ${isModalOpen}`)

  const onClose = () => {setIsModalOpen(false) 
    
  }
      
  

  const onOpenModal = () => {setIsModalOpen(true)
  }
    

   /*const toggleModal = () => { 
        setIsModalOpen(true)
        localStorage.setItem('modoOscuro')
    }*/
  /*useEffect(() => {
    const themeSave = localStorage.getItem('modoOscuro')
    if(themeSave) {
        setIsModalOpen(true)
    }
  }, []);*/

  

  return (
    <ThemeContext.Provider value={{ isModalOpen, setIsModalOpen, onClose, onOpenModal} }>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)