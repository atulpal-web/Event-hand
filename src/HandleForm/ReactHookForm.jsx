import { useForm } from "react-hook-form";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

const ReactHookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function signup(data) {
        console.log(data);
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(signup)} className="col-lg-6 mx-auto my-5 p-5 shadow bg-primary">
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" {...register('username', {
                        required: "Enter username",
                        minLength: { value: 3, message: "Minimum 3 characters" },
                        maxLength: { value: 20, message: "Maximum 20 characters" },
                        pattern: { value: /^[A-Za-z]+$/, message: "Only characters are allowed" }
                    })} placeholder="Enter username" />
                    <small className="text-danger">{errors.username?.message}</small>
                </div>

                <div className="form-group">
                    <label>Mobile:</label>
                    <input type="text" className="form-control" {...register('mobile', {
                        required: "Enter mobile number",
                        pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" }
                    })} placeholder="Enter Mobile" />
                    <small className="text-danger">{errors.mobile?.message}</small>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" {...register('email', {
                        required: "Enter email",
                        pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: "Enter a valid email address" }
                    })} placeholder="Enter Email" />
                    <small className="text-danger">{errors.email?.message}</small>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" {...register('password', {
                        required: "Enter password",
                        minLength: { value: 6, message: "Minimum 6 characters required" }
                    })} placeholder="Enter Password" />
                    <small className="text-danger">{errors.password?.message}</small>
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <textarea className="form-control" {...register('address', {
                        required: "Enter address"
                    })} placeholder="Enter Address"></textarea>
                    <small className="text-danger">{errors.address?.message}</small>
                </div>

                <div className="form-group">
                    <label>Course:</label>
                    <select className="form-control" {...register('course', { required: "Select a course" })}>
                        <option value="">-- Select Course --</option>
                        <option value="Web">Web</option>
                        <option value="App">App</option>
                        <option value="Game">Game</option>
                    </select>
                    <small className="text-danger">{errors.course?.message}</small>
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" {...register('gender', { required: "Select a gender" })} value="Male" />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" {...register('gender', { required: "Select a gender" })} value="Female" />
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" {...register('gender', { required: "Select a gender" })} value="Other" />
                            <label className="form-check-label">Other</label>
                        </div>
                    </div>
                    <small className="text-danger">{errors.gender?.message}</small>
                </div>

                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input type="date" className="form-control" {...register('date', { required: "Select a date" })} />
                    <small className="text-danger">{errors.date?.message}</small>
                </div>

                <div>
                    <button type="submit" className="btn btn-outline-success text-white my-2 ">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReactHookForm;
