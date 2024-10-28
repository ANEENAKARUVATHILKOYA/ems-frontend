import {React, useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function View() {

//state to store employee data
const [employee, setEmp]=useState({})


  const params=useParams()


  //API
  const fetchEmp= async()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
   setEmp(result.data.employee)
  }

  //console.log(employee);

 useEffect(()=>{
      fetchEmp()
 },[])


  return (
    <div>


   <h1  className='p-5  text-white'>
   <i class="fa-solid fa-house-chimney-window"></i> Employee Management App
   </h1>

   <p>
   Writing Content for an Employee App—In Just Seven Easy Steps · 1. Don't Go into the Content Death Zone · 2. Whitespace for the Win 
   Writing Content for an Employee App—In Just Seven Easy Steps · 1. Don't Go into the Content Death Zone · 2. Whitespace for the Win 
   Writing Content for an Employee App—In Just Seven Easy Steps · 1. Don't Go into the Content Death Zone · 2. Whitespace for the Win 
   Writing Content for an Employee App—In Just Seven Easy Steps · 1. Don't Go into the Content Death Zone · 2. Whitespace for the Win 
   Writing Content for an Employee App—In Just Seven Easy Steps · 1. Don't Go into the Content Death Zone · 2. Whitespace for the Win 
   </p>


   <Card className='w-50 container'>
      <Card.Body>
        <Card.Title>Emp ID : <strong>{employee.id}</strong> </Card.Title>
        <Card.Text>
        NAME : <strong>{employee.uname}</strong>
          </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>DESIGNATION : {employee.designation}</ListGroup.Item>
        <ListGroup.Item>AGE : {employee.age}</ListGroup.Item>
        <ListGroup.Item>SALARY : {employee.salary}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link  to={'/'}>
        <Button>BACK</Button>
         </Link>
        
      </Card.Body>
    </Card>

    </div>
  )
}

export default View