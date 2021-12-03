import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { First } from './First'
import Second from './Second'
import UserContext from './UserContext'

const MainRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">First page</Link>
                        </li>

                        <li>
                            <Link to="/second">Second page</Link>
                        </li>
                    </ul>
                </nav>
             
            </div>
            <UserContext.Provider value="hello from user context">
                <Routes>
                    <Route path="/" exact element={<First/>} />
                    <Route path="/second/" element={<Second/>} />
                </Routes>
            </UserContext.Provider>


                

           
        </Router>
    )
}

export default MainRouter
