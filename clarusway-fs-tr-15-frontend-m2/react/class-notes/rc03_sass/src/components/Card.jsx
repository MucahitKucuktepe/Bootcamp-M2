import "../scss/card.scss";

const Card = ({ veri }) => {
  // const { id, name, job, comment } = veri[0];
  return (
    <div>
      {veri.map(({ id, name, job, comment,img }) => (
        <div key={id}>
          <h2> {name} </h2>
          <h3>{job} </h3>
          <p> {comment} </p>
          <img src={img} alt="" width={"100px"}/>
          <div>
            <button>Small</button>
            <button>Large</button>
          </div>

        </div>
      ))}
    </div>
  );


};

export default Card;
