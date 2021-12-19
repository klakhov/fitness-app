import './App.css';
import './styles/sass/global.sass';
import '../node_modules/reset-css/reset.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Footer from "./components/footer/footer";
import HomePage from './containers/home-page/home-page';
import ProfilePage from './containers/profile-page/profile-page';
import ClubPage from "./containers/map-page/club-page";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route exact path='/'  element={<HomePage/>}/>
          <Route exact path='/profile'  element={<ProfilePage/>}/>
          <Route exact path='/club'  element={<ClubPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
