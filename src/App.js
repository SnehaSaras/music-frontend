import React, { useState } from 'react';

const moods = ["happy", "sad", "angry"];

function App() {
  const [songLink, setSongLink] = useState("");

  const handleMoodClick = async (mood) => {
    cconst res = await fetch(`http://backend:5000/song/${mood}`);

    const data = await res.json();
    setSongLink(data.link);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🎵 MoodTunes</h1>
      {moods.map((mood) => (
        <button key={mood} onClick={() => handleMoodClick(mood)} style={{ fontSize: "30px", margin: "10px" }}>
          {mood === "happy" ? "😊" : mood === "sad" ? "😢" : "😡"}
        </button>
      ))}
      {songLink && (
        <div style={{ marginTop: "30px" }}>
          <h2>Here’s your song:</h2>
          <a href={songLink} target="_blank" rel="noopener noreferrer">{songLink}</a>
          <div>
            <iframe width="560" height="315" src={songLink.replace("watch?v=", "embed/")} allow="autoplay" title="YouTube player" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
