import React, {useState} from "react";
import '../Task.css';

const Task = ({homework, delateHomework}) => {

    const [complete, setComplete] = useState(false)

    return (
        <div className={complete?'homeworkContainer completeHomeworkContainer' : 'homeworkContainer'}>
            <h2 className={complete?'complete' : 'noComplete'} >{homework.homework}</h2>
            <button id="completer" onClick={()=>setComplete(!complete)}>{complete?"No completada" : "Completada"} </button>
            <button  onClick={()=> delateHomework(homework.id)} id="delater">Eliminar</button>
        </div>
    )
}

export {Task}