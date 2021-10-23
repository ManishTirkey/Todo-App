import React, {useState} from 'react';
import './List2.css';
import DeleteIcon from '@material-ui/icons/Delete';


const List =(props)=>{

    const [line, updateLine] = useState(false);

    const cutIt =()=>{
        updateLine(true);
    }

    return (
        <>
            <div className="list2" id={props.id}>
                 
                 <button 
                 className="remove-btn"
                 onClick={()=>{
                     cutIt();
                 }}>  
                 <DeleteIcon className="remove-icon"/>
                 
                 </button>

                 <li style={{textDecoration:line ? "line-through": "none"}}>{props.text}</li> 
                 {/* <li>items</li>  */}


            </div>   
        </>
    );

}

export default List;

