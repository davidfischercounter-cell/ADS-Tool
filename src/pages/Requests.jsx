import { useState } from "react";

function Requests() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("revit");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      alert("Bitte Titel und Beschreibung ausfüllen.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      title,
      description,
      category,
    };

    const existing = JSON.parse(localStorage.getItem("requests")) || [];

    localStorage.setItem("requests", JSON.stringify([...existing, newRequest]));

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Anfrage stellen</h1>
      </div>

      <div className="request-form">
        <input
          className="request-input"
          placeholder="Titel der Anfrage"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="request-textarea"
          placeholder="Kurze Beschreibung des Problems"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="request-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="revit">Revit</option>
          <option value="punktwolken">Punktwolken</option>
        </select>

        <button className="request-button" onClick={handleSubmit}>
          Anfrage erstellen
        </button>
      </div>
    </div>
  );
}

export default Requests;
