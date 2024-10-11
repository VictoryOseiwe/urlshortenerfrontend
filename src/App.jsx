import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://siul.vercel.app/shorten", {
        originalUrl,
      });
      setShortenedUrl(`https://siul.vercel.app/${response.data.shortenedUrl}`);
    } catch (error) {
      console.error("Error shortening url: " + error);
    }
  }
  return (
    <>
      <div className="url-container">
        <h1>URL SHORTENER</h1>
        <form>
          <input
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter Long URL"
            required
          />
          <button type="submit" onClick={handleSubmit}>
            Shorten
          </button>
        </form>
        {shortenedUrl && (
          <div className="short-url">
            <p>Short Url</p>
            <a href={shortenedUrl}>{shortenedUrl}</a>
          </div>
        )}
      </div>
      <div className="footer">
        <p>Powered by victoryoseiwe</p>
      </div>
    </>
  );
}
