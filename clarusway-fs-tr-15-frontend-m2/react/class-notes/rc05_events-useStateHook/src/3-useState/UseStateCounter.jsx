//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanımlanmalıdır. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import React, { useState } from "react";

const UseStateCounter = () => {
  // let count=0

  const [count, setCount]=useState(0)
  console.log(count);
  const handleIncrement =()=>{
    setCount(count +1)
    // count= count +1
    console.log(count);
  }
  return (
    <div>
      <h1>UseState Counter</h1>
      <h2>Count:{count} </h2>
      <button onClick={handleIncrement} >INC</button>
      <button onClick={()=> count >0 && setCount(count -1)} >DEC</button>
      <button onClick={()=>setCount(0)} >CLR</button>
    </div>
  );
};

export default UseStateCounter;
