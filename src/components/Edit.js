import {React, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edit() {

  //state creation
  const [id, setId]=useState('')
  const [uname, setUname]=useState('')
  const [age, setAge]=useState(0)
  const [designation, setDesig]=useState('')
  const [salary, setSalary]=useState(0)

  //create object
  const params=useParams()
  //console.log(params.id);


  //API
  const fetchEmp= async()=>{
    const result=await axios.get('http://localhost:8000/getAnEmp/'+params.id)
    console.log(result.data.employee);

  setId(result.data.employee.id)
  setUname(result.data.employee.uname)
  setAge(result.data.employee.age)
  setDesig(result.data.employee.designation)
  setSalary(result.data.employee.salary)

 // console.log(id);
 // console.log(uname);
 // console.log(age);

  }

  const location=useNavigate()

  //function for upadation
  const handleUpdate=async(e)=>{
      e.preventDefault()

      const body={
        id,
        uname,
        age,
        designation,
        salary
      }

      const result=await axios.post('http://localhost:8000/editEmp',body)
      //console.log(result);
      alert(result.data.message)
      location('/')
  }

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

   <h3 className='mt-5  text-center   text-white'>
   < i class="fa-solid fa-user-pen   me-3" /> 
      Edit Employee<br/>
  ------------------------------------   
  </h3>

  <Form className='p-5  |w-75 container'>

<Form.Group className='mb-3'  controlId='exampleForm.ControlInput1'>
<Form.Label>User_name</Form.Label>
<Form.Control  type='text'    placeholder=''  value={uname}    onChange={(e)=>setUname(e.target.value)}/>
</Form.Group>

<Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
<Form.Label>Age</Form.Label>
<Form.Control  type='text'    placeholder='' value={age}     onChange={(e)=>setAge(e.target.value)}/>
</Form.Group>

<Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
<Form.Label>Designation</Form.Label>
<Form.Control    type='text'    placeholder=''  value={designation}    onChange={(e)=>setDesig(e.target.value)} />
</Form.Group>

<Form.Group className='mb-3'  controlId='exampleForm.ControlTextarea1'>
<Form.Label>Salary</Form.Label>
<Form.Control      type='text'    placeholder=''  value={salary}     onChange={(e)=>setSalary(e.target.value)}/>
</Form.Group>

<Button   onClick={(e)=>handleUpdate(e)}   variant='success'>Update</Button>

<Link  to={'/'}>
 <Button className='ms-3'  variant='danger'>Cancel</Button>
</Link>

</Form>

    </div>
  )
}

export default Edit