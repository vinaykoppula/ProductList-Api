import React from 'react'
// import Calendar from 'react-calendar' 
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'



const SubmitItem = () => {
  return (
    <div class="container mt-1 col-md-4">
        <h2>Submit Item</h2>
        <form class="row g-3">
            <div class="col-md-6">
                
                <input type="text" class="form-control" id="title" placeholder='Enter Title' required></input>
            </div>
            <div class="col-md-6">
           
                <input type="number" class="form-control" id="price" placeholder='Enter Price' required></input>
            </div>
            
            <div class="col-md-12">
           
                <textarea class="form-control" id="comments" rows="5" placeholder='Description' required/>
            </div>
            <div class="col-md-12">
            
                <textarea type="text" class="form-control" id="comments" rows="3" placeholder='Comments' required/>
            </div>
            <div class="select col-md-6">
            <select class="form-select">
                <option selected>Select Type of Product</option>
  <option value="Phone">Phone</option>
  <option value="Ipad">Ipad</option>
  <option value="Tv">Tv</option>
  <option value="Watch">Watch</option>
</select></div>
           <div class="col-md-6">
               {/* <Calendar></Calendar> */}
               <DatePickerComponent placeholder='Select Date' ></DatePickerComponent>

           </div>
         
         <input class="btn btn-secondary col-md-6" type="submit" value="Register"/>
  <input class="btn btn-secondary col-md-6" type="reset" value="Clear"/>
        
        
        </form>
    </div>
  )
}

export default SubmitItem