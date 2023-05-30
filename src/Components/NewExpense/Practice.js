// import React, { useState } from "react";

// const Practice = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const inputValHandler = (e) => {
//     setInputValue(e.target.value);
//   };

//   const submitHandler = () => {
//     if (inputValue.trim()) {
//       setTodos([inputValue, ...todos]);
//       setInputValue("");
//     }
//   };

//   const deleteHandler = (index) => {
//     setTodos(todos.filter((cur, i) => i !== index));
//   };

//   console.log(todos);

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={inputValHandler} />
//       <button onClick={submitHandler}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button
//               onClick={() => {
//                 deleteHandler(index);
//               }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Practice;

// import React, { useState } from "react";

// const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

// function SearchFilter() {
//   const [search, setSearch] = useState("");

//   const inputHandler = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredItems = items.filter((item) =>
//     item.toLowerCase().includes(search.toLowerCase())
//   );
//   return (
//     <div>
//       <input type="text" value={search} onChange={inputHandler} />
//       <ul>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchFilter;

// import React, { useState } from "react";

// const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// function DragDropList() {
//   const [items, setItems] = useState(initialItems);
//   const [draggingItem, setDraggingItem] = useState(null);

//   return (
//     <div>
//       <ul>{/* Render the list of items here */}</ul>
//     </div>
//   );
// }

// export default DragDropList;
