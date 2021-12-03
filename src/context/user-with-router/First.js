import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

export const First = () => {
    const message = useContext(UserContext)
    return (
        <div>
            <h2>
                First page
            </h2>

            <h3>
                { message }
            </h3>
    
        </div>
    )
        
}
