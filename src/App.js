import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😋": "savoring food",
  "😊": "Smiling",
  "🤥": "lying",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤓": "nerd"
};

const emojis = Object.keys(emojiDict);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("result will come here...");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDict) {
      setMeaning(emojiDict[inputEmoji]);
    } else {
      setMeaning("not available in database");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDict[inputEmoji]);
  }

  return (
    <div className="main">
      <div className="header-div">
        <h1>emoticon-decipherer</h1>
      </div>
      <div className="App">
        <input
          onChange={changeHandler}
          value={emoji}
          placeholder={"search for your emoji"}
        />
        <h2> {emoji} </h2>
        <h3> {meaning} </h3>

        {emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))}
      </div>
    </div>
  );
}
