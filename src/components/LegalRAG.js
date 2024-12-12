import React, { useState, useEffect } from "react";
import "./LegalRAG.css";

function LegalRAG({ onClear }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false); // État pour le chargement

  const handleSearch = async (event) => {
    event.preventDefault();

    if (!question) {
      alert("Veuillez entrer une question ou une recherche.");
      return;
    }

    setLoading(true); // Démarrer le chargement

    try {
      const response = await fetch("https://mywebsiteserver-s92a.onrender.com/legal-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
      setAnswer("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (onClear) {
      onClear(() => setAnswer("")); // Réinitialise le contenu lorsqu'onReturn est déclenché
    }
  }, [onClear]);

  const formatAnswer = (text) => {
    console.log(text)
    const lines = text.split("\n");
    return lines.map((line, index) => {
      const parts = line.split(/(\*\*.*?\*\*|#.*?#)/);
      return (
        <p key={index} className="legal-paragraph">
          {parts.map((part, idx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              const title = part.slice(2, -2).trim();
              return (
                <h2 key={idx} className="legal-title">
                  {title}
                </h2>
              );
            } else if (part.startsWith("#") && part.endsWith("#")) {
              const boldText = part.slice(1, -1).trim();
              return (
                <strong key={idx} className="legal-bold">
                  {boldText}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
  };


  return (
    <div className="form-container">
      <h1>Assistant Juridique par IA</h1>
      <form onSubmit={handleSearch} className="form">
        <label htmlFor="questionInput" className="form-label">
          Posez votre question :
        </label>
        <input
          id="questionInput"
          type="text"
          placeholder="Ex : Quelle est la différence entre homicide et meurtre ?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button type="submit" className="analyze-btn" disabled={loading}>
          {loading ? "Recherche en cours..." : "Rechercher"}
        </button>
      </form>
      {answer && (
        <div className="legal-rag-result">
          <h2>Résultat :</h2>
          {formatAnswer(answer)}
        </div>
      )}
    </div>
  );
}

export default LegalRAG;
