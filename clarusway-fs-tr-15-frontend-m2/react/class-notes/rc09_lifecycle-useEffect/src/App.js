import LifeCycleMethods from "./components/LifeCycleMethods"
import UseEffectHook from "./components/UseEffectHook"
import { useState } from "react"

function App() {
  const [göster, setGöster] = useState(true)
  return (
    <div className="container text-center mt-4">
      
      <UseEffectHook />
      {göster  && <LifeCycleMethods /> }
      <button onClick={()=>setGöster(!göster)} className="btn btn-danger mt-2">Gizle/Göster</button>
    </div>
  )
}

export default App
