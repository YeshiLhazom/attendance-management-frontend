import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
 import { useState } from "react";
 import {signUp} from '../request'
 import { useDispatch } from 'react-redux';
import {setUser} from '../../slices/dataSlice';
import logo from '../../../assets/logo.png'
import { Row } from 'react-bootstrap';

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
       signUp(inputs)
        .then(res =>{
          if(res.status ===200){
            dispatch(setUser(res.data))
            navigate('/')

          }
          
          else{
            console.log(res)
          }
          
        }
         
          
           )
        .catch(err => console.log(err))
      
      }
  return (

    
    <div className='login'>
     
      
    <div>
    
     <div className='login_container'>   
  
        
         <a href=''><img src={logo} alt="logo" width="50px" /></a><br/>
         
         <form>
             <label className='inputhead'> Name: 
              <input type = 'text' name='name' value ={inputs.name} onChange={handleChange}/>
             </label><br/>
             <label className='inputhead'>Email: 
              <input type = 'email' name='email' value ={inputs.email} onChange={handleChange} />
             </label><br/>
             <label className='inputhead'>ID:
             <input type = 'text' name='id' value ={inputs.id} onChange={handleChange} />
             </label><br/>
             <label className='inputhead'>Gender
              <input
                className='inline'
                type="radio"
                value="Male"
                name='gender'
                checked={inputs.gender=== "Male"}
                onChange={handleChange}
              /> <p className='inline'>male</p>
              <input
              className='inline-block'
                  type="radio"
                  value="Female"
                  name='gender'
                  checked={inputs.gender=== "Female"}
                  onChange={handleChange}
                />  <p className='inline'>female</p>
          </label><br/>
        

          <select name='userType' value={inputs.userType} onChange={handleChange}>            <option value="select type ">select user type</option>
            <option value="student">student</option>
            <option value="tutor">tutor</option>
          </select><br/>
          
          <label className='inputhead'>Password:
             <input type = 'password' name='password' value ={inputs.password1} onChange={handleChange}/>
          </label><br/>
          <label className='inputhead'> Confirm:
             <input type = 'password' className={inputs.password===inputs.password2?'password-right':'password-wrong'} name='password2' value ={inputs.password2} onChange={handleChange}/>
          </label><br/>
             <button className="login_btn" type ='submit' onClick={handleSubmit}
            >
                  create account
              </button>
              <p>
             by signing up, you agree the terms<br/>s and 
             conditions of oneshop 
         </p>
         <button className ='signin_btn'
         onClick={()=>navigate('/')}
       
         >
            sign-in
         </button>

         </form>
         
     </div>
     
    </div>
     
  </div>
  
  )
}

export default Signup