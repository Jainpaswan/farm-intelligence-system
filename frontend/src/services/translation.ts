export async function translateText(text: string, targetLang: string) {
  const response = await fetch("http://localhost:8000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      target_lang: targetLang,
    }),
  });

  if (!response.ok) {
    throw new Error("Translation failed");
  }

  const data = await response.json();

  return data.translations[0].text;
}