import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

const Second = () => {
    const [number, setNumber] = useContext(UserContext)
    return (
        <div>
            <h2>
                Second page: testing global state shared between routes
            </h2>

            <h3>
                Number is: { number }
            </h3>

            <button onClick={() => setNumber((number => number + 1))}>Change context value</button>
    
        </div>
    )
}

export default Second
