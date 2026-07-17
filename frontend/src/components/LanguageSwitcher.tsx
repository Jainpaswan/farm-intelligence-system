import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {

    const { language, changeLanguage } = useLanguage();

    return (

        <select
            value={language}
            onChange={(e)=>changeLanguage(e.target.value)}
        >

            <option value="EN">English</option>
            <option value="HI">Hindi</option>
            <option value="BN">Bengali</option>

        </select>

    )

}