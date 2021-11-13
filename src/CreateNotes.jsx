import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNotes = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const InputEvent = (e) => {
        const { value, name } = e.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };
    const addEvent = (e) => {
        e.preventDefault();
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    };
    return (
        <>
            <div className="main_notes">
                <form>
                    <input type="text" placeholder="title" onChange={InputEvent} value={note.title} name="title"></input>
                    <textarea rows="" cols="" placeholder="Write a note..." onChange={InputEvent} value={note.content} name="content"/>

                
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>
                </form>
            </div>
        </>
    );
}
export default CreateNotes;