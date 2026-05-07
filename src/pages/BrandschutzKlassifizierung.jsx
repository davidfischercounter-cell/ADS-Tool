import "../styles/dashboard.css";
import "../styles/styles.css";

function BrandschutzKlassifizierung() {
  return (
    <div className="page content-page">
      <div className="page-banner">
        <h1>Klassifizierung</h1>
        <div className="page-line"></div>
      </div>

      <section className="content-card">
        <h2>Neue Bezeichnungen im Brandschutz</h2>
        <p>
          Die alten Bezeichnungen wie F30, F60 oder F90 werden heute häufig
          durch europäische Klassifizierungen wie R30, REI30 oder EI30 ergänzt
          oder ersetzt. Die Buchstaben beschreiben, welche Eigenschaft ein
          Bauteil im Brandfall erfüllen muss.
        </p>
      </section>

      <section className="content-card">
        <h2>Bedeutung der Buchstaben</h2>

        <div className="classification-grid">
          <div className="classification-card">
            <strong>R</strong>
            <span>Tragfähigkeit</span>
            <p>
              Das Bauteil bleibt im Brandfall tragfähig. Wichtig bei tragenden
              Wänden, Stützen, Balken und Decken.
            </p>
          </div>

          <div className="classification-card">
            <strong>E</strong>
            <span>Raumabschluss</span>
            <p>
              Feuer und Rauch dürfen nicht auf die andere Seite des Bauteils
              durchdringen.
            </p>
          </div>

          <div className="classification-card">
            <strong>I</strong>
            <span>Wärmedämmung</span>
            <p>
              Die Temperatur auf der dem Feuer abgewandten Seite darf nur
              begrenzt ansteigen.
            </p>
          </div>

          <div className="classification-card">
            <strong>C</strong>
            <span>Selbstschließend</span>
            <p>
              Wird vor allem bei Türen und Abschlüssen verwendet. Das Bauteil
              muss selbstständig schließen.
            </p>
          </div>

          <div className="classification-card">
            <strong>M</strong>
            <span>Mechanische Beanspruchung</span>
            <p>
              Zusätzliche Anforderung, z. B. bei Brandwänden oder Bauteilen mit
              erhöhter Stoßbeanspruchung.
            </p>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Alte und neue Klassifizierungen</h2>

        <div className="classification-table-wrapper">
          <table className="classification-table">
            <thead>
              <tr>
                <th>Alte Bezeichnung</th>
                <th>Allgemeine Bedeutung</th>
                <th>Tragendes Bauteil</th>
                <th>Tragend mit Raumabschluss</th>
                <th>Nichttragende Wand / Abschluss</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>F30</td>
                <td>Feuerhemmend</td>
                <td>R30</td>
                <td>REI30</td>
                <td>EI30</td>
              </tr>

              <tr>
                <td>F60</td>
                <td>Hochfeuerhemmend</td>
                <td>R60</td>
                <td>REI60</td>
                <td>EI60</td>
              </tr>

              <tr>
                <td>F90</td>
                <td>Feuerbeständig</td>
                <td>R90</td>
                <td>REI90</td>
                <td>EI90</td>
              </tr>

              <tr>
                <td>F120</td>
                <td>Feuerwiderstand 120 Minuten</td>
                <td>R120</td>
                <td>REI120</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-card">
        <h2>Typische Beispiele</h2>

        <div className="example-row">
          <div className="example-box">
            <strong>T30</strong>
            <span>Tür mit 30 Minuten Feuerwiderstand</span>
          </div>

          <div className="example-box">
            <strong>EI30</strong>
            <span>Nichttragender raumabschließender Bauteilaufbau</span>
          </div>

          <div className="example-box">
            <strong>G30</strong>
            <span>Verglasung mit 30 Minuten Feuerwiderstand</span>
          </div>

          <div className="example-box">
            <strong>REI90-M</strong>
            <span>Brandwand mit Tragfähigkeit, Raumabschluss und Dämmung</span>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Praxis für Bauzeichnungen</h2>

        <div className="info-box">
          <strong>Wichtig:</strong> In Plänen sollte nicht einfach pauschal
          „F90“ geschrieben werden, wenn eigentlich eine konkrete europäische
          Klassifizierung oder ein geprüfter Aufbau gefordert ist. Entscheidend
          ist immer, ob das Bauteil tragend, nichttragend, raumabschließend oder
          zusätzlich dämmend wirken muss.
        </div>

        <ul>
          <li>
            Tragende Bauteile werden häufig mit <strong>R</strong> klassifiziert.
          </li>
          <li>
            Tragende und raumabschließende Bauteile werden häufig mit{" "}
            <strong>REI</strong> klassifiziert.
          </li>
          <li>
            Nichttragende raumabschließende Bauteile werden häufig mit{" "}
            <strong>EI</strong> klassifiziert.
          </li>
          <li>
            Türen und Abschlüsse haben oft zusätzliche Anforderungen wie{" "}
            <strong>C</strong> für selbstschließend.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BrandschutzKlassifizierung;