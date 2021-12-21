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
import TrainingPage from "./containers/training-page/training-page";
import PricingPage from "./containers/pricing-page/pricing-page";

function App() {
    const avoidFooterRoutes = [
        '/pricing'
    ];
    const avoidFooter = avoidFooterRoutes.some(route => window.location.href.includes(route));
      return (
        <>
          <Header/>
          <Routes>
              <Route exact path='/'  element={<HomePage/>}/>
              <Route exact path='/profile'  element={<ProfilePage/>}/>
              <Route exact path='/club'  element={<ClubPage/>}/>
              <Route exact path='/training'  element={<TrainingPage/>}/>
              <Route exact path='/pricing'  element={<PricingPage/>}/>
          </Routes>
            {!avoidFooter && <Footer/>}
        </>
      );
}

export default App;
