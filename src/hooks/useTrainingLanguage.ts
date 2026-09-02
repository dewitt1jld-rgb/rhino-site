import {
  useState,
} from "react";

export type TrainingLanguage =
  | "en"
  | "es";

export function useTrainingLanguage() {
  const [
    language,
    setLanguage,
  ] =
    useState<TrainingLanguage>(
      "en"
    );

  function changeLanguage(
    nextLanguage:
      TrainingLanguage
  ) {
    setLanguage(
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