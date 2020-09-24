import React, {useState} from 'react';

import './App.css';
import Controller from "./Controller";
import List from "./List";

function App() {
    const [list, setList] = useState([
        {value: 0, id: 1, numberOfButtons: [1,2,3]},
        {value: 1, id: 2, numberOfButtons: [1,2,3]},
        {value: 2, id: 3, numberOfButtons: [1,2,3]}
    ]);
    const [inputValue, setInputValue] = useState('');
    const [number, setNumber] = useState('');

    const addCounter = () => {
        const newButtons = [];
        for (let i = 1; i <= number ; i++) {
            newButtons.push(i);
        }
        const newCounter = {
            value: inputValue,
            id: Math.random(),
            numberOfButtons: newButtons
        }
        const newList = [...list, newCounter];
        // newList.push({value: 0, id: Math.random()});
        setList(newList);
        setInputValue('');
        setNumber('');
    }
    const inputHandlerValue = (e) => {
        setInputValue(e.target.value);
    }
    const inputHandlerNumber = (e) => {
        setNumber(e.target.value);
    }
    const changeCounter = (id, value) => {
        const newList = list.map(el => {
            if (el.id === id) {
                // return {value: el.value + 1, id: el.id}
                return {...el, value: el.value+value}
            }
            return el
        })
        setList(newList);
    }
    return (
        <div>
           <Controller addCounter={addCounter} inputHandlerValue={inputHandlerValue} inputHandlerNumber={inputHandlerNumber} inputValue={inputValue} number={number}/>
           <List list={list} changeCounter={changeCounter}/>
        </div>
    );
}

export default App;
