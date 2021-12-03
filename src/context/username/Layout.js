import React from 'react'
import { useContext } from 'react/cjs/react.development'
import Header from './Header'
import UsernameContext from './usernameContext'

const Layout = () => {
    const username = useContext(UsernameContext)
    return (
        <div>
            <Header />
            I am the layout. {username}
        </div>
    )
}

export default Layout
