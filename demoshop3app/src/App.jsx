import { useState } from 'react'
import './App.css'
import Products from './components/products'
import NewProduct from './components/NewProduct';

function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2025, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2025, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2025, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2025, 5, 5),
    },
  ];

  function ProductDataHandler(data) {
    console.log('Now this is inside ProductDataHandler App ')
    console.log(data);
  }
  return (
    <>
      <h1>hello project</h1>
      <NewProduct onProductData={ProductDataHandler}></NewProduct>
      <Products items={products} />
    </>
  )
}

export default App
