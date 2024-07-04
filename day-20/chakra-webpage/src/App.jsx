import Card  from './components/Card'
import React from 'react'
import Signup from './pages/Signup'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer' 
import Header from './components/Header' 



const App = () => {
  return (
    <div>
    <Header/>
      <Card/>
      <Signup/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App