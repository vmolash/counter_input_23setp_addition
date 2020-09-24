import React, {useState} from 'react';

import './App.css';

function ListItem(props) {


    return (
            <div key={props.el.id}>

                {props.el.numberOfButtons.reverse().map(elem => <button onClick={()=> props.changeCounter(props.el.id, -elem)}>{-elem}</button> )}
                {props.el.value}
                {props.el.numberOfButtons.reverse().map(elem => <button onClick={()=> props.changeCounter(props.el.id, elem)}>+{elem}</button> )}

            </div>
    );
}

export default ListItem;
