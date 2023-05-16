import { useNavigate, useParams } from "react-router";

export const Users = () => {

    const params = useParams();
    const navigate = useNavigate();

    const handlePush = (id) => {
        navigate(`/user-details/${id}`)
    }

    return(
        <div>
            <button>User 1</button>
            <button onClick={()=>handlePush('212')}>User 2</button>
        </div>
    );
}