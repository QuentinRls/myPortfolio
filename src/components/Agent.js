import React, { useState } from "react";
import "./LegalRAG.css";

function AgentAudio() {
    const [question, setQuestion] = useState("");
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        setAudioUrl(null);

        if (!question) {
            alert("Veuillez entrer une question.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://mywebsiteserver-s92a.onrender.com/generate-audio", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la génération de l'audio.");
            }

            const data = await response.json();
            setAudioUrl(`${data.filePath}`);
        } catch (error) {
            console.error("Erreur :", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1>Assistant Audio</h1>
            <form onSubmit={handleSearch} className="form">
                <label htmlFor="questionInput" className="form-label">
                    Posez votre question :
                </label>
                <input
                    id="questionInput"
                    type="text"
                    placeholder="Ex : Recite moi un poème en Alexandrin"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
                <button className="analyze-btn" type="submit" disabled={loading}>
                    {loading ? "Chargement..." : "Générer Audio"}
                </button>
            </form>
            {audioUrl && (
                <div className="legal-rag-result">
                    <h2>Votre audio :</h2>
                    <audio controls src={audioUrl}></audio>
                </div>
            )}
            <a href={audioUrl} download="response.wav" className="download-link">
                Télécharger l'audio
            </a>

        </div>
    );
}

export default AgentAudio;
