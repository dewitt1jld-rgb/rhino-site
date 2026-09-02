import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingImage from "@/components/TrainingImage";
import TrainingLayout from "@/components/TrainingLayout";
import TrainingPageHeader from "@/components/TrainingPageHeader";
import Link from "next/link";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const images = {
  main: "https://rhino-training-cdn.b-cdn.net/old-fab-test/images/old-fab-test-01-main-screen.png",
};

export default function OldFabTestPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <TrainingPageHeader
          breadcrumb="Rhino Training / Machine Setup"
          language={language}
          onLanguageChange={changeLanguage}
        />

        <section className="heroPanel">
          <h1>Old Fab Test</h1>

          <p>
            {isSpanish
              ? "Esta es la pantalla original de Fab Test. Aunque todavía puede utilizarse, en gran parte ha sido reemplazada por la nueva pantalla Fab Test, que es más potente y más fácil de usar."
              : "This is the original Fab Test screen. While still usable, it has largely been replaced by the newer Fab Test screen which is more powerful and easier to use."}
          </p>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Pantalla Old Fab Test"
                : "Old Fab Test Screen"}
            </h2>

            <p>
              {isSpanish
                ? "Esta pantalla fue diseñada hace mucho tiempo y no es tan fácil de usar como la versión más nueva."
                : "This screen was designed a long time ago and is not as user friendly as the newer version."}
            </p>
          </div>

          <TrainingImage
            src={images.main}
            alt="Old Fab Test main screen"
            tall
          />

          <p className="helperText">
            {isSpanish
              ? "Aunque todavía puede utilizar esta pantalla, se recomienda ampliamente utilizar la nueva pantalla Fab Test siempre que sea posible."
              : "While you can still use this screen, it is strongly recommended to use the newer Fab Test screen whenever possible."}
          </p>

          <div className="callout warning">
            <p>
              {isSpanish
                ? "La nueva pantalla Fab Test tiene más capacidades, un mejor workflow y una mejor experiencia de uso. Esta pantalla debe utilizarse principalmente si ya está familiarizado con ella o si está trabajando con setups antiguos."
                : "The new Fab Test screen has more capabilities, better workflow, and improved usability. This screen should mainly be used only if you are already familiar with it or working on older setups."}
            </p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHeader">
            <h2>
              {isSpanish
                ? "Recomendación"
                : "Recommendation"}
            </h2>

            <p>
              {isSpanish
                ? "Para la mayoría de los usuarios, cambiar a la nueva pantalla Fab Test mejorará la velocidad y reducirá la confusión."
                : "For most users, switching to the new Fab Test screen will improve speed and reduce confusion."}
            </p>
          </div>

          <div className="callout info">
            <p>
              {isSpanish
                ? "👉 Utilice la nueva pantalla Fab Test para obtener un mejor funcionamiento y más funciones."
                : "👉 Use the newer Fab Test screen instead for better performance and more features."}
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Link href="/dashboard/rhino-training/machine-setup/fab-test">
              {isSpanish
                ? "Ir a New Fab Test →"
                : "Go to New Fab Test →"}
            </Link>
          </div>
        </section>

        <div className="completionBox">
          <h2>
            {isSpanish
              ? "Descripción general de Old Fab Test completada"
              : "Old Fab Test Overview Complete"}
          </h2>

          <p>
            {isSpanish
              ? "Ahora entiende que esta pantalla está desactualizada, cuándo puede seguir utilizándose y por qué se prefiere la nueva pantalla Fab Test."
              : "You now understand that this screen is outdated and when it may still be used, along with why the newer Fab Test screen is preferred."}
          </p>
        </div>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}