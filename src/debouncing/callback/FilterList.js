import React, { useCallback, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'

const names = [
    "Elinor",
    "Tony",
    "Jose",
    "Joanna",
    "Giorgos",
    "Stefan"
]

export const FilterList = () => {
    const [query, setQuery] = useState('')

    let filteredNames = names

    const handleQueryChange = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    // good, but could be better
    const debouncedFilterCallback = useCallback(
        () => debounce(handleQueryChange, 350)
    , [])

    // better option due to performance!
    const debouncedFilterMemo = useMemo(
        () => debounce(handleQueryChange, 350)
    , [])

    if (query !== "") {
        filteredNames = names
            .filter(name => name.toLowerCase()
            .includes(query.toLowerCase()))
    }
    return (
        <div>
            <input 
            placeholder="Search a name..."
            type="text"
            onChange={debouncedFilterMemo}/>
            <ul>
                {filteredNames.map(n => (
                    <li key={n}>{n}</li>
                ))}
            </ul>
        </div>
    )
}
