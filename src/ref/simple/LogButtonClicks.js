import React from 'react'
import { useRef } from 'react'

export const LogButtonClicks = () => {
    const countRef = useRef(0)

    const handleClick = () => {
        countRef.current++
        console.log(`it was clicked ${countRef.current} times`)
    }

    console.log("I rendered")

    return (
        <div>
            <button onClick={handleClick}>Click to add count and check console</button>
        </div>
    )
}
