import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

const Second = () => {
    const [number, setNumber] = useContext(UserContext)
    return (
        <div>
            <h1>
                Context page 1: testing global state shared between routes
            </h1>

            <h3>
                Number is: { number }
            </h3>

            <button onClick={() => setNumber((number => number + 1))}>Change context value</button>
    
        </div>
    )
}

export default Second
