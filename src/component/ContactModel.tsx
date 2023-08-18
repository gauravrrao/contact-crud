import React,{useState} from 'react'
import './Model.css'
import {Link, useNavigate} from "react-router-dom"
import { addUser } from '../Userreducer'
import { useDispatch } from 'react-redux'


const ContactModel = () => {

    let[inputdata,setinputdata]=useState('')
    let[indata,setindata]=useState('')
    let[status,setstatus]=useState("")
    let navigate = useNavigate()
    
    let dispatch=useDispatch()

    let handelsave=()=>{
        let id=new Date().getSeconds()
        if(inputdata=== '' && indata === ''){
           alert("Please fill the First Name and Last Name")   
        }
        else{
            dispatch(addUser({id:id,lastname:indata,firstname:inputdata,status:status}))
            navigate('/')
        }
        
    }

    const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setstatus(event.target.value);
      };

    return (
        <div className='container'>
        <div className="header">
            <p>Contact Page</p>
        </div>
        <div className='belowcontainer'>
            <div className="leftside">
                <Link to="/"><div className='contactbox'>
                    <p>Contact</p>
                </div></Link>
                <div className='cam'>
                    Charts and Maps
                </div>
            </div>
            <div className="rightside">
        <div className='scontain'>
            <p className='scontain'>Add Contact</p>
            <div className="screenbox">
                <div>
                    <div className='fname'>
                    <p>First Name :</p>
                    <input type='text' value={inputdata} onChange={(e)=>{setinputdata(e.target.value)}} />
                    </div>
                   <div className='lname'>
                   <p>Last Name :</p>
                    <input type='text'  value={indata} onChange={(e)=>{setindata(e.target.value)}}/>
                   </div>
                </div>
                <div className="raddiv">
                    <div className="divstatus">
                    <p>status : </p>
                    </div>
                    <div className='divai'>
                        <div className="active">
                        <input type="radio" 
                        name="active"
                        value="active" 
                        defaultChecked={status == "active"}
                        onChange={handleStatusChange}/>
                        <p>Active</p>
                        </div>
                        <div className="inactive">
                        <input type="radio" 
                        value="inactive"
                        name="inactive" 
                        defaultChecked={status == "inactive"}
                        onChange={handleStatusChange}/>
                        <p>Inactive</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handelsave} className='sbutton'>Save Contact</button>
        </div>
        </div>
            </div>
        </div>
    )
}

export default ContactModel