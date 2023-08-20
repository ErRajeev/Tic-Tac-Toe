import "./Square.css";

const Square = (props) => {
  return (
    <>
      <div className="square" onClick={props.onClick}>
        <h2>{props.value}</h2>
      </div>
    </>
  );
};

export default Square;
