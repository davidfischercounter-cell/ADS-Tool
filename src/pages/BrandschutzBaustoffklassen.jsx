import "../styles/dashboard.css";
import "../styles/styles.css";

function BrandschutzBaustoffklassen() {
  return (
    <div className="dashboard brandschutz-page">
      <div className="page-banner">
        <h1>Baustoffklassen</h1>
        <div className="page-line"></div>
      </div>

      <section className="content-card">
        <h2>Was sind Baustoffklassen?</h2>
        <p>
          Baustoffklassen beschreiben das Brandverhalten von Baustoffen. Sie
          geben an, ob ein Material nicht brennbar, schwer entflammbar oder
          normal entflammbar ist.
        </p>
        <p>
          Wichtig: Die Baustoffklasse beschreibt den Baustoff selbst. Sie sagt
          nicht automatisch aus, wie lange ein komplettes Bauteil einem Brand
          widersteht.
        </p>
      </section>

      <section className="content-card">
        <h2>Vergleich der Baustoffklassen nach DIN 4102</h2>

        <div className="brand-table-wrapper">
          <table className="brand-table-real">
            <thead>
              <tr>
                <th>Eigenschaft</th>
                <th>A1</th>
                <th>A2</th>
                <th>B1</th>
                <th>B2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="brand-row-title">Brennbarkeit</td>
                <td>Vollständig nicht brennbar</td>
                <td>Nicht brennbar mit organischen Anteilen</td>
                <td>Schwer entflammbar</td>
                <td>Normal entflammbar</td>
              </tr>

              <tr>
                <td className="brand-row-title">Beispiele</td>
                <td>Beton, Ziegel, Glas, Stahl, Stein</td>
                <td>
                  Gipskartonplatten, Mineralfaserprodukte mit Bindemitteln
                </td>
                <td>
                  Brandschutzplatten, behandelte Textilien, schwer entflammbare
                  Kunststoffe
                </td>
                <td>Holz, Möbel, Teppiche, viele Kunststoffe</td>
              </tr>

              <tr>
                <td className="brand-row-title">Typische Anwendung</td>
                <td>Rettungswege, Hochhäuser, tragende Konstruktionen</td>
                <td>Bereiche mit erhöhten Anforderungen</td>
                <td>
                  Schulen, Hotels, Versammlungsstätten, öffentliche Bereiche
                </td>
                <td>
                  Normale Anwendungen ohne besondere Brandschutzanforderungen
                </td>
              </tr>

              <tr>
                <td className="brand-row-title">Merksatz</td>
                <td>Brennt praktisch nicht.</td>
                <td>
                  Brennt nicht, kann aber geringe organische Bestandteile
                  enthalten.
                </td>
                <td>Brennt nur schwer.</td>
                <td>Brennt normal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-card">
        <h2>Baustoffklasse ist nicht Feuerwiderstand</h2>
        <p>
          Eine Baustoffklasse beschreibt nur das Brandverhalten eines Materials.
          Eine Feuerwiderstandsklasse beschreibt dagegen, wie lange ein Bauteil
          im Brandfall seine Funktion erfüllt.
        </p>

        <div className="info-box">
          <strong>Beispiel:</strong> Beton ist als Baustoff nicht brennbar. Eine
          konkrete Wand oder Decke hat aber nur dann eine bestimmte
          Feuerwiderstandsklasse, wenn der gesamte Aufbau entsprechend
          nachgewiesen oder klassifiziert ist.
        </div>
      </section>

      <section className="content-card">
        <h2>Praxis für Bauzeichnungen</h2>
        <ul>
          <li>
            Baustoffklassen sind besonders bei Dämmstoffen, Bekleidungen,
            Oberflächen und Verkleidungen wichtig.
          </li>
          <li>
            In Rettungswegen werden häufig nicht brennbare oder schwer
            entflammbare Baustoffe gefordert.
          </li>
          <li>
            Bei Wänden, Decken, Türen und Schächten ist zusätzlich die
            Feuerwiderstandsklasse entscheidend.
          </li>
          <li>
            Maßgebend ist immer der konkrete geprüfte Aufbau oder das
            Produktdatenblatt.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BrandschutzBaustoffklassen;
