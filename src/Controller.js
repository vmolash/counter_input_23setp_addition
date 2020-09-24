import React, {useState} from 'react';

import './App.css';

function Controller(props) {


    return (
        <div>
            <input type="text" value={props.inputValue} onChange={props.inputHandlerValue}/>
            <input type="text" value={props.number} onChange={props.inputHandlerNumber}/>

            <button onClick={props.addCounter}>Create</button>
            <hr/>

        </div>
    );
}

export default Controller;
