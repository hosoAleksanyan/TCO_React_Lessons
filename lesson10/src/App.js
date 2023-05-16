import { Routes, Route } from "react-router";

import { Login } from "./pages/login/login";
import { Movies } from "./pages/movies/movies";
import { MovieDetails } from "./pages/movieDetails/movieDetails";
import { CreateMovie } from "./pages/createMovie/createMovie";

const adminData = {email:"admin@admin.com", password:"admin"};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login adminData={adminData} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/create-movie" element={<CreateMovie />} />
        <Route path="*" element={<div><h1>Not Found</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
