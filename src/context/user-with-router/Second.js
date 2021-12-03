import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

const Second = () => {
    const message = useContext(UserContext)
    return (
        <div>
            <h2>
                Second page
            </h2>

            <h3>
                { message }
            </h3>
    
        </div>
    )
}

export default Second
