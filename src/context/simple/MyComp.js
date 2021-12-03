import React from 'react'
import { useContext } from 'react'
import Context from './context'

const MyComp = () => {
    const value = useContext(Context)
    return (
        <div>
            Hello, this is the value: {value}
        </div>
    )
}

export default MyComp
