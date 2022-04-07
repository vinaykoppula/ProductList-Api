import React from 'react'
import IndexPage from './Components/IndexPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListPage from './Components/ListPage'
import SinglePage from './Components/SinglePage'
import SubmitItem from './Components/SubmitItem'
import DisplayProducts from './Components/DisplayProducts'



const App = () => {
  return (
    <div class="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/listPage' element={<ListPage/>}/>
        <Route path='/singlePage' element={<SinglePage/>}/>
      </Routes>
      </BrowserRouter>
      {/* <SubmitItem/> */}
      {/* <DisplayProducts/> */}
       
       {/* <fetchData/> */}
       {/* <DisplayProducts/> */}
    </div>
  )
}

export default App