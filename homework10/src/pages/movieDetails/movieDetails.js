import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const MovieDetails = ({ list }) => {

    const params = useParams();
    const navigate = useNavigate();

    const movie = list?.find((i) => (i.id === params.id));

    return (
        <div>
            <button onClick={() => navigate(-1)} className="goBackBtn">Back</button>
            <div className="movieDetails">
                <figure>
                    <img src={movie.image} alt={`${movie.title}'s poster`} />
                </figure>
                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <td>{movie?.title}</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{movie?.year}</td>
                        </tr>
                        <tr>
                            <th>Genre</th>
                            <td>{movie?.genre}</td>
                        </tr>
                        <tr>
                            <th>Link</th>
                            <td>
                                <Link to={movie.link} target="_blank">
                                    <button>Wathch</button>
                                </Link>
                            </td>
                        </tr>
                        {
                            movie.comment !== '' &&
                            <tr>
                                <th>Comment</th>
                                <td>{movie.comment}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

MovieDetails.propTypes = {
    list: PropTypes.array
}