import React from 'react'
import Dashboard from './pages/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path='/*' component={Dashboard}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;