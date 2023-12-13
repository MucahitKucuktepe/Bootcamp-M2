import { useState, useEffect } from "react";

//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [state1, state2]); //? Dependency Array

import React from "react";

const UseEffectHook = () => {
  const [count, SetCount] = useState(0);
  useEffect(() => {
   console.log("Fetch Started");
   return()=>{
    console.log("Unmounting");
   }
  }, []);
  console.log("render");
  return (
    <div className="container text-center">
      <h1 className="text-danger">Useeffect</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => SetCount(count + 1)}>
        INC
      </button>
      <button
        className="btn btn-danger ms-2"
        onClick={() => SetCount(count - 1)}
      >
        Dec
      </button>
    </div>
  );
};

export default UseEffectHook;
