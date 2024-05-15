import React, {useState} from 'react'

const Task2 = () => {
    const [mira, setmira] = useState(0)

    const increment =()=>{
        setmira(mira+1)
    }
    const decrement =()=>{
        if(mira != 0){
            setmira(mira-1)
        }
    }
  return (
    <>
    <h1>project about increment decrement</h1>
    <h1>{mira}</h1>
    <button onClick={()=>{
        increment()
    }}> increment </button>

    <button onClick={()=>{
        decrement()
    }}> decrement </button>
</>
  )
}

export default Task2
