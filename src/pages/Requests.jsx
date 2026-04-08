import { useEffect, useState } from "react";

function Requests() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [openRequestId, setOpenRequestId] = useState(null);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    setRequests(savedRequests.reverse());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setSuccessMessage("Bitte fülle Titel und Beschreibung aus.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
      status: "offen",
    };

    const existingRequests = JSON.parse(localStorage.getItem("requests")) || [];
    const updatedRequests = [newRequest, ...existingRequests];

    localStorage.setItem("requests", JSON.stringify(updatedRequests));
    setRequests(updatedRequests);
    setOpenRequestId(newRequest.id);

    setTitle("");
    setDescription("");
    setSuccessMessage("Anfrage wurde erfolgreich erstellt.");
  };

  const toggleRequest = (id) => {
    setOpenRequestId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="page-banner">
        <div className="page-line"></div>
        <h1 className="page-title">Anfrage stellen</h1>
      </div>

      <div className="dashboard">
        <section className="request-shell">
          <div className="request-header-block">
            <p className="request-intro">
              Teile hier neue Themen, Probleme oder Verbesserungswünsche für
              ADS-GPT mit.
            </p>
          </div>

          <form className="request-form-modern" onSubmit={handleSubmit}>
            <div className="request-group">
              <label className="request-label">Titel der Anfrage</label>
              <input
                type="text"
                className="request-control"
                placeholder="z. B. IFC Export nach Allplan"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="request-group">
              <label className="request-label">Beschreibung</label>
              <textarea
                className="request-control request-control-textarea"
                placeholder="Beschreibe kurz das Problem oder was ergänzt werden soll..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button type="submit" className="request-submit-button">
              Anfrage erstellen
            </button>

            {successMessage && (
              <div className="request-status-message">{successMessage}</div>
            )}
          </form>
        </section>

        <section className="request-list-shell">
          <h2 className="request-list-title">Offene Anfragen</h2>

          {requests.length === 0 ? (
            <p className="request-empty">Noch keine Anfragen vorhanden.</p>
          ) : (
            <div className="request-list">
              {requests.map((request) => (
                <div key={request.id} className="request-item">
                  <button
                    className="request-list-button"
                    onClick={() => toggleRequest(request.id)}
                  >
                    {request.title}
                  </button>

                  {openRequestId === request.id && (
                    <div className="request-item-content">
                      <p>{request.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Requests;
