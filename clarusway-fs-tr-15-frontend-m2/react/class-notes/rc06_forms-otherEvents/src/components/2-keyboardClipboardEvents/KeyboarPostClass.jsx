import React, { useState } from "react";

const KeyboarPostClass = () => {
  const [icerik, setIcerik] = useState();
  const handleKeyDown=(e)=>{
console.log(e.keyCode);
if((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode <106)){
    alert("Buraya rakam girilemez")
    e.preventDefault()
}
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
        <p className="border border-danger border-2">{icerik}</p>
      </div>
    </div>
  );
};

export default KeyboarPostClass;
