import React, {useState} from "react";

const CounterLogic = (InnerComponent) => {
    return function CounterComponent(){
        const [Count,setCount] = useState(0)

        const Plus = () => {
            setCount ((prev) => prev + 1 )
        }
        const minus = () => {
            setCount ((prev) => prev > 0 ? prev-1:prev)
        }
           return (
            <>
            <InnerComponent Count ={Count} inc = {Plus} dec = {minus}/>
            </>
           )
    }
}
export default CounterLogic