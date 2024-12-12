import React, { useState } from "react";
import "./LegalRAG.css";

function GenerateImage() {
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerateImage = async (event) => {
        event.preventDefault();
        setImageUrl(null);

        if (!description) {
            alert("Veuillez entrer une description.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://mywebsiteserver-s92a.onrender.com/generate-image", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: description }), // Utilisation correcte de la description comme prompt
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la génération de l'image.");
            }

            const data = await response.json();
            setImageUrl(data.filePath); // Vérifiez que la clé renvoyée est bien `filePath`
        } catch (error) {
            console.error("Erreur :", error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h1>Générateur d'Images par IA</h1>
            <form onSubmit={handleGenerateImage} className="form">
                <label htmlFor="descriptionInput" className="form-label">
                    Entrez une description pour l'image :
                </label>
                <input
                    id="descriptionInput"
                    type="text"
                    placeholder="Ex : Une plage au coucher du soleil avec des palmiers."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button className="analyze-btn" type="submit" disabled={loading}>
                    {loading ? "Génération en cours..." : "Générer l'image"}
                </button>
            </form>
            {imageUrl && (
                <div className="image-result">
                    <h2>Votre image :</h2>
                    <img src={imageUrl} alt="Générée par IA" className="generated-image" />
                    <a href={imageUrl} download="generated-image.png" className="download-link">
                        Télécharger l'image
                    </a>
                </div>
            )}
        </div>
    );
}

export default GenerateImage;