import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer } from 'react-leaflet'

const Charts = () => {
  return (
    <div>
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
            
        </div>
        </div>
            </div>
        </div>
    
    </div>
  )
}

export default Charts