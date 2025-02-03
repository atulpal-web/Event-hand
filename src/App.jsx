import ClassCounter from "./ClassComponent/ClassCounter"
import About from "./pages/About"
import Home from "./pages/Home"
import RenderApi from "./Apihook/Counter"



const App = () => {
    return (
        <>
       {/* <Home/> */}
       {/* <About/>  */}
       {/* <ClassCounter/> */}
       {RenderApi}
        </>
    )
}
export default App