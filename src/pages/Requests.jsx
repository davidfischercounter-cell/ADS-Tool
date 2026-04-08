import { useEffect, useState } from "react";

function Requests() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [requests, setRequests] = useState([]);
  const [openRequestId, setOpenRequestId] = useState(null);

  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    setRequests(savedRequests);
  }, []);

  const saveRequests = (updatedRequests) => {
    localStorage.setItem("requests", JSON.stringify(updatedRequests));
    setRequests(updatedRequests);
  };

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

    const updatedRequests = [newRequest, ...requests];
    saveRequests(updatedRequests);
    setOpenRequestId(newRequest.id);

    setTitle("");
    setDescription("");
    setSuccessMessage("Anfrage wurde erfolgreich erstellt.");
  };

  const toggleRequest = (id) => {
    setOpenRequestId((prev) => (prev === id ? null : id));
  };

  const toggleStatus = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id
        ? {
            ...request,
            status: request.status === "offen" ? "erledigt" : "offen",
          }
        : request
    );

    saveRequests(updatedRequests);
  };

  const deleteRequest = (id) => {
    const updatedRequests = requests.filter((request) => request.id !== id);
    saveRequests(updatedRequests);

    if (openRequestId === id) {
      setOpenRequestId(null);
    }
  };

  const offeneRequests = requests.filter(
    (request) => request.status === "offen"
  );
  const erledigteRequests = requests.filter(
    (request) => request.status === "erledigt"
  );

  const renderRequestList = (list) => {
    if (list.length === 0) {
      return <p className="request-empty">Keine Einträge vorhanden.</p>;
    }

    return (
      <div className="request-list">
        {list.map((request) => (
          <div
            key={request.id}
            className={`request-item ${
              request.status === "erledigt" ? "request-item-done" : ""
            }`}
          >
            <button
              type="button"
              className="request-list-button"
              onClick={() => toggleRequest(request.id)}
            >
              <span>{request.title}</span>
              <span
                className={`request-badge ${
                  request.status === "erledigt"
                    ? "request-badge-done"
                    : "request-badge-open"
                }`}
              >
                {request.status}
              </span>
            </button>

            {openRequestId === request.id && (
              <div className="request-item-content">
                <p>{request.description}</p>

                <div className="request-item-actions">
                  <button
                    type="button"
                    className="request-action-button"
                    onClick={() => toggleStatus(request.id)}
                  >
                    {request.status === "offen"
                      ? "Als erledigt markieren"
                      : "Wieder auf offen setzen"}
                  </button>

                  <button
                    type="button"
                    className="request-action-button request-action-delete"
                    onClick={() => deleteRequest(request.id)}
                  >
                    Löschen
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
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
              <label className="request-label" htmlFor="request-title">
                Titel der Anfrage
              </label>
              <input
                id="request-title"
                type="text"
                className="request-control"
                placeholder="z. B. IFC Export nach Allplan"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="request-group">
              <label className="request-label" htmlFor="request-description">
                Beschreibung
              </label>
              <textarea
                id="request-description"
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
          {renderRequestList(offeneRequests)}
        </section>

        <section className="request-list-shell">
          <h2 className="request-list-title">Erledigte Anfragen</h2>
          {renderRequestList(erledigteRequests)}
        </section>
      </div>
    </div>
  );
}

export default Requests;
