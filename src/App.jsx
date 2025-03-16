// // // import React, { useEffect, useState } from 'react'

// // // const App = () => {
// // //   const [users , setUsers] = useState(null);
// // //   useEffect(() => {
// // //     fetch('https://jsonplaceholder.typicode.com/users')
// // //       .then(response => response.json())
// // //       .then(res => {
// // //         console.log(res)
// // //         setUsers(res)
// // //       }).catch((err)=>{
// // //         console.log(err);

// // //       })
// // //   }, [])
// // //   return (
// // //     <>
// // //       <h1>Hello world</h1>

// // //       {users ? users.map(item => {
// // //         return <p key={item.id}>{item.name}</p>
// // //       }) : <h1>Loading...</h1>}
// // //     </>
// // //   )
// // // }

// // // export default App


// // // // falsy values in js
// // // // 0
// // // // ""
// // // // null
// // // // undefined
// // // // Nan
// // // // false
// // // // document.all











// // import axios from 'axios'
// // import React, { useEffect, useState } from 'react'

// // const App = () => {
// //   const [loading , setLoading] = useState(true)
// //   const [users , setUsers] = useState(null)
// //   const [error , setError] = useState(false)
// //   useEffect(()=>{
// //     async function getData(){
// //      try {
// //        const response = await axios('https://jsonplaceholder.typicode.com/users')
// //        console.log(response)
// //        setUsers(response.data)
// //      } catch (error) {
// //       console.log('error ==> ' , error);
// //       setError(true)

// //      } finally {
// //       console.log("finally");
// //       setLoading(false);

// //      }
// //     }

// //     getData()


// //   } , [])
// //   return (
// //     <>
// //       <h1>Hello world</h1>
// //       {loading && <h1>Loading...</h1>}
// //       {users && users.map(item => {
// //         return <p key={item.id}>{item.name}</p>
// //       })}
// //       {error && <h1>Error occured</h1>}
// //     </>
// //   )
// // }

// // export default App







import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import axios from 'axios'

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

// // deployement
// // tailwind
// // bootstrap
// // daisy UI
// // shadcn
// // material
// // react router dom
// // usecallback and use memo
// // supabase
// // redux toolkit
// // project week
// // next js (2)
// // react native



// import React from 'react'

// const App = () => {
//   return (
//     <>
//     <h1 className='text-center text-5xl bg-[#00bcff] text-white p-[10rem] m-[50px] hover:bg-amber-300 hover:text-black cursor-pointer'>Hello world</h1>
//     </>
//   )
// }

// export default App