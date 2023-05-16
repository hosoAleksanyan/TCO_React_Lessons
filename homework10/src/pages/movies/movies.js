import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export const Movies = ({ list, setList }) => {

    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const [show, setShow] = useState(null);


    const handleClick = (evt, id) => {
        evt.stopPropagation();
        setShow(id);
    }

    const handleAdd = (data) => {
        const result = list;
        const commented = result.find((i) => (i.id === data.id));
        commented.comment = data.comment;

        console.log(data.id);

        setList(result);
        setShow(null);
        resetField('comment');
        resetField('id');
    }

    return (
        <React.Fragment>
            <button onClick={() => navigate('/')} className="goLogin">Login</button>
            <div className="moviesList">
                {
                    list?.map((m) => (
                        <div
                            key={m.id} className="movieCard"
                            onClick={() => { navigate(`/movie-details/${m.id}`) }}
                        >
                            <figure>
                                <img src={m.image} alt={`${m.title}'s poster`} />
                                <figcaption>
                                    <span>{m.title}</span>
                                </figcaption>
                            </figure>
                            <div className="cardBody">
                                {
                                    m.comment &&
                                    <span>{m.comment}</span>
                                }
                                <button onClick={(Event) => handleClick(Event, m.id)}>Comment</button>
                            </div>
                        </div>
                    ))

                }
            </div>
            {show &&
                <div className="modalBox">
                    <button onClick={() => setShow(null)}>Close</button>
                    <form onSubmit={handleSubmit(handleAdd)}>
                        <input type="hidden" {...register("id")} value={show} />
                        <input
                            type="text"
                            {
                            ...register(
                                "comment",
                                {
                                    minLength: { value: "5", message: "Write more 5 letters." },
                                    maxLength: { value: "40", message: "Write less 45 letters." }
                                })
                            }
                        />
                        {
                            errors?.comment?.message &&
                            <span style={{ color: "red" }}>{errors?.comment?.message}</span>
                        }
                        <input type="submit" value="Add Comment" />
                    </form>
                </div>
            }
        </React.Fragment>
    );
}

Movies.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func
}