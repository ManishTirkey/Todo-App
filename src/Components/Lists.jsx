import React from 'react';
import './Lists.css'



const List =(props)=>{
    return (
        <>
            <div className="list" id={props.id}>
                 
                 <button 
                //onClick={props.deleteItem(props.id)}>   don't do this
                 onClick={()=>{
                     props.deleteItem(props.text ,props.id);
                    
                    // document.getElementById(props.id).remove();
                 }}>  
                 <i className="fas fa-times"></i>  
                 </button>

                 <li>{props.text}</li> 
            </div>   
        </>
    );

}

export default List;

