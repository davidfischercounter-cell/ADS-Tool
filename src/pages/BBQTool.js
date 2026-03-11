import { useEffect, useState, useMemo } from "react";
import "../styles/bbq.css";
import { useNavigate } from "react-router-dom";

export default function BBQTool() {
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState([]);
  const [openGroups, setOpenGroups] = useState({});

  const navigate = useNavigate();

  const priority = {
    N: 1,
    S: 2,
    E: 3,
  };

  const reversePriority = {
    1: "N",
    2: "S",
    3: "E",
  };

  /* CSV laden */

  useEffect(() => {
    fetch("/bbq_table.csv", { cache: "no-store" })
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");

        const parsed = lines.map((line) =>
          line.split(";").map((cell) => cell.trim())
        );

        setRows(parsed);
      });
  }, []);

  /* Zeile auswählen */

  function toggle(index) {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  /* Gruppe öffnen / schließen */

  function toggleGroup(name) {
    setOpenGroups((prev) => ({
      ...prev,
      [name]: prev[name] === false ? true : false,
    }));
  }

  /* BBQ Klasse berechnen */

  const bbqResult = useMemo(() => {
    let result = 0;

    selected.forEach((i) => {
      const value = rows[i]?.[6];

      if (priority[value] && priority[value] > result) {
        result = priority[value];
      }
    });

    return result;
  }, [selected, rows]);

  /* PK BK AK berechnen */

  const { pkValue, bkValue, akValue } = useMemo(() => {
    let pk = 0;
    let bk = 0;
    let ak = 0;

    selected.forEach((i) => {
      const row = rows[i];
      if (!row) return;

      if (priority[row[3]] > pk) pk = priority[row[3]];
      if (priority[row[4]] > bk) bk = priority[row[4]];
      if (priority[row[5]] > ak) ak = priority[row[5]];
    });

    return {
      pkValue: reversePriority[pk] || "E",
      bkValue: reversePriority[bk] || "E",
      akValue: reversePriority[ak] || "E",
    };
  }, [selected, rows]);

  return (
    <div className="page bbq-container">
      <div className="bbq-title">BBQ-Klasse ermitteln</div>

      <div className="bbq-result-wrapper">
        <div className="bbq-result-label">BBQ-Klasse</div>

        <div className={`bbq-result-value bbq-${bbqResult}`}>
          {reversePriority[bbqResult] || "-"}
        </div>
      </div>

      <div className="bbq-table-wrapper">
        <table className="bbq-table">
          <thead>
            <tr>
              <th>BBQ-Phase</th>
              <th>Anwendung</th>
              <th>PK</th>
              <th>BK</th>
              <th>AK</th>
              <th>BBQ</th>
            </tr>
          </thead>

          <tbody>
            {(() => {
              let currentGroup = "";

              return rows.map((row, i) => {
                /* Kategorie */

                if (!row[0] && row[2] && row[2].length > 10) {
                  if (row[2].includes("Ermittelte BBQ-Klasse")) return null;

                  const groupName = row[2];
                  currentGroup = groupName;

                  return (
                    <tr
                      key={i}
                      className="bbq-group"
                      onClick={() => toggleGroup(groupName)}
                    >
                      <td colSpan="6">
                        {openGroups[groupName] === false ? "▶" : "▼"}{" "}
                        {groupName}
                      </td>
                    </tr>
                  );
                }

                /* Fußnoten */

                if (row[0] === "a" || row[0] === "b" || row[0] === "c") {
                  return (
                    <tr key={i} className="bbq-note">
                      <td colSpan="6">
                        {row[0]} {row[1]}
                      </td>
                    </tr>
                  );
                }

                /* keine Zahl */

                if (isNaN(parseInt(row[0]))) return null;

                /* Gruppe geschlossen */

                if (openGroups[currentGroup] === false) return null;

                /* normale Tabellenzeile */

                return (
                  <tr
                    key={i}
                    className={selected.includes(i) ? "active" : ""}
                    onClick={() => toggle(i)}
                  >
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>{row[4]}</td>
                    <td>{row[5]}</td>
                    <td>{row[6]}</td>
                  </tr>
                );
              });
            })()}
          </tbody>
        </table>
      </div>

      {selected.length > 0 && (
        <button
          className="bbq-report-button full"
          onClick={() =>
            navigate("/bbq-report", {
              state: {
                pk: pkValue,
                bk: bkValue,
                ak: akValue,
              },
            })
          }
        >
          Bericht erstellen
        </button>
      )}
    </div>
  );
}
