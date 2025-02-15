import {useForm}from "react-hook-form";
const ReactHookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function signup (data){
        console.log(data)
    }

    const btnstyle = {
        background:'#786587',
        border:'px solid white'
    }

  return (
   <>

    <div className="col-lg-6 mx-auto my-5 p-5 shadow">
        <form  method="post" onSubmit= {handleSubmit (signup)}>
        <h3 className="text-center">Form</h3>
            <div className="mt-4">
                <input type="text" {...register ('username',
                    {
                        required : {
                            value:true,
                            message:"Enter username"
                        },
                        minLength:{
                            value:3,
                            message:"minimum 3 character"
                        },
                         maxLength:{
                            value:20,
                            message:"maximum 20 character"
                         },
                         pattern:{
                            value:/[A-Az-z]/,
                            message:"Only characters are allowed"
                         }
                    }
                )} className="form-control" placeholder="Enter username" />
                <p className="text-danger">{errors && errors?. username?. message}</p>
            </div>
            <div className="mt-4">
                <input type="text" {...register ('Mobile')} className="form-control" placeholder="Enter Mobile"/>
            </div>

            <div className="mt-4">
            <select {...register ('course',
            {
                required:{
                    value:true,
                    message:"select any course"
                }
            }

            )}className="form-select">
                <option value="">  -- select Course --</option>
                <option value="Web"> Web </option>
                <option value="App"> App </option>
                <option value="App"> Game </option>

            </select>
            <p className="text-danger"> {errors?.course?.message}</p>
            </div>

            <div className="mt-4">

                <input type="radio" {...register ('gender') }value="Male"className="mx-2"/>Male 
                <input type="radio" {...register ('gender') }value="Female" className="mx-2"/>Female
                <input type="radio" {...register ('gender') }value="Other" className="mx-2"/>Other

            </div>

            <div className="mt-4">
                <button className="btn btn-outline-success">Submit</button>
            </div>
        </form>
    </div>
   </>
  )
}

export default ReactHookForm;