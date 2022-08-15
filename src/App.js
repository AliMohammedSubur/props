import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'
function App() {

    let title ="My activities to do for the week"
  return (
      <div>
          <NavBar title={title} />
          <main>
              <Todo title="learning react" detetime="15th August 2017" />
              <Todo title="Learning Football" detetime="15th August 2018" />
              <Todo title="learning HTML" detetime="15th August 2019" />
              <Todo title="learning app.js" detetime="15th August 2020" />
              <Todo title="learning css" detetime="15th August 2021" />
              <Todo title="learning Javascript" detetime="15th August 2022" />

          </main>
    </div>
  )
}

export default App