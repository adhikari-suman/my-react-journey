import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editablePlayerName, setPlayerName] = useState(name);

  const handleEditClick = () => setIsEditing((prev) => !prev);
  const handlePlayerNameChanged = (e) => setPlayerName(e.target.value);

  let playerName = <span className="player-name">{editablePlayerName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        value={editablePlayerName}
        onChange={handlePlayerNameChanged}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
