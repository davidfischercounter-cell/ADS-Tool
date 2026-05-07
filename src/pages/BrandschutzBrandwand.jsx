import "../styles/dashboard.css";
import "../styles/styles.css";

function BrandschutzBrandwand() {
  return (
    <div className="page content-page">
      <div className="page-banner">
        <h1>Brandwand vs. F90</h1>
        <div className="page-line"></div>
      </div>

      <section className="content-card">
        <h2>Der wichtigste Unterschied</h2>

        <div className="brandwand-hero-grid">
          <div className="brandwand-hero-card">
            <span className="brandwand-label">Brandwand</span>
            <h3>Vollständige brandschutztechnische Trennung</h3>
            <p>
              Eine Brandwand soll die Brandausbreitung zwischen Gebäuden oder
              Brandabschnitten verhindern. Sie ist nicht nur „90 Minuten
              feuerbeständig“, sondern muss zusätzliche Anforderungen erfüllen.
            </p>
          </div>

          <div className="brandwand-hero-card">
            <span className="brandwand-label muted">F90</span>
            <h3>Nur eine Feuerwiderstandsdauer</h3>
            <p>
              F90 bedeutet, dass ein Bauteil für 90 Minuten eine bestimmte
              brandschutztechnische Funktion erfüllt. Daraus wird aber nicht
              automatisch eine Brandwand.
            </p>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Schnellvergleich</h2>

        <div className="brandwand-table-wrapper">
          <table className="brandwand-table">
            <thead>
              <tr>
                <th>Merkmal</th>
                <th>Brandwand</th>
                <th>F90-Bauteil</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ziel</td>
                <td>Trennung von Brandabschnitten oder Gebäuden</td>
                <td>Feuerwiderstand eines einzelnen Bauteils</td>
              </tr>

              <tr>
                <td>Feuerwiderstand</td>
                <td>In der Regel feuerbeständig</td>
                <td>90 Minuten Feuerwiderstand</td>
              </tr>

              <tr>
                <td>Standsicherheit</td>
                <td>
                  Muss auch bei einseitiger Brandbeanspruchung und angrenzendem
                  Bauteilversagen standsicher bleiben
                </td>
                <td>
                  Muss die geprüfte Funktion für 90 Minuten erfüllen, aber nicht
                  automatisch Brandwandanforderungen
                </td>
              </tr>

              <tr>
                <td>Mechanische Beanspruchung</td>
                <td>
                  Zusätzliche Anforderungen möglich, z. B. Stoßbeanspruchung bei
                  Brandwänden
                </td>
                <td>Nicht automatisch enthalten</td>
              </tr>

              <tr>
                <td>Dachanschluss</td>
                <td>
                  Besondere Ausbildung erforderlich, häufig mit Überstand oder
                  brandschutztechnisch gleichwertiger Lösung
                </td>
                <td>Kein automatischer Brandwand-Dachanschluss</td>
              </tr>

              <tr>
                <td>Planerische Aussage</td>
                <td>„Brandwand“ oder klassifiziert z. B. REI 90-M</td>
                <td>„F90“ bzw. passende Klassifizierung des Bauteils</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-card">
        <h2>Typische Anforderungen an eine Brandwand</h2>

        <div className="brandwand-check-grid">
          <div className="brandwand-check-card">
            <strong>01</strong>
            <span>Vollständige Trennung</span>
            <p>
              Die Brandwand trennt Brandabschnitte oder Gebäude so, dass Feuer
              und Rauch nicht einfach weiterlaufen können.
            </p>
          </div>

          <div className="brandwand-check-card">
            <strong>02</strong>
            <span>Standsicherheit</span>
            <p>
              Sie muss auch dann stehen bleiben, wenn angrenzende Bauteile im
              Brandfall versagen oder einstürzen.
            </p>
          </div>

          <div className="brandwand-check-card">
            <strong>03</strong>
            <span>Dachanschluss</span>
            <p>
              Der Anschluss an Dachflächen ist besonders kritisch. Hier darf
              sich der Brand nicht über Dachaufbauten, Hohlräume oder brennbare
              Schichten weiter ausbreiten.
            </p>
          </div>

          <div className="brandwand-check-card">
            <strong>04</strong>
            <span>Nichtbrennbare Baustoffe</span>
            <p>
              In diesem Bereich sind brennbare Unterkonstruktionen, Dämmstoffe
              oder Bekleidungen schnell ein Problem. Produktaufbau prüfen.
            </p>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Merksatz für den Plan</h2>

        <div className="brandwand-merksatz">
          <strong>F90 ist eine Zeitangabe.</strong>
          <span>Eine Brandwand ist eine brandschutztechnische Trennung.</span>
        </div>

        <p>
          Anders gesagt: Eine Brandwand kann feuerbeständig sein, aber nicht
          jedes F90-Bauteil ist automatisch eine Brandwand. Für die Planung ist
          entscheidend, welche Funktion das Bauteil übernehmen soll.
        </p>
      </section>

      <section className="content-card">
        <h2>Praxis für Bauzeichnungen</h2>

        <div className="info-box">
          <strong>Wichtig:</strong> Bei Brandwänden nicht nur „F90“ eintragen.
          Wenn es eine Brandwand ist, muss sie auch als solche bezeichnet und im
          Aufbau entsprechend nachgewiesen werden.
        </div>

        <ul>
          <li>Brandwände im Grundriss und Schnitt eindeutig beschriften.</li>
          <li>
            Dachanschluss, Attika, Überstand oder gleichwertige Ausbildung
            sauber darstellen.
          </li>
          <li>
            Keine brennbaren Dämmstoffe oder Holz-Unterkonstruktionen im
            kritischen Brandwandbereich annehmen.
          </li>
          <li>
            Öffnungen, Leitungsdurchführungen und Anschlüsse gesondert prüfen.
          </li>
          <li>
            Immer mit Brandschutzkonzept, Detailplanung und zugelassenem Aufbau
            abgleichen.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BrandschutzBrandwand;
