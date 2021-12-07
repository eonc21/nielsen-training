import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { FetchData } from '../../apollo/FetchData'
import { FilterList } from '../../debouncing/callback/FilterList'
import { ShoppingList } from '../../reducer/complex/ShoppingList'
import { LoginForm } from '../../reducer/login/LoginForm'
import Counter from '../../reducer/simple/Counter'
import { OldValue } from '../../ref/complex/OldValue'
import { LogButtonClicks } from '../../ref/simple/LogButtonClicks'
import { First } from './First'
import Second from './Second'
import UserContext from './UserContext'

const MainRouter = () => {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const factorial = useMemo(() => factorialOf(number), [number])


    /**
     * Sets number to new one
     * @param {*} event the on change
     */
    const onChange = event => {
        setNumber(Number(event.target.value))
    }


    /**
     * Increments the number
     */
    const onClick = () =>  setInc(i => i + 1)


    /**
     * Returns the factorial of a 
     * given number n
     * @param n a fucking number
     * @returns the factorial of an integer
     */
    function factorialOf(n) {
        console.log('factorialOf(n) called!');
        return n <= 0 ? 1 : n * factorialOf(n - 1);
    }

    const provValue = useMemo(() => ([number, setNumber]), [number, setNumber])
    return (
        <Router>
            <div>
                <nav>
                    <ul style={{display:'flex', flexDirection: 'column', height: '200px', border: "2px solid black", justifyContent:'space-around'}}>
                        <li>
                            <Link to="/">Context page 1</Link>
                        </li>

                        <li>
                            <Link to="/second">Context page 2</Link>
                        </li>

                        <li>
                            <Link to="/reducer">Reducer page</Link>
                        </li>

                        <li>
                            <Link to="/ref">Ref page</Link>
                        </li>

                        <li>
                            <Link to="/debounce">Debounce page</Link>
                        </li>

                        <li>
                            <Link to="/apollo">Apollo page</Link>
                        </li>
                    </ul>
                </nav>
             
            </div>
            <UserContext.Provider value={provValue}>
                <Routes>
                    <Route path="/" exact element={<First/>} />
                    <Route path="/second/" element={<Second/>} />
                    <Route path="/reducer/" element={<LoginForm/>} />
                    <Route path="/ref/" element={<OldValue/>} />
                    <Route path="/debounce/" element={<FilterList/>} />
                    <Route path="/apollo/" element={<FetchData/>} />
                </Routes>
            </UserContext.Provider>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                Factorial of 
                <input type="number" value={number} onChange={onChange} />
                    is {factorial}
                <button onClick={onClick}>Re-render</button>
            </div>
        </Router>
    )
}

export default MainRouter
