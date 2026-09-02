import {
  useEffect,
  useState,
} from "react";

export type TrainingLanguage =
  | "en"
  | "es";

const STORAGE_KEY =
  "rhino-training-language";

export function useTrainingLanguage() {
  const [
    language,
    setLanguage,
  ] =
    useState<TrainingLanguage>(
      "en"
    );

  useEffect(
    () => {
      const savedLanguage =
        localStorage.getItem(
          STORAGE_KEY
        );

      if (
        savedLanguage ===
          "en" ||
        savedLanguage ===
          "es"
      ) {
        setLanguage(
          savedLanguage
        );
      }
    },
    []
  );

  function changeLanguage(
    nextLanguage:
      TrainingLanguage
  ) {
    setLanguage(
      nextLanguage
    );

    localStorage.setItem(
      STORAGE_KEY,
      nextLanguage
    );
  }

  return {
    language,

    isEnglish:
      language === "en",

    isSpanish:
      language === "es",

    changeLanguage,
  };
}