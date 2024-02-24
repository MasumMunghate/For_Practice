// import React, { useState } from 'react';



// function TextAreaApp() {

//   const [newTextArea, setNewTextArea] = useState('');
//   const [textAreas, setTextAreas] = useState([]);

//   const addTextArea = () => {
//     if (newTextArea) {
//       setTextAreas([...textAreas, newTextArea]);
//       setNewTextArea('');
//     }
//   };

//   const deleteTextArea = (index) => {
//     const updatedTextAreas = [...textAreas];
//     updatedTextAreas.splice(index, 1);
//     setTextAreas(updatedTextAreas);
//   };

//   const handleTextChange = (event) => {
//     setNewTextArea(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Text Area App</h1>
//       <div>
//         <input
//           type="text"
//           value={newTextArea}
//           onChange={handleTextChange}
//           placeholder="Enter text for new text area"
//         />
//         <button onClick={addTextArea}>Add Text Area</button>
//       </div>
//       <div>
//         {textAreas.map((text, index) => (
//           <div key={index}>
//             <textarea rows="4" cols="50" value={text} readOnly />
//             <button onClick={() => deleteTextArea(index)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TextAreaApp;

// firse banao Samjne ke liye 
import React  from "react";
import { useState } from "react";

const To_Do_List = ()=>{
  const [textValue , setTextValue] = useState('')
  const [allNotes , setAllNotes] = useState([])

  const addTextArea = ()=>{
    if(textValue){
      setAllNotes([...allNotes , textValue]);
      setTextValue('')
    }
  }

  const deletNotes = (index)=>{
    const deleteNotes = [...allNotes]
    deleteNotes.splice(index , 1)
    setAllNotes(deleteNotes)

  }

  

  const handleEvent = (e)=>{
    setTextValue(e.target.value)
  }
  return (
    <>
     <h1>To Do List </h1>
     <textarea  id="textArea" cols="30" rows="10" value={textValue} onChange={handleEvent}></textarea>
     <button onClick={addTextArea}>Add Button</button>
     {
      allNotes.map((items , index)=>{
        return(
          <>
          <div key={index}>
           <textarea  key={index}  id="textArea" cols="30" rows="10" value={items} onChange={handleEvent}></textarea>
           <button onClick={()=>{deletNotes(index)}} >Delete Notes</button>
          </div>
          </>
        )
      })
     }
    </>
  )
}

export default To_Do_List;