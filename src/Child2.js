import React from 'react'
import Child from './Child'

export default function Child2(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.value}</h1>
            
        </div>
    )
}
