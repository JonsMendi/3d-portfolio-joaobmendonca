import { useEffect, useState } from "react";

// Adjust this hook or create a similar one for tablet screens
const useIsTabletOrSmaller = (): boolean => {
    const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsTabletOrSmaller(window.innerWidth <= 1500);
      };
  
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
  
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    return isTabletOrSmaller;
  };

export default useIsTabletOrSmaller;
  