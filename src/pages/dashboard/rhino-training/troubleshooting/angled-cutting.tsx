import TrainingLayout from "@/components/TrainingLayout";
import RequireActiveAccess from "@/components/RequireActiveAccess";
import TrainingPageHeader from "@/components/TrainingPageHeader";

import {
  useTrainingLanguage,
} from "@/hooks/useTrainingLanguage";

const miterBevelImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-01-miter-bevel.png";

const frameStraightImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-02-frame-straight.png";

const anglesHorizontalImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-03-angles-horizontals.png";

const metalFabImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-04-metal-fabrication.png";

const angleHelpImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-05-angle-help.png";

const changeFabricationImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-06-change-fabrication.png";

const changeStickFabImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-07-change-stick-fab.png";

const matingBackCutImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-08-mating-back-cut.png";

const angleTypeImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-09-angle-type.png";

const leadingAngleTypeImage =
  "https://rhino-training-cdn.b-cdn.net/troubleshooting/angled-cutting/images/angled-cutting-10-leading-angle-type.png";

export default function AngledCuttingPage() {
  const {
    language,
    isSpanish,
    changeLanguage,
  } = useTrainingLanguage();

  return (
    <RequireActiveAccess>
      <TrainingLayout>
        <div className="pageWrap">
          <TrainingPageHeader
            breadcrumb="Rhino Training / Troubleshooting / Angled Cutting"
            language={language}
            onLanguageChange={changeLanguage}
          />

          <section className="heroPanel">
            <div className="heroEyebrow">
              Troubleshooting
            </div>

            <h1>Angled Cutting</h1>

            <p className="helperText">
              {isSpanish
                ? "Angled Cutting funciona de la misma manera en casi todas las máquinas. Las máquinas más nuevas de la serie 5000 ahora pueden realizar Compound Cuts. Esta página explica cómo funcionan los Miters y Bevels normales, cómo se agregan angles en Glazier Studio y PartnerPak, y cómo se manejan los Compound Cuts."
                : "Angled cutting works the same for almost every machine. The newer 5000 series machines are now capable of doing compound cuts. This page explains how normal miters and bevels work, how angles are added in Glazier Studio and PartnerPak, and how compound cuts are handled."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Conceptos básicos de Angles"
                    : "Angle Basics"}
                </div>

                <h2>Miter vs Bevel</h2>
              </div>
            </div>

            <img
              src={miterBevelImage}
              alt="Miter and bevel saw explanation"
              className="fullImage"
            />

            <div className="callout info">
              {isSpanish
                ? "En Glazier Studio y PartnerPak, el software reconoce cortes entre -45° y 45°. En la saw, esos mismos angles se convierten a 45°–135°. Un corte de 0° en el software técnicamente es un corte de 90° en la máquina."
                : "In Glazier Studio and PartnerPak, the software recognizes cuts between -45° and 45°. On the saw, those same angles convert to 45°–135°. A 0° cut in software is technically a 90° cut on the machine."}
            </div>

            <p>
              {isSpanish
                ? "Para programming, ignore por completo cómo se ve físicamente la saw al realizar los cortes y concéntrese únicamente en los diagramas de angles mostrados arriba."
                : "For programming, completely ignore how the saw physically looks at the cuts and focus only on the angle diagrams above."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Métodos de Programming"
                    : "Programming Methods"}
                </div>

                <h2>
                  {isSpanish
                    ? "Tres formas de agregar Angles"
                    : "Three Ways To Add Angles"}
                </h2>
              </div>
            </div>

            <p>
              {isSpanish
                ? "Los angles pueden ingresarse en el programa de tres maneras diferentes:"
                : "Angles can be entered into the program three different ways:"}
            </p>

            <ul className="bulletList">
              <li>Metal Fabrication</li>
              <li>Change Fabrications</li>
              <li>Mating Piece Parameters</li>
            </ul>

            <div className="callout warning">
              {isSpanish
                ? "Cada vez que crea un out-of-square frame, los angles visibles del frame se calculan automáticamente y se envían a Metal Fabrication. Todo lo que aparece a continuación es específicamente para agregar manualmente custom angles, como Corner Mullions y Compound Cuts."
                : "Any time you create an out-of-square frame, the visible frame angles are automatically calculated and sent into Metal Fabrication. Everything below is specifically for manually adding custom angles such as corner mullions and compound cuts."}
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Método 1"
                    : "Method 1"}
                </div>

                <h2>
                  {isSpanish
                    ? "Angles mediante Metal Fabrication"
                    : "Angles Through Metal Fabrication"}
                </h2>
              </div>
            </div>

            <p>
              {isSpanish
                ? "Esta es la forma más fácil, pero también la más lenta, de agregar angles a los sticks. En Frame Builder, construiría todo square y se aseguraría de que el bay con los angled cuts coincida con el punto más largo del angled member."
                : "This is the easiest but also slowest way to add angles to sticks. In the frame builder you would build everything square and make sure the bay with angled cuts matches the longest point of the angled member."}
            </p>

            <p>
              {isSpanish ? (
                <>
                  En el ejemplo de abajo, el daylight DEBERÍA ser{" "}
                  <strong>46&quot;</strong>, pero debido a que el horizontal
                  necesita medir <strong>50&quot;</strong> hasta el long point,
                  el DLO se cambia temporalmente a <strong>50&quot;</strong>{" "}
                  también.
                </>
              ) : (
                <>
                  In the example below, the daylight SHOULD be 46&quot;, but
                  because the horizontal needs to be 50&quot; to the long point,
                  the DLO is temporarily made 50&quot; as well.
                </>
              )}
            </p>

            <div className="imageGrid two">
              <img
                src={frameStraightImage}
                alt="Straight frame example"
              />

              <img
                src={anglesHorizontalImage}
                alt="Angled frame example"
              />
            </div>

            <p>
              {isSpanish
                ? "Una vez que el frame se lleva a Metal Fabrication, puede agregar manualmente cualquier angle que desee al stick. También puede ajustar manualmente el Overall Stick Length y los End Extensions para obtener exactamente el cut size que necesita."
                : "Once the frame is brought into metal fabrication, you can manually add any angle you want to the stick. You can also manually adjust the overall stick lengths and end extensions to get the exact cut size you need."}
            </p>

            <img
              src={metalFabImage}
              alt="Metal fabrication angle columns"
              className="fullImage"
            />

            <div className="imageGrid two">
              <img
                src={angleHelpImage}
                alt="Angle help button"
              />

              <div className="callout info centered">
                {isSpanish
                  ? "La imagen de Angle Help que aparece arriba puede encontrarse en las pantallas de GS y PPAK haciendo clic en el icono de Angle Help dentro de Metal Fabrication."
                  : "The angle help image above can be found in the GS and PPAK screens by clicking the angle help icon inside the Metal Fabrication screen."}
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Método 2"
                    : "Method 2"}
                </div>

                <h2>
                  {isSpanish
                    ? "Angles mediante Change Fabrications"
                    : "Angles Through Change Fabrications"}
                </h2>
              </div>
            </div>

            <div className="imageGrid two">
              <img
                src={changeFabricationImage}
                alt="Change fabrications menu"
              />

              <div className="callout info centered">
                {isSpanish
                  ? 'Al construir un frame, seleccione el stick, haga clic derecho y seleccione "Change Fabrications".'
                  : 'When building a frame, select the stick, right click, and choose "Change Fabrications".'}
              </div>
            </div>

            <img
              src={changeStickFabImage}
              alt="Change stick fabrication screen"
              className="mediumImage"
            />

            <div className="stickEndGrid">
              <div className="stickEndCard">
                <h3>Vertical Stick</h3>

                <div className="stickLine">
                  <strong>Stick End 1</strong>
                  <span>
                    {isSpanish
                      ? "Bottom"
                      : "Bottom"}
                  </span>
                </div>

                <div className="stickLine">
                  <strong>Stick End 2</strong>
                  <span>
                    {isSpanish
                      ? "Top"
                      : "Top"}
                  </span>
                </div>
              </div>

              <div className="stickEndCard">
                <h3>Horizontal Stick</h3>

                <div className="stickLine">
                  <strong>Stick End 1</strong>
                  <span>
                    {isSpanish
                      ? "Left"
                      : "Left"}
                  </span>
                </div>

                <div className="stickLine">
                  <strong>Stick End 2</strong>
                  <span>
                    {isSpanish
                      ? "Right"
                      : "Right"}
                  </span>
                </div>
              </div>
            </div>

            <div className="callout info">
              {isSpanish
                ? "Cada end le permite especificar:"
                : "Each end allows you to specify:"}

              <ul className="bulletList">
                <li>Angle Type</li>
                <li>Angle Degree</li>
                <li>
                  {isSpanish
                    ? "Length Adjustment"
                    : "Length adjustment"}
                </li>
              </ul>
            </div>

            <p>
              {isSpanish
                ? "En Angle Type, seleccionaría Miter o Bevel. Compound solamente funciona si tiene una máquina de la serie 5000."
                : "Under Angle Type you would choose either Miter or Bevel. Compound only works if you have a 5000 series machine."}
            </p>

            <p>
              {isSpanish
                ? "Esta pantalla también permite End Extensions, lo que significa que puede mantener el DLO correcto mientras extiende el Overall Stick Length para que coincida con el tamaño del angled cut."
                : "This screen also allows end extensions, which means you can keep the DLO correct while extending the overall stick length to match the angled cut size."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  {isSpanish
                    ? "Método 3"
                    : "Method 3"}
                </div>

                <h2>
                  {isSpanish
                    ? "Angles creados mediante Mating Piece"
                    : "Angles Created By Mating Piece"}
                </h2>
              </div>
            </div>

            <p>
              {isSpanish
                ? "Esta función fue diseñada principalmente para corners. La información que aparece a continuación se coloca directamente en el Corner Member."
                : "This feature was mainly designed for corners. The information below is placed directly on the corner member itself."}
            </p>

            <p>
              {isSpanish
                ? "Cada part del programa contiene una pantalla llamada Extrusion Design Parameters."
                : "Every part in the program contains a screen called Extrusion Design Parameters."}
            </p>

            <img
              src={matingBackCutImage}
              alt="Mating back cut parameters"
              className="mediumImage"
            />

            <p>
              {isSpanish
                ? "Estos parameters le permiten indicar al software que cualquier pieza que toque un member específico debe heredar automáticamente un angle y extension específicos."
                : "These parameters allow you to tell the software that any piece touching a specific member should automatically inherit a specific angle and extension."}
            </p>

            <div className="callout danger">
              {isSpanish
                ? "El problema con este método es que no hay forma de especificar si la part pertenece al lado izquierdo o derecho de un frame."
                : "The problem with this method is there is no way to specify whether the part belongs on the left or right side of a frame."}
            </div>

            <p>
              {isSpanish
                ? "Debido a esa limitación, normalmente necesitaría Corner Members LEFT y RIGHT separados con valores de angle opuestos."
                : "Because of that limitation, you would typically need separate LEFT and RIGHT corner members with opposite angle values."}
            </p>

            <p>
              {isSpanish
                ? "Esto funciona, pero también divide su optimization porque el software ahora los reconoce como Part Numbers separados."
                : "This works, but it also splits your optimization because the software now sees them as separate part numbers."}
            </p>
          </section>

          <section className="panel">
            <div className="panelHeader">
              <div>
                <div className="sectionEyebrow">
                  Compound Cuts
                </div>

                <h2>Miters + Bevels Together</h2>
              </div>
            </div>

            <p>
              {isSpanish
                ? "Los Compound Cuts solamente pueden agregarse mediante Metal Fabrication o Change Fabrications."
                : "Compound cuts can only be added through Metal Fabrication or Change Fabrications."}
            </p>

            <p>
              {isSpanish
                ? "La diferencia es que ahora debe especificar:"
                : "The difference is that you now specify:"}
            </p>

            <ul className="bulletList">
              <li>Angle 1 = Miter</li>
              <li>Angle 2 = Bevel</li>
            </ul>

            <div className="imageGrid two">
              <img
                src={angleTypeImage}
                alt="Angle type dropdown"
              />

              <img
                src={leadingAngleTypeImage}
                alt="Leading angle type columns"
              />
            </div>

            <div className="callout warning">
              {isSpanish
                ? "Actualmente GS y PPAK no pueden dibujar visualmente frames con Compound Cuts. Normalmente necesitará dibujar el frame en CAD, calcular manualmente los Stick Lengths y angles correctos, y después ingresar los valores directamente en Metal Fabrication o Change Fabrications."
                : "Currently GS and PPAK are not capable of visually drawing frames with compound cuts. You typically need to draw the frame in CAD, calculate the correct stick lengths and angles manually, then enter the values directly into Metal Fabrication or Change Fabrications."}
            </div>
          </section>
        </div>

        <style jsx>{`
          .imageGrid {
            display: grid;
            gap: 24px;
            margin-top: 28px;
            align-items: center;
          }

          .imageGrid.two {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }

          .fullImage,
          .mediumImage,
          .imageGrid img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 16px;
            margin: 0 auto;
          }

          .stickEndGrid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-top: 28px;
          }

          .stickEndCard {
            background: rgba(15, 23, 42, 0.65);
            border: 1px solid rgba(245, 158, 11, 0.35);
            border-radius: 20px;
            padding: 28px;
            text-align: center;
          }

          .stickEndCard h3 {
            color: #f59e0b;
            margin-bottom: 20px;
            font-size: 1.4rem;
          }

          .stickLine {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .stickLine:last-child {
            border-bottom: none;
          }

          .stickLine strong {
            color: white;
          }

          .stickLine span {
            color: #d1d5db;
          }

          .fullImage {
            max-width: 1100px;
            margin-top: 28px;
          }

          .mediumImage {
            max-width: 850px;
            margin-top: 28px;
          }

          .bulletList {
            margin-top: 18px;
            padding-left: 22px;
            line-height: 1.8;
          }

          .centered {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          @media (max-width: 768px) {
            .imageGrid.two {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </TrainingLayout>
    </RequireActiveAccess>
  );
}