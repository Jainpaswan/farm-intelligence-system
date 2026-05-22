import Groq from "groq-sdk";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

if (!apiKey) {
  throw new Error(
    "VITE_GROQ_API_KEY missing"
  );
}

export const groq = new Groq({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});