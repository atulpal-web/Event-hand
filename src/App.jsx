import ClassCounter from "./ClassComponent/ClassCounter"
import About from "./pages/About"
import Home from "./pages/Home"
import ClassProps from "./ClassComponent/ClassProps.jsx"
import RenderApi from "./hook/RenderApi.jsx"
import Counter from "./hook/Counter.jsx"
import OnClick from "./hook/OnClick.jsx"



const App = () => {
    return (
        <>
            {/* <Home /> */}
            {/* <About />/  */}
            <ClassCounter/>
            <Counter/>
             {/* <ClassProps />  */}
            {/* <RenderApi/> */}
            {/* <OnClick/> */}
            
        </>
    )
}
export default App