import { Link } from 'react-router-dom';
import '../../assets/styles/notFound.css'

export const NotFound = () => {
    return (
        <div>


            <div class="number">404</div>
            <div class="text"><span>Ooops...</span><br />page not found</div>

            <Link to="/" >
                <button className="go-to-button">Go to Login Page</button>
            </Link>

        </div>
    );
}