import { useNavigate } from "react-router-dom";
import "../styles/backbutton.css";

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button className="back-button" onClick={goBack}>
      ← Zurück
    </button>
  );
}

export default BackButton;
