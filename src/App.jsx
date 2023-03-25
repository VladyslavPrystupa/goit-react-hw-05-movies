import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout';
import { Reviews } from './pages/Reviews';
import { Cast } from './pages/Cast';

import { Home } from 'pages/Home';
import { SelectedMovie } from 'pages/SelectedMovie';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:filmId" element={<SelectedMovie />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
