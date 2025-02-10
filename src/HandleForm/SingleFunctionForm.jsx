const SingleFunction = () => {
    function getInput (e) {
        const name = e.target.name;
        const value = e.target.value;

        /// when you want variable value pass as a key
         ///in object then assign

         /// {[variable-name];value}

         const user = {
            [name]:value       
          }
          console.log(user)

        //   console.log(e.target.type)
        //   console.log(placeholder)
    }


    return (
        <>
        <form className="col-lg-6 mx-auto my-5 p-5 shadow"  method="post">
        <div className="mt-4">
            <input type="text" onChange ={(e) => getInput(e)} className="form-control" placeholder="Enter username" />

        </div>
        
        <div className="mt-4">
            <input type="number" onChange={(e) => getInput(e)} className="form-control" placeholder="Enter username" />

        </div>

        <div className="mt-5">
          <button className="btn btn-outline-success">Submit</button>
        </div>
    </form>
        </>
    )
}

export default SingleFunction