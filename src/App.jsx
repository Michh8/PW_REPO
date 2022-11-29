import classes from './App.module.scss';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Organization from './components/organization/Feed_o';
import { useNavigate } from 'react-router-dom';
import NotFoundView from './views/NotFoundView/NotFoundView';
import AuthView from './views/AuthView/AuthView';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
//import Signin from './components/SignIn/Signin';
import Know from './components/Know/Know';
//import Login from './components/Login/Login';

import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className={classes["App"]}>
      { /* HEADER */}
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Conocemas" element={<Know />} />
        <Route path="/Campañas" element={<Feed /> } />
        <Route path="/Organizaciones" element={<Organization /> } />
        <Route path='auth/*' element={<AuthView />} />
          <Route path='*' element={<NotFoundView />} />


      </Routes>   
      
      <Footer />
    </div>
  )
}
//<Route path="/conoceMas" element={<Know />} />

export default App
