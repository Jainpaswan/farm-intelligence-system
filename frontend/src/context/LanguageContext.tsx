import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { translateText } from "../services/translation";

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  translate: (text: string) => Promise<string>;
}

const LanguageContext = createContext<LanguageContextType>(null!);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState("EN");

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const translate = async (text: string) => {
    if (language === "EN") return text;

    return await translateText(text, language);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);