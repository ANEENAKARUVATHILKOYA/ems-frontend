import {React,useEffect,useState} from 'react';
import './Admin.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Admin() {

const [allEmployees, setEmployees]=useState([])


const fetchData=async()=>{
  const result=await axios.get('http://localhost:8000/getAllEmployee')
 // console.log(result.data.employees);
 setEmployees(result.data.employees)
}

//function for delete
const handleDelete=async (id)=>{
  const result=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
   //console.log(result);
   alert(result.data.message)
   //to refresh the table content
   fetchData()
}

console.log(allEmployees);

useEffect(()=>{
  fetchData()
},[])



  return ( 
    <div >

     <div className='text-end  mt-4  me-4'>
      <Link to={'/add'}>
        <Button variant='success'>
        < i class="fa-solid fa-user-plus" /> Add Employee
        </Button>
        </Link>
     </div>   
    
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

   <Table  className='w-75  container border' striped bordered hover variant='dark'>
      <thead>
        <tr> 
          <th>Emp ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

         {
          allEmployees?.map(item=>(

            <tr>
          <td>{item.id}</td>
          <td>{item.uname}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td>
          <Button  className="me-3"  variant="light">
          < i class="fa-solid fa-book-open-reader" /> View
          </Button>
          
          <Link  to={'edit/' +item.id}>
          <Button className='me-3'  variant="secondary">
             <i class ="fa-solid fa-user-pen"></i> Edit
           </Button>
          </Link>

          <Button  onClick={()=>handleDelete(item.id)}    variant='danger'>
          < i class="fa-solid fa-person-circle-minus" /> Delete
          </Button>
          </td>
          </tr>

          ))
        }
      </tbody>
    </Table>

    </div>
  )
}

export default Admin