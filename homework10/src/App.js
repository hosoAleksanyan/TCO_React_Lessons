import { Routes, Route } from 'react-router';
import { useState } from 'react';

import { Login } from './pages/login/login';
import { Movies } from './pages/movies/movies';
import { MovieDetails } from './pages/movieDetails/movieDetails';
import { NotFound } from './pages/notFound/notFound';
import { MoviesList } from './datas/moviesList';

const adminData = { email: "admin@admin.com", password: "admin" };

function App() {

  const [list, setList] = useState(MoviesList);


  return (
    <div style={{ width: "85%", margin: "2% auto 0" }}>
      <Routes>
        <Route path='/' element={<Login admin={adminData} />} />
        <Route path='/movies' element={<Movies list={list} setList={setList} />} />
        <Route path='/movie-details/:id' element={<MovieDetails list={list} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
