import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Components/navbar'
import Banner from '../src/Components/Banner'
import List from '../src/Components/List'
import Favourites from '../src/Components/Favourites';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <List />
            </>
          }
        />
        <Route path="/fav" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
