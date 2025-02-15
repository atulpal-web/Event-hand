import ClassCounter from "./ClassComponent/ClassCounter"
import About from "./pages/About"
import Home from "./pages/Home"
import ClassProps from "./ClassComponent/ClassProps.jsx"
import RenderApi from "./hook/RenderApi.jsx"
import Counter from "./hook/Counter.jsx"
import OnClick from "./hook/OnClick.jsx"
import Form from "./HandleForm/Form.jsx"
import SingleFunction from "./HandleForm/SingleFunctionForm.jsx"
import ReactHookForm from "./HandleForm/ReactHookForm.jsx"
import FinalCounter from "./HOC/FinalCounter.jsx"



const App = () => {
    return (
        <>
            <Home /> 
            <About />
             <ClassCounter/>
            <Counter/>  
             <ClassProps /> 
            <RenderApi/>
            <OnClick/>
            <Form/>
            <SingleFunction/>
            <ReactHookForm/>
             <FinalCounter/>

         
            
        </>
    )
}
export default App