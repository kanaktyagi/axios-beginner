import React,{useState, useEffect} from 'react'
import axios from 'axios'

function ComA() {
     const [num, setNum] = useState();
     useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log("res", res)
        }
        getData() 
     })
    return (
        <div>
            <h1> you choose {num} value</h1>
            <select value={num} onChange={(event)=> {
                setNum(event.target.value)
            }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>6</option>
            </select>
        </div>
    )
}

export default ComA
