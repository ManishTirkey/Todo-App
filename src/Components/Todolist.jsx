import React ,{useState} from 'react';
import './Todolist.css';
import List from './List2.jsx'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const App = ()=>{

  const [item, upDateItem] = useState("");
  const [itemArr, UpdateArr] = useState([]);



const ItemChange =(event)=>{
  upDateItem(event.target.value);
}

const AddItem2 =()=>{
  if (item === ""){
    UpdateArr(()=>{
        return ["Pls enter something"];
      });       
  }else{
    UpdateArr(()=>{
        return [...itemArr, item];
      }); 
  }
  upDateItem("");
}

// const deleteItemIndex2 =(element, index)=>{
//   UpdateArr((oldArr)=>{
//     // console.log(oldArr);
//     return oldArr.filter((ele, ind)=>{
//       if (index===ind && element===ele)
//         {
//             console.log("deleted it");
//             console.log(ele, ind);
//         }

//         return ele;
        
//     });
//   }); //end updatearr
  
  
// }// end deleteitemindex2



  return (
    <>
      <div className='todolist-container'>
        <div className ="to-do-list-card2">
            <br/>
            
            <h3>ToDo-List</h3>
            <br/>
            <hr/>
            <br/>

            <div className='list-input'>

                <input 
                type="text"
                placeholder="Enter what you want with me"
                onChange={ItemChange}
                value={item}
                />
                
                <Button onClick={AddItem2} className="btn">
                    <AddCircleIcon fontSize="large" />
                </Button>
          </div>

          <br/>
          <hr/>
          <br/>

          <div className="to-do-list2-items">
        
              {/* <List/> */}

              {itemArr.map((text, index)=>{
                return (
                <List 
                key={index} 
                id={index} 
                text={text}
                />
                );
              })}

          </div>
        </div>
      </div>    
    </>
  )
}



export default App;