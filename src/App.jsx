import { useState } from 'react'
import './App.css'

import PhantomAssasin from './components/PhantomAssasin'

function App() {
  const [count, setCount] = useState(73)

  return (
    <>
      <div className="image-container">
        <PhantomAssasin />
      </div>
      <h1>ARES</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 5)}>
          la cuenta es {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
