import React from 'react';
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { userAppSelector } from './Hooks';
import { RootState } from '..';
import { Link } from 'react-router-dom';
import { deleteUser } from '../Userreducer';

interface User {
    firstname: string;
    lastname: string;
    status: string;
    id:number;
    }
const Card:React.FC<User> = ({firstname,lastname,status,id})=> {
    
    let users = userAppSelector((state:RootState)=>state.users)
    let dispatch=useDispatch()
    let handeldelete=(id:number)=>{
        dispatch(deleteUser({id:id}))
    }
  
    return (
        <div className='maintbox'>
            <div className='cardcontainer'>                   
                            <p>{firstname}</p>
                            <p>{lastname}</p>
                            <p>{status}</p>
            </div>
            <div className="option">
               <Link to={`/edit/${id}`} className='btn1'>Edit</Link>
                <button onClick={()=>handeldelete(id)} className='btn2'>Delete</button>
            </div>
        </div>
    );
};

export default Card;
