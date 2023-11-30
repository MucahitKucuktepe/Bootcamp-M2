import "../scss/card.scss";

const Card = ({ veri }) => {
  // const { id, name, job, comment } = veri[0];
  return (
    <div>
      {veri.map(({ id, name, job, comment }) => (
        <div key={id}>
          <h2> {name} </h2>
          
        </div>
      ))}
    </div>
  );


};

export default Card;
