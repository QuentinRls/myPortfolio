import React, { useState } from "react";
import "./Form.css";

function Form({ onResult, onClear }) {
  const [file, setFile] = useState(null);
  const [jobPosition, setJobPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Veuillez télécharger un fichier PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("cvFile", file);
    formData.append("jobPosition", jobPosition);

    setLoading(true);

    try {
      const response = await fetch("https://mywebsiteserver-s92a.onrender.com/upload-cv", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data); // Set the result locally
      onResult(data); // Pass the result to the parent component if needed
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
    } finally {
      setLoading(false);
    }
  };

  const formatResult = (data) => {
    if (!data || !data.analysis) return null;

    const lines = data.analysis.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        const title = line.slice(2, -2).trim();
        return (
          <h2 key={index} className="result-title">
            {title}
          </h2>
        );
      }
      return (
        <p key={index} className="result-paragraph">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="form-container">
      <h1>Vérificateur et Évaluateur de CV par IA Gratuit</h1>
      {result ? (
        <div className="result-container">
          <h1>Résultat de l'analyse :</h1>
          <div>{formatResult(result)}</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="upload-box">
            <label htmlFor="fileInput">
              {file ? file.name : "Cliquez pour télécharger ou glissez et déposez votre CV ici"}
              <br />
              <span>{file ? "" : "PDF ou DOCX"}</span>
            </label>
            <input
              id="fileInput"
              type="file"
              accept=".pdf,.docx" 
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="job-box">
            <label htmlFor="jobPosition" className="form-label">
              Poste recherché (optionnel) :
            </label>
            <input
              id="jobPosition"
              type="text"
              placeholder="Entrez le poste recherché (ex : Développeur Web)"
              value={jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
            />
          </div>

          <button type="submit" className="analyze-btn" disabled={loading}>
            {loading ? "Analyse en cours..." : "Analysez Mon CV"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;