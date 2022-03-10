const Card = (props) => {
  return props.renderRow.map((c, index) => {
    return (
      <div className="card" key={index} data-testid="card">
        <span className={c.suit} key={c.suit} data-testid={c.suit}></span>
        <p key={c.numeral}>{c.numeral}</p>
      </div>
    );
  });
};

export default Card;
