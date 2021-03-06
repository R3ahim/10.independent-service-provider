
import React, { createContext, useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
 const Ring = createContext('1')
  
const Service = ({service} ) => {
    const {id,img,area,description,price} = service;
    const navigate = useNavigate()
    const navigateToServiceDetail  = id =>{
      navigate(`/checking/` + id)
     }
    return (
       
      
  <div className="col col-widht" >
    <div className="card w-75 w " >
      <img style={{height:'150px',width:'100%'}} src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{area}</h5>
        <h6>comming for Ticket: <span className='text-primary'>{price}</span> $</h6>
        <p className="card-text">{description}</p>
       <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-success'>Explore more</button>
      </div>
   

  

</div>


        </div>
    );
};

export default Service;