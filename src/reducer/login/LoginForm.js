import React from 'react'
import { useReducer } from 'react/cjs/react.development';
async function loginHelper({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                resolve();
            } else {
                reject();
                alert("wrong credentials")
                
            }
        }, 1000);
    });
}




const reducer = (user, action) => {
    switch (action.type) {
        case "username":
            return {
                ...user,
                username: action.payload
            }
        case "password":
            return {
                ...user,
                password: action.payload
            }

        case "logout":
            return {
                ...user,
                isLoggedIn: false
            }

        case "login":
        return {
            ...user,
            isLoggedIn: true
        }

        default:
            alert("Incorrect action type")
    }

}

export const LoginForm = () => {
    const initialState = {
        username: '',
        password: '',
        isLoggedIn: false,
        isLoading: false,
        isError: false,
    }
    const [user, dispatch] = useReducer(reducer, initialState)
    const logoutHandler = (e) => {
        dispatch({ type: "logout" })
    
    }
    
    const usernameHandler = (e) => {
        dispatch({ type: "username", payload: e.target.value})
    
    }
    
    const passwordHandler = (e) => {
        dispatch({ type: "password", payload: e.target.value})
    
    }
    
    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            await loginHelper({ username: user.username, password: user.password })
            dispatch({ type: "login" })

        } catch {
            console.log("error lololololol");
        }
    
    }

    return (
        <>
            <hr />
            <h2>useReducer use case</h2>
            <h3>Modify complex states, such as arrays or objects: login form</h3>
            <div style={{ maxWidth: '50%', backgroundColor: '#a8dadc', borderRadius: '1rem', padding: '2rem' }}>
                {user.isLoggedIn
                    ? <><p>Welcome!</p><button onClick={logoutHandler}>Log out!</button></>
                    : <form onSubmit={submitHandler}>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={usernameHandler} value={user.username} style={{ margin: '0 1rem' }} placeholder='user' />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={passwordHandler} value={user.password} style={{ margin: '0 1rem' }} placeholder='password' />
                        </div>
                        <div style={{ margin: '1rem 0' }}>
                            <button type="submit" disabled={user.isLoading}>{user.isLoading ? 'Logging you in...' : 'Log in'}</button>
                        </div>

                    </form>
                }
            </div>
        </>
    )
}
