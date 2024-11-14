import React from 'react'

/* importamos desde Cards en plural */
import Cards from './components/Cards'

/* importamos el css dandole la ruta */
import './App.css'

function App() {
  return (
    
      <div className="App">
        {/* agregamos mi titulo al trabajo  */}
        <div className="container">
          <h1 className="centered-text">React con Fredi Cc</h1>
        </div>
        
        <Cards />
      </div>
  )
}

export default App