import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

const Second = () => {
    const [value, setValue] = useContext(UserContext)
    return (
        <div>
            <h2>
                Second page
            </h2>

            <h3>
                { value }
            </h3>

            <button onClick={() => setValue("Value has changed")}>Change context value</button>
    
        </div>
    )
}

export default Second
