import React, { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'

function Product() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
      setLoading(true)
      axios({
        method: "GET",
        url: "https://fakestoreapi.com/products/"
      }).then(res => {
        console.log(res.data)
        setData(res.data)
      }).catch(e => console.log(e))
      .finally(() => setLoading(false))
    }, [])

  return (
    <div>
    <h3 className="bg-gray-900 h-full text-5xl text-yellow-400 pb-0 pt-0">All products in stock</h3>
    <div className="w-full grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 pl-12 pr-12 gap-4 py-8 mx-0 my-0 bg-gray-900  ">
      {data.map((product) => ( 
        <div key={product.id} className="">
          <div><img src={product.image} className="h-96 sm:h-80 w-96 rounded-b-full hover:cursor-pointer hover:animate-bounce pb-4 pt-12 truncate"/></div>
          <div>
          <h6 className="text-white text-xl ml-0 pb-4">{`${product.category}`}</h6>
            <h6 className="text-white text-xl ml-0 pb-4">{`${product.price} USD`}</h6>
            <a className="text-xl p-3 justify-between py-2 
                           bg-yellow-400  
                           hover:text-yellow-200
                           cursor-pointer
                           text-cyan-900
                           rounded-xl
                           w-72
                           list-none
                           text-center
                           ">Add to Cart</a>
          </div>
        </div>
      ))}

    </div>
  </div>
  )
}

export default Product
