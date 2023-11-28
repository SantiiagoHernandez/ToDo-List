import React from "react";

const Form = ( {handleChange, addTask, homework} ) => {
    return (
        <div>
            <form onSubmit={addTask}>
                <input type="text" value={homework} placeholder="Ingresa una tarea" onChange={handleChange} />
                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export {Form}
