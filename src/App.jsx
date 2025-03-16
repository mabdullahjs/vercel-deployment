import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'
import Logo from './assets/logo.jpg'

const App = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then(res => {
        console.log(res.data.products);
        setProducts(res.data.products)
      }).catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        console.log("finally chal rha ha");
        setLoading(false)

      })
  }, [])
  return (
    <>
      <h1 className='text-center text-5xl bg-[#00bcff] text-white py-5 hover:bg-amber-300 hover:text-black cursor-pointer'>Hello world</h1>
      <img src={Logo} alt="logoImg" />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {products && products.map(item => {
          return <Card key={item.id} title={item.title} image={item.thumbnail} />
        })}
      </div>
    </>

  )
}

export default App

