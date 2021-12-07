import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

export const First = () => {
    const message = useContext(UserContext)
    return (
        <div>
            <h1>
            Context page 2: Testing global state shared among routes
            </h1>

            <h3>
                Number is: { message }
            </h3>
    
        </div>
    )
        
}
