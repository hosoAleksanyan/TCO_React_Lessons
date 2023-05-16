import { Routes, Route } from 'react-router';

import { Login } from './pages/login/login';
import { Movies } from './pages/movies/movies';
import { MovieDetails } from './pages/movieDetails/movieDetails';
import { NotFound } from './pages/notFound/notFound';

const adminData = { email: "admin@admin.com", password: "admin" };

function App() {


  return (
    <div style={{ width: "85%", margin: "2% auto 0" }}>
      <Routes>
        <Route path='/' element={<Login admin={adminData} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movie-details/:id' element={<MovieDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
