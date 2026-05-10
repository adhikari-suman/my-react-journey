import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing((prev) => !prev);

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input value={name} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="plyaer-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
