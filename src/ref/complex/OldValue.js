import React from 'react'
import { useRef, useState, useEffect } from 'react'

export const OldValue = () => {
    const [name, setName] = useState("unknown")
    const inputRef = useRef('')
    const oldNameRef = useRef("unknown")


    useEffect(() => {
        oldNameRef.current = name
    }, [name])

    const handleBoyfriendSave = () => {
        setName(inputRef.current.value)
    }

    return (
        <div>
            <h2>Elinor has had several boyfriends. With that being said, </h2>
            <h3>New boyfriend: {name}</h3>
            <h3>Old boyfriend: {oldNameRef.current}</h3>

            <br/>
            <h2>Who is your new boyfriend, Elinor?</h2>
            <input defaultValue={name} ref={inputRef} />
            <button onClick={handleBoyfriendSave}>Save his name</button>
        </div>
    )
}
