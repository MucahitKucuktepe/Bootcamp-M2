import React, { useState } from "react";

const KeyboarPostClass = () => {
  const [icerik, setIcerik] = useState();
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (
      (e.keyCode > 47 && e.keyCode < 58) ||
      (e.keyCode > 95 && e.keyCode < 106)
    ) {
      alert("Buraya rakam girilemez");
      e.preventDefault();
    }
  };

  const handleCopy = (e) => {
    alert("kopyalandı");
  };
  const handlePaste = (e) => {
    e.target.style.fontFamily = "Courier New";
  };
  const handleMouse=(e)=>{
    console.log(e);
    console.log("X:",e.pageX);
    console.log("X:",e.pageY);
    

    console.log("RX:", e.nativeEvent.offsetX);
    console.log("RY:", e.nativeEvent.offsetY);

  }
  return (
    <div className="container mt-4">
      <h2>Keyboard Events</h2>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setIcerik(e.target.value.toLocaleUpperCase())}
        onKeyDown={handleKeyDown}
      />
      <div className="mt-3">
        <p onCopy={handleCopy} className="border border-danger border-2">
          {icerik}
        </p>
      </div>
      <div>
        <textarea
        onMouseMove={handleMouse}
          onPaste={handlePaste}
          className="form-control"
          name="textarea"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default KeyboarPostClass;
