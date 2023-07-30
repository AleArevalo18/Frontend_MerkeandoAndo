import { useState, useEffect } from 'react'
import './App.css'

import Navbar from './assets/componentes/navbar'
import Card from './assets/componentes/cardProducts'

function App({brand}) {
  
  const [products, setproducts] = useState([])

  useEffect(() => {

    const getProducts = () => {
      fetch('http://localhost:3000/products/listarProducto')
      .then(res => res.json())
      .then(res => setproducts(res)) 
      // .then(res => console.log(res))
    }
    getProducts()

  }, [])
  

  return (
    <>
      <Navbar brand='Merkeando Ando'/>
      <Card products={products}/>
    </>
  )
}

export default App
