import { useState } from "react";
import { Images } from "../../assets";

const list = [
  {
    id: "1",
    image: Images.AntFilm,
    title: "Film",
    year: "2023",
    genre: "fantasy",
  },
  {
    id: "2",
    image: Images.AntFilm,
    title: "Film",
    year: "2023",
    genre: "fantasy",
  },
  {
    id: "3",
    image: Images.AntFilm,
    title: "Film",
    year: "2023",
    genre: "fantasy",
  },
  {
    id: "4",
    image: Images.AntFilm,
    title: "Film",
    year: "2023",
    genre: "fantasy",
  },
  {
    id: "5",
    image: Images.AntFilm,
    title: "Film",
    year: "2023",
    genre: "fantasy",
  },
];

export const Movies = () => {
    const [movieList, setMovieList] = useState(list);
    const [show, setShow] = useState(null);

  return (
<div>
    <div className="flex-able">
      {movieList?.length
        ? movieList.map((i) => (
            <div key={i.id} style={{ margin:"0 10px", border:"1px solid black" }}>
              <img src={i.image} alt="film_image" width={100} />
              <p>{i.title}</p>
              <p>{i.year}</p>
              <p>{i.genre}</p>
              <button onClick={()=>{setShow(i.id)}}>Comment</button>
            </div>
          ))
        : ""}
    </div>
{show &&
    <div style={{ width:"70%", height:"50vh", background:"seagreen", position:"absolute", zIndex:"10", top:"0" }}>
            <button onClick={()=>setShow(null)}>Close</button>
        <div style={{ width:"30%", display:"flex", flexDirection:"column", margin:"5% auto 0" }}>
            <input type="text" placeholder="Comment" />
        </div>
    </div>
}
</div>
  );
};
