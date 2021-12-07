import React from 'react'
import { useReducer } from 'react'

const Counter = () => {
    const [sum, dispath] = useReducer((state, action) => {
        return state + action
    }, 0)

    return (
        <div>
            {sum}
            <br/>
            <br/>

            <button onClick={() => dispath(1)}>Click me to add 1</button>
            
        </div>
    )
}

export default Counter
