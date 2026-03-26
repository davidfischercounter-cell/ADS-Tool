import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button type="button" className="header-btn" onClick={() => navigate(-1)}>
      ← Zurück
    </button>
  );
}

export default BackButton;
