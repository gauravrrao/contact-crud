import React,{useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userAppSelector } from './Hooks'
import { RootState } from '..'
import { updateUser } from '../Userreducer'
import { useDispatch } from 'react-redux'

const Edit = () => {

    let dispatch=useDispatch()

    let {id}=useParams()
    const numericId = id ? parseInt(id, 10) : undefined;
    let users = userAppSelector((state:RootState)=>state.users)

    const existinguser = users.filter(user => user.id === numericId)
    console.log(existinguser);
    const{firstname,lastname,status}=existinguser[0]

    let[inputdata,setinputdata]=useState(firstname)
    let[indata,setindata]=useState(lastname)
    let[instatus,setstatus]=useState(status)
   
    let navigate=useNavigate()
    

    let handelupdate=()=>{
       dispatch(updateUser({
        id:id,
        firstname:inputdata,
        lastname:indata,
        status:instatus
       }))
       navigate('/')
        
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
        <p className='scontain'>Edit Contact</p>
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
        <button onClick={handelupdate} className='sbutton'>Update Contact</button>
    </div>
    </div>
        </div>
    </div>

  )
}

export default Edit