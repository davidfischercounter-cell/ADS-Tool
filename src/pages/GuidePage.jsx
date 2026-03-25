import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { guides } from "../data/guides";
import geschossData from "../data/geschoss.json";
import waendeData from "../data/waende.json";
import deckenData from "../data/decken.json";
import raeumeData from "../data/raeume.json";
import punktwolkeData from "../data/punktwolke-recap.json";
import bereinigenData from "../data/punktwolke-bereinigen.json";
import punktwolkeexportData from "../data/punktwolke-export.json";

const guideFiles = {
  "geschoss.json": geschossData,
  "waende.json": waendeData,
  "decken.json": deckenData,
  "raeume.json": raeumeData,
  "punktwolke-recap.json": punktwolkeData,
  "punktwolke-bereinigen.json": bereinigenData,
  "punktwolke-export.json": punktwolkeexportData,

};

function GuidePage() {
  const { id } = useParams();
  const guide = guides.find((g) => g.id === id);

  if (!guide) {
    return <div>Guide nicht gefunden</div>;
  }

  const jsonData = guide.file ? guideFiles[guide.file] : null;

  const entry =
    jsonData?.entries?.find((item) => item.id === id) || jsonData?.entries?.[0];

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">{guide.title}</h1>
      </div>

      <div className="dashboard">
        {entry ? (
          <>
            <p>{entry.shortDescription}</p>

            {entry.video?.url && (
              <div style={{ marginTop: "20px", marginBottom: "30px" }}>
                <h3>{entry.video.title || "Video"}</h3>
                <iframe
                  width="100%"
                  height="400"
                  src={entry.video.url}
                  title={entry.video.title || entry.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "12px" }}
                />
              </div>
            )}

            {entry.content.steps.map((step, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "16px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "12px",
                  background: "#fff",
                }}
              >
                <h3 style={{ marginTop: 0 }}>
                  {index + 1}. {step.title}
                </h3>

                <p>{step.text}</p>

                {/* 👉 HIER kommt der Link rein */}
                {step.link && (
                  <Link
                    to={`/guide/${step.link}`}
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      color: "#B7A37A",
                      fontWeight: "600",
                    }}
                  >
                    Mehr dazu →
                  </Link>
                )}
              </div>
            ))}

            {entry.content?.tips?.length > 0 && (
              <div style={{ marginTop: "30px" }}>
                <h2>Tipps</h2>
                <ul>
                  {entry.content.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p>{guide.content}</p>
        )}
      </div>
    </div>
  );
}

export default GuidePage;
