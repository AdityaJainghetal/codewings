import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'
import Table from 'react-bootstrap/Table';



const CustomerOrders = () => {
  const [mydata, setMydata] = useState([]);

  const loadData =async()=>{
    try {
        let api= "http://localhost:8000/admin/orderdetail"
        const response =  await axios.get(api);
        setMydata(response.data)
    
    
    } catch (error) {
        console.log(error);

    }

  }

  useEffect(()=>{
    loadData()
  },[])
  
  const ans= mydata.map((key)=>{


    return (
    <>
    <tr>
        <td>{key.customerid}</td>
        <td>{key.customername}</td>
        <td>{key.productname}</td>
        <td>{key.amount}</td>
        <td>{key.email}</td>
        <td>{key.address}</td>
    </tr>
    
    
    
    
    
    
    
    </>
  )
})

return(
    <>
     <h1> Customer Orders</h1>
           <hr />
           <Table striped bordered hover>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Name</th>
          <th>Products</th>
          <th>Amount</th>
          <th> Email</th>
          <th> Shipping Address</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>
    
    
    </>
)






}



export default CustomerOrders