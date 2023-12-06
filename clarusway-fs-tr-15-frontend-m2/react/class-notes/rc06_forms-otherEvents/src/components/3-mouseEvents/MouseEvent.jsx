import { useState } from "react";

const MouseEvent = () => {
  const [visible, setVisible] = useState(true);

  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();

  const handleMouseMove = (e) => {
    console.log("X:", e.pageX);
    console.log("Y:", e.pageY);

    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="container text-center d-flex flex-column align-items-center mt-4"
    >
      <h2 className="text-danger">MOUSE EVENTS</h2>

      <div
        id="todo-1"
        className="bg-success text-light w-50 p-4"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        todo item 1
      </div>

      {visible && <span>Aciklama</span>}

      <div id="todo-2" className="bg-success text-light w-50 p-4 mt-4">
        todo item 2
      </div>

      <div id="todo-3" className="bg-success text-light w-50 p-4 my-4">
        todo item 3
      </div>

      <p>X:{coordX} and Y: {coordY} </p>
    </div>
  );
};

export default MouseEvent;
