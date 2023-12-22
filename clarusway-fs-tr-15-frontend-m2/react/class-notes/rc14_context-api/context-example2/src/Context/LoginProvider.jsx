import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
//? 1.Login bilgilerinin oluşturan context oluşturduk

export const LoginContext = createContext();

//? 2
const LoginProvider = ({children}) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const values={
    user,
    setUser,
  }
  return <LoginContext.Provider value={values}>

{children}
  </LoginContext.Provider>;
};

//? Comsumin için bir custom hook yazıyoruz
export const useLoginContext=()=>{
  return useContext(LoginContext)
}
export default LoginProvider;
