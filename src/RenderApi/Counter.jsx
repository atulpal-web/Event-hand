import { useEffect,useState } from "react"

const RenderApi = () =>{
    const [users,Setuser] = useState ()

    async function showApi() {
        const res = await fetch ('https://jsonplaceholder.typicode.com/users');
        const result = await res.json ()
        Setuser (result)
    }
    useEffect(() => {
        document.title = "useEffect hook";
        showApi();
      }, []);

// [] => dependancy
 return(
    <>
    {/* {console.log(users)} */}

    <div className="container">
        <div className="row">
            {
                users && users.map((user,index) => {
                    return(
                        <div className="col-lg-4 mt-3" key={index}>
                            <CardUi title = {user.name} para = {user.username} />
                        </div>
                    )
                })
            }
        </div>
    </div>
    </>
 )
}

 export default RenderApi;
