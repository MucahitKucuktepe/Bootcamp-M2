import { useState } from "react";

const KeyboardClipboard = () => {
  const [içerik, setIçerik] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode > 47 && e.keyCode < 58) {
      alert("Buraya rakam girilemez");
      e.preventDefault(); //? default davranışı kapatarak girilen rakamin  input ' a basılması engellenmiş oldu.
    }
  };

  const handleCopy = (e) => {
    alert("kopyalandı");
  };
  const handleCut = (e) => {
    alert("Kesme işlemi yapıldı");
    e.preventDefault()
  };
  const handlePast=(e)=>{
    alert("Yapiştirildi")
    e.target.style.fontFamily="Courier New"
  }
  return (
    <div className="container mt-4">
      <h2>Keybord Events</h2>
      <input
        type="text"
        name=""
        id=""
        className="form-control border border-danger border-2"
        onChange={(e) => setIçerik(e.target.value.toLocaleUpperCase())}
        value={içerik}
        onKeyDown={handleKeyDown}
      />

      <div>
        <p onCopy={handleCopy} className="mt-3">
          {içerik.toLocaleLowerCase()}
        </p>
      </div>

      <div>
        <textarea
          onCut={handleCut}
          onPaste={handlePast}
          className="form-control border border-5"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
};

export default KeyboardClipboard;
