import React,{useState} from 'react'

function Statefun() {
    const [count,setcount]= useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setcount(count+1)}}>click</button>
        </div>
    )
}

export default Statefun
