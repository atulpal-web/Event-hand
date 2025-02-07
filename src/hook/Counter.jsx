import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    function inc() {
        setCount(count + 1)
    }
    function dec() {
        // set count (count-1)

        return count > 0 ? setCount(count - 1) : count
    }
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center bg-danger">
                <h1>Class Counter</h1>
                <h1>{count}</h1>
                
                <button onClick={inc} className="btn btn-outline-success">👆</button>
                <button onClick={dec} className="btn btn-outline-primary mx-3">👇</button>

            </div>
        </>
    )
}

export default Counter