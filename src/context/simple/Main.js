import React, { useContext } from 'react'
import Context from "./context"
import MyComp from './MyComp'

const Main = () => {
    const value = "My context value"
    return (
        <Context.Provider value={value}>
            <div>
                <MyComp />
            </div>
        </Context.Provider>
        
    )
}

export default Main
