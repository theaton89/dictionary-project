import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h3>
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
      </h3>
      <br />

      <h3>{props.phonetic.text}</h3>
    </div>
  );
}
