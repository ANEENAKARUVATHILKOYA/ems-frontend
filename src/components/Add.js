import {React, useState, useEffect}   from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import axios from 'axios';

function Add() {

const [id, setId]=useState('')
const [uname, setUname]=useState('')
const [age, setAge]=useState(0)
const [designation, setDesig]=useState('')
const [salary, setSalary]=useState(0)


useEffect(()=>{
 setId(uuid().slice(0,4))
},[])


   const  addEmployee=async(e)=>{
    e.preventDefault()
    setId(uuid().slice(0,4));
    const body={
      id,uname,age,designation,salary
    }
    //console.log(body);

  //api creation
  const result= await axios.post("http://localhost:8000/addEmployee",body)
  alert(result.data.message)
}


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


   <h3 className='mt-5  text-center   text-white'>
   < i class="fa-solid fa-user-plus  me-3" /> 
     Add New Employee<br/>
  ------------------------------------   
  </h3>

  <Form className='p-5  |w-75 container'>

    <Form.Group className='mb-3'  controlId='exampleForm.ControlInput1'>
    <Form.Label>User_name</Form.Label>
    <Form.Control    onChange={(e)=>setUname(e.target.value)}   type='text'    placeholder='  ' />
    </Form.Group>

    <Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
    <Form.Label>Age</Form.Label>
    <Form.Control   onChange={(e)=>setAge(e.target.value)}  type='text'    placeholder='  ' />
    </Form.Group>

    <Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
    <Form.Label>Designation</Form.Label>
    <Form.Control   onChange={(e)=>setDesig(e.target.value)}  type='text'    placeholder='  ' />
    </Form.Group>

    <Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
    <Form.Label>Salary</Form.Label>
    <Form.Control   onChange={(e)=>setSalary(e.target.value)}   type='text'    placeholder='  ' />
    </Form.Group>

    <Button onClick={(e)=>addEmployee(e)}   className='ms-5'  variant='light'>Add</Button>

    <Button className='ms-5'  variant='danger'>Cancel</Button>

  </Form>

    </div>
  )
}

export default Add