import { useState } from "react";


const New = () => {
    const [dona, setSon] = useState(0)
    const [pul, setPul] = useState(0)
    const [dona1, setSon1] = useState(0)
    const [pul1, setPul1] = useState(0)
    const [dona2, setSon2] = useState(0)
    const [pul2, setPul2] = useState(0)
    
    const plus = () => {
        setSon(dona + 1)
        setPul(pul + 1000)
    }

    const minus = () => {
        if(dona > 0){
            setSon(dona - 1)
            setPul(pul - 1000)
        }
    }

    const plus1 = () => {
        setSon1(dona1 + 1)
        setPul1(pul1 + 2000)
    }

    const minus1 = () => {
        if(dona1 > 0){
            setSon1(dona1 - 1)
            setPul1(pul1 - 2000)
        }
    }
    const plus2 = () => {
        setSon2(dona2 + 1)
        setPul2(pul2 + 3000)
    }

    const minus2 = () => {
        if(dona2 > 0){
            setSon2(dona2 - 1)
            setPul2(pul2 - 3000)
        }
    }

    return (
        <div>
            <div>
        <button onClick={minus}>-</button>
        <b>{dona}</b>
        <button onClick={plus}>+</button>
        {pul}
            </div>
            <div>
        <button onClick={minus1}>-</button>
        <b>{dona1}</b>
        <button onClick={plus1}>+</button>
        {pul1}
            </div>
            <div>
        <button onClick={minus2}>-</button>
        <b>{dona2}</b>
        <button onClick={plus2}>+</button>
        {pul2}
            </div>
            {pul + pul1 + pul2}
        </div>
    )
}


export default New