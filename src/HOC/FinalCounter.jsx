import CounterUi from "./CounterUi";
import CounterLogic from './CounterLogic';  
import CounterUi2 from "./CounterUi2";

const CounterResult = CounterLogic(CounterUi)
const CounterResult2= CounterLogic(CounterUi2)


const FinalCounter = () => {
    return (
        <>
        <CounterResult/>
        <CounterResult2/>
        </>
    )
}

export default FinalCounter