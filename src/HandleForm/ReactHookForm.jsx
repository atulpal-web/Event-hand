import { useForm } from "react-hook-form";

const ReactHookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function signup(data) {
        console.log(data);
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-lg-6 p-5 shadow-lg rounded bg-light">
                <form method="post" onSubmit={handleSubmit(signup)}>
                    <h3 className="text-center mb-4 text-primary">User Registration</h3>

                    <div className="mb-3">
                        <strong className="form-strong">Username :-</strong>
                        <input type="text" {...register('username', {
                            required: "Enter username",
                            minLength: { value: 3, message: "Minimum 3 characters" },
                            maxLength: { value: 20, message: "Maximum 20 characters" },
                            pattern: { value: /^[A-Za-z]+$/, message: "Only characters are allowed" }
                        })} className="form-control" placeholder="Enter username" />
                        <p className="text-danger">{errors.username?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Mobile :-</strong>
                        <input type="text" {...register('mobile', {
                            required: "Enter mobile number",
                            pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" }
                        })} className="form-control" placeholder="Enter Mobile" />
                        <p className="text-danger">{errors.mobile?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Email:-</strong>
                        <input type="email" {...register('email', {
                            required: "Enter email",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" }
                        })} className="form-control" placeholder="Enter Email" />
                        <p className="text-danger">{errors.email?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Password:-</strong>
                        <input type="password" {...register('password', {
                            required: "Enter password",
                            minLength: { value: 6, message: "Minimum 6 characters required" }
                        })} className="form-control" placeholder="Enter Password" />
                        <p className="text-danger">{errors.password?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Address:-</strong>
                        <textarea {...register('address', {
                            required: "Enter address"
                        })} className="form-control" placeholder="Enter Address"></textarea>
                        <p className="text-danger">{errors.address?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Course:-</strong>
                        <select {...register('course', { required: "Select a course" })} className="form-select">
                            <option value="">-- Select Course --</option>
                            <option value="Web">Web</option>
                            <option value="App">App</option>
                            <option value="Game">Game</option>
                        </select>
                        <p className="text-danger">{errors.course?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Gender:-</strong>
                        <div>
                            <input type="radio" {...register('gender', { required: "Select a gender" })} value="Male" className="mx-2" />Male
                            <input type="radio" {...register('gender', { required: "Select a gender" })} value="Female" className="mx-2" />Female
                            <input type="radio" {...register('gender', { required: "Select a gender" })} value="Other" className="mx-2" />Other
                        </div>
                        <p className="text-danger">{errors.gender?.message}</p>
                    </div>

                    <div className="mb-3">
                        <strong className="form-strong">Date of Birth:-</strong>
                        <input type="date" {...register('date', { required: "Select a date" })} className="form-control" />
                        <p className="text-danger">{errors.date?.message}</p>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-outline-danger w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReactHookForm;
