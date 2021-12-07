import { useReducer, useRef } from "react";

import React from 'react'

const reducer = (items, action) => {
    let tempArray

    switch(action.type) {
        case 'add':
            tempArray = [...items]
            tempArray.push(action.payload)
            return tempArray

        case 'clear':
            return []

        case 'remove':
            tempArray = [...items]
            tempArray.pop()
            return tempArray

        default:
            alert("Wrong message")
    }
}

export const ShoppingList = () => {

    const [items, dispatch] = useReducer(reducer, [{ name: "Lettuce", quantity: 1}])

    const addHandler = () => {
        dispatch({
            type: "add",
            payload: {
                name: "Item ",
                quantity: 2
            }
        })
    }

    const removeHandler = () => {
        dispatch({
            type: "remove", 
        })
    }

    const clearHandler = () => {
        dispatch({
            type: "clear", 
        })
    }
    return (
       
        <div>
            <h1>Reducer: examples</h1>
            <button onClick={addHandler}>Add item</button>
            <button onClick={removeHandler}>Remove item</button>
            <button onClick={clearHandler}>Clear items</button>
            <ul>
                {items.map((item, index) => (
                <li key={item.name}>
                    {item.name}{index}
                </li>
        ))}
            </ul>
        </div>
    )
}
