import React from 'react'
import { Navigate, Outlet,  } from 'react-router-dom'


const PrivateRouter = () => {

    //? Context API, redux, localstorage dan gelir normalde
const isAutenticated=true

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