import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import Card from './Card';
import { userAppSelector } from './Hooks';
import { RootState } from '..';

let Contact = () => {
  let [show, setShow] = useState(true);

  let handelclick = () => {
    setShow(!show);
  };

  let users = userAppSelector((state: RootState) => state.users);

  return (
    <div className='container'>
      <div className='header'>
        <p>Contact Page</p>
      </div>
      <div className='belowcontainer'>
        <div className='leftside'>
          <Link to='/'>
            <div className='contactbox'>
              <p>Contact</p>
            </div>
          </Link>
         <Link to="/charts"> <div className='cam'>Charts and Maps</div></Link>
        </div>
        <div className='rightside'>
          <Link to='/contactmodal' style={{ textDecoration: 'none', color: 'black' }}>
            <div className='headingcon' onClick={handelclick}>
              <p>Create Contact</p>
            </div>
          </Link>
          {show ? (
            users.length > 0 ? (
              <div className='cardbox'>
                {users.map((val) => (
                  <Card
                    key={val.id} // Make sure to provide a unique key
                    firstname={val.firstname}
                    lastname={val.lastname}
                    status={val.status}
                    id={val.id}
                  />
                ))}
              </div>
            ) : (
              <div className='errorshow'>
                <div className='crossdiv'>
                  <img className='crossimg' src='./false-2061131_1280.png' alt='Cross' />
                </div>
                <div className='errorpara'>
                  <p>No Contact Found. Please add a contact from the Create Contact Button</p>
                </div>
              </div>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Contact;
