import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNotes from "./CreateNotes";
import Note from "./Note";


const App = () => {
  const[addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert('i am clicked')
    setAddItem((prevData) => {
      return [...prevData, note];
    });

  };
  const onDelete =(id)=>{
    setAddItem((oldData)=>
oldData.filter((currData,indx)=>{
  return indx!==id;

})

    );

  };
  return (
    <>
      <Header />
      <CreateNotes passNote={addNote} />

      {
        addItem.map((val, index) => {
          return <Note key={index} id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete} />
        })
      }
      <Footer />
    </>
  );
}

export default App;
