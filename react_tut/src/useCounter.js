import {useState} from 'react'

function useCounter( intialValue=0){ {
     const [count, setcount]= useState(intialValue);
    const increase= ()=>{
        setcount((prev)=>prev+1);
    }
    const decrease =()=>{
        setcount((prev)=>prev-1);
    }
    const reset=()=>{
        setcount(0);
    }

    return [count, increase, decrease, reset];
}

export default useCounter
