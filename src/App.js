import React, { useState } from "react";
import "./App.css";
import List from "./Components/Lists.jsx";

function App() {
  const [item, upDateItem] = useState("");
  const [itemArr, UpdateArr] = useState([]);

  const ItemChange = (event) => {
    upDateItem(event.target.value);
  };

  const AddItem = () => {
    if (item === "") {
      UpdateArr(() => {
        return ["Pls enter something"];
      });
    } else {
      UpdateArr(() => {
        return [...itemArr, item];
      });
    }
    upDateItem("");
  };

  const deleteItemIndex = (element, index) => {
    console.log("deleted");
    console.log(element);
    console.log(index);

    UpdateArr((oldArr) => {
      // console.log(oldArr);
      return oldArr.filter((ele, ind) => {
        if (index !== ind && element !== ele) {
          return ele;
        }
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="to-do-list-card">
          <h1>ToDo-List</h1>
          <hr />
          <br />
          <div className="input">
            <input
              type="text"
              placeholder="Enter what you want with me"
              onChange={ItemChange}
              value={item}
            />

            <button onClick={AddItem}>
              {" "}
              <i className="fas fa-plus"></i>{" "}
            </button>
          </div>
          <br />
          <hr />
          <br />

          <div className="to-do-list">
            {/* <List/> */}

            {itemArr.map((text, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  text={text}
                  deleteItem={deleteItemIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
