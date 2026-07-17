import { ReactNode } from "react";
import { useTranslatedText } from "../hooks/useTranslatedText";

interface Props {
  children: string;
}

export default function TranslateText({ children }: Props) {
  const translated = useTranslatedText(children);

  return <>{translated}</>;
}