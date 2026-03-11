import { useParams } from "react-router-dom";
import { guides } from "../data/guides";

function GuidePage() {
  const { id } = useParams();

  const guide = guides.find((g) => g.id === id);

  if (!guide) {
    return <div>Guide nicht gefunden</div>;
  }

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">{guide.title}</h1>
      </div>

      <div className="dashboard">
        <p>{guide.content}</p>
      </div>
    </div>
  );
}

export default GuidePage;
