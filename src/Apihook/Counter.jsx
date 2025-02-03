import { useEffect,usestate } from "react";
const RenderApi = () => {
    const[users,Setuser] = usestate ()

    async function showApi() {
    const res = await fetch('https://api.example.com/data');
    const result = await res.json ()
    Setuser (result)
    }

    useEffect (() => {
    
        document.title = "useEffect hook"
        showApi ()
},[])

// [] => depengancy

return(

    <>
    {console.log(users)}
    </>
)
}
export default RenderApi