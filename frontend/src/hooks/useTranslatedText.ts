import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function useTranslatedText(text: string) {

    const { language, translate } = useLanguage();

    const [translated,setTranslated]=useState(text);

    useEffect(()=>{

        async function load(){

            const result=await translate(text);

            setTranslated(result);

        }

        load();

    },[language,text]);

    return translated;

}