import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";


export const AddUser = ({ users, setUsers }) => {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleAdd = (newData) => {
        const checkUser = users.find((i) => (i.email === newData.email));
        if (!checkUser) {
            const result = { id: Math.random(), ...newData };
            setUsers([...users, result]);
            navigate("/admin");
        } else {
            alert(JSON.stringify(checkUser));
        }
    }

    return (
        <div className="addUserPage" onSubmit={handleSubmit(handleAdd)}>
            <button onClick={handleBack}>Go Back</button>
            <form className="addForm">
                <input
                    type="text"
                    {
                    ...register(
                        "name",
                        {
                            required: "Fill in 'Name' field.",
                            minLength: { value: 3, message: "'Name' must be with 3 and more letters." }
                        })
                    }
                    placeholder="Name"
                />
                <span className="errorMessage">{errors?.name?.message}</span>
                <input
                    type="number" min={0} max={100}
                    {
                    ...register(
                        "age",
                        {
                            required: "Age is required.",
                            min: { value: 10, message: "User's age can't be less than 10." },
                            max: { value: 75, message: "User's age must be from 10 to 75." }
                        })
                    }
                    placeholder="Age"
                />
                <span className="errorMessage">{errors?.age?.message}</span>
                <input
                    type="email"
                    {...register("email", { required: "Email is required." })}
                    placeholder="Email"
                />
                <span className="errorMessage">{errors?.email?.message}</span>
                <input
                    type="password"
                    {
                    ...register(
                        "password",
                        {
                            required: "Fill in 'password' field.",
                            minLength: { value: 6, message: "Password must have more than 5 characters." },
                            maxLength: { value: 20, message: "Password must have less than 20 characters." }
                        })
                    }
                    placeholder="Password"
                />
                <span className="errorMessage">{errors?.password?.message}</span>

                <input type="submit" value="Submit" className="button" />
            </form>

        </div>
    )
}

AddUser.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func
}