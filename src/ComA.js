import React,{useState, useEffect} from 'react'
import axios from 'axios'

function ComA() {
     const [num, setNum] = useState();
     const [name, setName] = useState();
     const [ move, setMove] = useState();
     useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log("res", res.data.name)
        setMove(res.data.moves.length)
            setName(res.data.name)
        }
        getData() 
     })
    return (
        <div>
            <h1> you choose <span style={{color: 'red'}}> {num} </span> value</h1>
            <h1> my name <span style={{color: 'red'}}>{name} </span> value</h1>
            <h1> I have <span style={{color: 'red'}}> {move} </span> value</h1>
            <select value={num} onChange={(event)=> {
                setNum(event.target.value)
            }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </div>
    )
}

export default ComA
