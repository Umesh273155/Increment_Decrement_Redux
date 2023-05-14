 
import React from 'react';
import {useSelector} from 'react-redux';

 function Count(){
    const cnt=useSelector((state)=>state);
    return (
        <div>
        <h2>{cnt}</h2>
        {/* <h3>0</h3> */}
        </div>
    )
 }
 export default Count;