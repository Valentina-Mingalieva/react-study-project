import s from './Card.module.css';

function Card(props) {
  const { id, name } = props;

  const handleClick = () => {
    alert(name);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <p key={id}>{name}</p>
      <button onClick={handleClick}>Show me the alert</button>
    </div>
  );
}

export default Card;
