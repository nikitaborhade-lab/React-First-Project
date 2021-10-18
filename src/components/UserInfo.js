import React from "react"
//import DatePicker from "react-datepicker"
//import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import Form from 'react-bootstrap/Form';
//import { Alert } from 'reactstrap';

function UserInfo() {
  //const [selectedDate, setSelectedDate] = useState(null)

  const handleSubmit = () => {
      alert('Thanks for Booking!');
  }

  return (
    <div style={{ 
    alignContent:'center',  
    width: 900, 
    paddingLeft: "30%",
    paddingTop: "10%" }}>
      <h2>User Details</h2>
      <form>
        <div>
          <Form.Label>Enter Your Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
          {/* Enter your Name:
          <input type="text"></input> */}
        </div>
        <br />
        <div>
        <Form.Label>Date and Time:</Form.Label>
        <Form.Control type="date"  placeholder="Enter number of Seats"  />
          {/* <DatePicker 
            selected={selectedDate}
            onChange={(Date) => setSelectedDate(Date)}
            dateFormat="dd/MM/YYY"
          ></DatePicker> */}
        </div>
        <br />
        <div>
        <Form.Label>Number Of Seats:</Form.Label>
          <Form.Control type="Number"  placeholder="Enter number of Seats"  />
        </div>
        <br />
        <button className="btn btn-primary active" onClick={()=> handleSubmit()}>Submit</button>
      </form>
    </div>
  )
}
export default UserInfo
