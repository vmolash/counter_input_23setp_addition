import React, {useState} from 'react';

import './App.css';
import ListItem from "./ListItem";

function List(props) {


    return (
        <div>
            {props.list.map(el => <ListItem key={el.id} el={el} changeCounter={props.changeCounter}/>)}
        </div>
    );
}

export default List;
