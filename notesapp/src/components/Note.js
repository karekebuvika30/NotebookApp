import {MdDeleteForever} from 'react-icons/md';

const Note = () =>{
    return (<div class ='note'>
        <span>This is a note!</span>
        <div class='note-date'>
            <small>06-01-2024</small>
            <MdDeleteForever class='delete-icon' size='1.2em'/>
        </div>
    </div>);
};

export default Note;