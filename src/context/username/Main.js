import React from 'react'
import Layout from './Layout'
import UsernameContext from './usernameContext'

 const Main = () => {
    const username = "John Doe"
    return (
        <UsernameContext.Provider value={username}>
        <div>
            <Layout/>
        </div>
        </UsernameContext.Provider>
    )
}
export default Main