import "../styles/dashboard.css";
import "../styles/styles.css";

function BrandschutzBMABWA() {
  return (
    <div className="page content-page">
      <div className="page-banner">
        <h1>BMA / BWA</h1>
        <div className="page-line"></div>
      </div>

      <section className="content-card">
        <h2>Unterschied zwischen BMA und BWA</h2>
        <p>
          BMA und BWA klingen ähnlich, haben aber einen wichtigen Unterschied:
          Eine Brandmeldeanlage meldet einen Brand in der Regel automatisch an
          eine ständig besetzte Stelle oder direkt zur Feuerwehr weiter. Eine
          Brandwarnanlage warnt dagegen hauptsächlich intern im Gebäude.
        </p>

        <div className="bma-compare-grid">
          <div className="bma-card bma-card-alert">
            <div className="bma-card-label">BMA</div>
            <h3>Brandmeldeanlage</h3>
            <p>
              Erkennt einen Brand automatisch und leitet die Meldung weiter. Je
              nach Objekt wird die Feuerwehr direkt oder über eine Leitstelle
              alarmiert.
            </p>

            <ul>
              <li>automatische Brandmeldung</li>
              <li>Alarmierung externer Stellen möglich</li>
              <li>häufig mit Feuerwehrlaufkarten</li>
              <li>meist bei größeren oder sensiblen Gebäuden</li>
            </ul>
          </div>

          <div className="bma-card bma-card-warning">
            <div className="bma-card-label">BWA</div>
            <h3>Brandwarnanlage</h3>
            <p>
              Warnt Personen im Gebäude vor einem Brandereignis. Die Warnung
              bleibt typischerweise intern und ersetzt keine vollwertige
              Brandmeldeanlage.
            </p>

            <ul>
              <li>interne Warnung im Gebäude</li>
              <li>keine automatische Feuerwehralarmierung</li>
              <li>für kleinere oder einfachere Nutzungen möglich</li>
              <li>häufig wirtschaftlicher als eine BMA</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Schnellvergleich</h2>

        <div className="bma-table-wrapper">
          <table className="bma-table">
            <thead>
              <tr>
                <th>Merkmal</th>
                <th>BMA</th>
                <th>BWA</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Ausgeschrieben</td>
                <td>Brandmeldeanlage</td>
                <td>Brandwarnanlage</td>
              </tr>

              <tr>
                <td>Hauptfunktion</td>
                <td>Brand erkennen und melden</td>
                <td>Personen im Gebäude warnen</td>
              </tr>

              <tr>
                <td>Feuerwehr</td>
                <td>Kann automatisch alarmiert werden</td>
                <td>In der Regel keine automatische Alarmierung</td>
              </tr>

              <tr>
                <td>Alarmierung</td>
                <td>Extern und intern möglich</td>
                <td>Überwiegend intern</td>
              </tr>

              <tr>
                <td>Typische Bestandteile</td>
                <td>
                  Brandmelder, Brandmeldezentrale, Handfeuermelder,
                  Feuerwehrlaufkarten, FIZ
                </td>
                <td>Rauchwarnmelder, Warneinrichtungen, interne Signalgeber</td>
              </tr>

              <tr>
                <td>Typische Anwendung</td>
                <td>
                  Sonderbauten, größere Gebäude, Versammlungsstätten,
                  Beherbergung, Pflege, Schulen
                </td>
                <td>
                  kleinere Nutzungen, interne Warnkonzepte, einfachere
                  Gebäudeanforderungen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-card">
        <h2>FIZ - Feuerwehr-Informationszentrum</h2>
        <p>
          Das Feuerwehr-Informationszentrum ist die zentrale Anlaufstelle für
          die Feuerwehr im Gebäude. Dort befinden sich je nach Ausführung
          wichtige Einrichtungen und Unterlagen zur schnellen Orientierung.
        </p>

        <div className="bma-info-grid">
          <div className="bma-info-box">
            <strong>Typische Inhalte</strong>
            <span>
              Feuerwehrlaufkarten, Bedienfeld, Anzeigeeinrichtungen,
              Objektinformationen
            </span>
          </div>

          <div className="bma-info-box">
            <strong>Planungsrelevant</strong>
            <span>
              Lage, Zugänglichkeit, Beschilderung und Abstimmung mit dem
              Brandschutzkonzept
            </span>
          </div>

          <div className="bma-info-box">
            <strong>Wichtig im Plan</strong>
            <span>
              Das FIZ sollte eindeutig beschriftet und für Einsatzkräfte gut
              auffindbar dargestellt werden.
            </span>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Praxis für Bauzeichnungen</h2>

        <div className="info-box">
          <strong>Merksatz:</strong> BMA meldet den Brand weiter, BWA warnt
          hauptsächlich intern. Für die Planung ist entscheidend, was im
          Brandschutzkonzept gefordert wird.
        </div>

        <ul>
          <li>
            BMA, BWA und FIZ nicht wild frei erfinden, sondern aus dem
            Brandschutzkonzept übernehmen.
          </li>
          <li>
            Standorte von Brandmeldezentrale, Handfeuermeldern und FIZ eindeutig
            darstellen.
          </li>
          <li>
            Feuerwehrlaufkarten und Feuerwehrzugang mit der zuständigen Stelle
            abstimmen.
          </li>
          <li>
            Bei Sonderbauten immer prüfen, ob zusätzliche Anforderungen aus
            Nutzung, Größe oder Landesbauordnung entstehen.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BrandschutzBMABWA;
