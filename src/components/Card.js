const Card = (props) => {
  return props.renderRow.map((c) => {
    return (
      <div className="card">
        <span className={c.suit}></span>
        <p>{c.numeral}</p>
      </div>
    );
  });
};

export default Card;
