export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="players">
        <span className="player-name">{name}</span>
        <span className="plyaer-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
