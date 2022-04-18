import React from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Checking = (props) => {
    
   const {checkId} = useParams()

   
 
    return (
        <div style={{marginBottom:'200px'}}>
          <h2>  this use is {checkId}</h2>

           <h3>i can't to see to Services information which click to (error));</h3> 
          
            
        </div>
    );
};

export default Checking;