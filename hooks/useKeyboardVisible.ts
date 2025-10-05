import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useKeyboardVisible = () => {
    const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const showSub = Keyboard.addListener("keyboardDidShow", () =>
          setIsVisible(true)
        );
        const hideSub = Keyboard.addListener("keyboardDidHide", () =>
          setIsVisible(false)
        );
    
        return () => {
          showSub.remove();
          hideSub.remove();
        };
      }, []);

      return isVisible
}

export default useKeyboardVisible