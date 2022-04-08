import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './FormInput.css'
import Axios from 'axios'



const IndexPage = () => {
  const url ="https://test-api-6e645-default-rtdb.firebaseio.com/data.json"
  const [data,setData] = useState({
    title : '',
    price : '',
    description : '',
    comments : '',
    type : '',
    date : ''
  })
  const[show,setShow] = useState(false);
  function changeHandler(e){
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData);
  }
  

  function submitHandler(e){
    e.preventDefault()
    // Axios.post(url,
    //   {
    //     title : data.title,
    //     price : data.price,
    //     description : data.description,
    //     comments : data.comments,
    //     type : data.type,
    //     date : data.date

    //   }).then(res => {console.log(res.data)})
    //   alert('Product Registered')
    fetch('https://productlist-api-4e97a-default-rtdb.firebaseio.com/data.json',
   { 
     method : 'POST',
    body : JSON.stringify(data),
    Headers : {
      "Content-Type" : "application/json ; charset = UTF-8"
    }}
    ).then(res => alert('Product Registered')).catch(err => console.log(err))
    }
  return (
    <div class="myApp">
      
        <h2>Welcome to ProductList App</h2>
        <Link className='Link' to='/' onClick={() => setShow(true)}>Submit New Item</Link>
        <Link className='Link' to='/listPage'>View All Products</Link>
        <h1>Register Product</h1>
        {
          show?
        
      <form onSubmit={e => submitHandler(e)}>
      <input class="col-md-6" onChange={(e) => changeHandler(e)} value={data.name} type="text" name="title" placeholder='Enter Title'/>
      <input class="col-md-6" onChange={(e) => changeHandler(e)} value={data.price} type="number" name="price" placeholder='Enter Price'/><br/>
      <input class="desc col-md-12" onChange={(e) => changeHandler(e)} type="textarea" name="description" value={data.description} placeholder='Enter Description'/><br/>
      <input class="com col-md-12" onChange={(e) => changeHandler(e)} type="textarea" name="comments" value={data.comments} placeholder='Enter Comments'/><br/>
      
      <select class="col-md-6" onChange={(e) => changeHandler(e)} name="type" value={data.type}>
      <option defaultValue>Select Type</option>
        <option value="phone">Phone</option>
        <option value="ipad">IPad</option>
       
        <option value="watch">Watch</option>
        <option value="tv">TV</option>
      </select>
      <input class="col-md-6" onChange={(e) => changeHandler(e)} value={data.date} type="date" name="date" placeholder='Select Date'/>
      <button class="col-md-6" type="submit" onSubmit={(e) => submitHandler(e)}>Submit</button>
      <button class="col-md-6">Clear</button>
      </form>:null
}

        
    </div>
  )
}

export default IndexPage