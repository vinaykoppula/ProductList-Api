import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ListPage() {
  const url ='https://productlist-api-4e97a-default-rtdb.firebaseio.com/data.json';
  const [products,setProducts] = useState([
    // products.title : ''
  ])

  useEffect(() => {
    axios.get(url)
    // fetch('https://productlist-api-4e97a-default-rtdb.firebaseio.com/data.json')
    .then(response =>   {
      
      console.log(response)
     console.log(response.data)
      setProducts(response.data)
      // return response.json()
      // this.setState(() => {Map(response.data)})

      
    })
    .then(data => {
      // console.log(data);
      setProducts(data);
    })
    .catch(err => {
      console.log(err);
    })

  },[])
  return (
    <div>
        <h2>You are in ListPage View</h2>
        <Link className='Link' to='/'>Back to Home</Link>
        <Link className='Link' to='/singlePage'>Click on Product for more details</Link>
        <Link to='*'></Link>
        <h3>Products Listed :</h3>
        {/* <h2>{this.response}</h2> */}
        {/* {this.state.data && this.state.data.map(user => <li id={data.id}>{ data.name }</li>)} */}
        {/* <h2>{product.price}</h2> */}
        {/* <div>
          <ul>
            {products.map(product => (
              <li key={product.title}></li>
            ))}
          </ul>
        </div> */}
        {/* {products && products[0]} */}
 

        

        
    </div>
  )
}

export default ListPage