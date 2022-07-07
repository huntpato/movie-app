import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ListContainer from './components/ListContainer/ListContainer';
import Login from './components/Login/Login';
import Results from './components/Results/Results';

function App() {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = localStorage.getItem('favs');

    if (favs !== null) {
      const favsArray = JSON.parse(favs);
      setFavorites(favsArray);
    }
  }, []);

  const addRemoveFavs = (e) => {
    const favs = localStorage.getItem('favs');

    let tempFavs;

    if (favs === null) {
      tempFavs = [];
    } else {
      tempFavs = JSON.parse(favs);
    }

    const btn = e.currentTarget;
    const parent = btn.parentElement.parentElement;
    const imgUrl = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h4').innerText;
    const description = parent.querySelector('p').innerText;

    const movieData = { imgUrl, title, description, id: btn.dataset.movieid };

    let isMovieIn = tempFavs.some((movie) => {
      return movie.id === movieData.id;
    });

    if (!isMovieIn) {
      tempFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempFavs));
      setFavorites(tempFavs);
    } else {
      let moviesLeft = tempFavs.filter((movie) => {
        return movie.id !== movieData.id;
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavorites(moviesLeft);
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/list"
          element={<ListContainer addRemoveFavs={addRemoveFavs} />}
        />
        <Route path="/detail" element={<ItemDetailContainer />} />
        <Route path="/results" element={<Results />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} addRemoveFavs={addRemoveFavs} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
