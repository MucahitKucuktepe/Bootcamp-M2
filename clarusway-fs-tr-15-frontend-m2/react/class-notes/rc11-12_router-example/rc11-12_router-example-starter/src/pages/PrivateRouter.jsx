import React from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import Login from './Login'

const PrivateRouter = () => {
    const navigate=useNavigate()
    //? Context API, redux, localstorage dan gelir normalde
const isAutenticated=false

//? UseNavigate (Hook) ile Navigate (Component) aslında aynı işi yapar.Yani yönlendirme işlemini gerçekletirir.
//? Aralarında ki fark kullanım yerleridir. Hook olan bir event ya da useeffect hook'unun içerisi gibi yerlerde kullanılır.(Fonksiyonların kulllanıldığı yerler)

//? Diğeri ise bir component oldugu için JSX içerisinde yönlendirme yapmak için kullanılır.
//? Link is kullanıcıdan bir girdi beklenildiği durumlarda kullanılır.

  return (
    <div>
        {isAutenticated ? <Outlet />: <Navigate to ="/login" />}
    </div>
  )
}

export default PrivateRouter