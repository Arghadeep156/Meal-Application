import './App.css'
import Favorites from './components/Favourites'
import Meals from './components/Meals'
import Modal from './components/MOdal'
import Search from './components/Search'
import { useGlobalContext } from './context'
import {useState} from 'react'

function App() {
  const { showModal, favorites } = useGlobalContext();
  const [currentView, setCurrentView] = useState('meals'); // State to manage which view to display

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <header className="search-container">
        <form>
              <button type='button' className='btn btn-hipstet' onClick={() => handleNavigation('meals')}>Meals</button>
              <button type='button' className='btn btn-hipstet' onClick={() => handleNavigation('favorites')}>Favorites</button>
        </form>
      </header>

      <Search />
      {showModal && <Modal />}

      {/* Conditional Rendering without Switch */}
      {currentView === 'favorites' ? (
        favorites.length > 0 ? (
          <Favorites />
        ) : (
          <h4>No favorites yet.</h4>
        )
      ) : (
        <Meals />
      )}
    </>
  );
}

export default App;
