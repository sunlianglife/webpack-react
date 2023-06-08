import { BrowserRouter as Router } from 'react-router-dom'

const App = (a: number) => {
  return (
    <Router>
      <div className="app">
        <h1>Hello Webpack-Rea ctwww2233{a?.length}</h1>
      </div>
    </Router>
  )
}

export default App
