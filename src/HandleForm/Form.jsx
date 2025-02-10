import { useState } from "react";

const Form = () => {
  const [username,setUsername]= useState("")
  const [moblie,setmobile]= useState("")

  console.log(username)
  console.log(moblie)
  
  const user = { username, moblie};
  console.log(user)

  function submitData(e){
    e.preventDefault()
    const user = { username,moblie};
    console.log(user)
    alert("form submitted button")
  }
  return (
    <>
    <form className="col-lg-6 mx-auto my-5 p-5 shadow"  method="post" onSubmit={submitData}>
        <div className="mt-4">
            <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Enter username" />

        </div>
        
        <div className="mt-4">
            <input type="number" onChange={(e) => setmobile(e.target.value)} className="form-control" placeholder="Enter username" />

        </div>

        <div className="mt-5">
          <button className="btn btn-success">Submit</button>
        </div>
    </form>
    </>
  )
}

const username = "myname";
const moblie = "5458445565";
const  obj = {
  username:username,
  moblie:moblie
}

console.log(obj)

///when  variable and key name same the can we pass as

const obj2 = {username,moblie}
console.log(obj2)

console.log(obj)
export default Form