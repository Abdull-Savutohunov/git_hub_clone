import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Folowing from './pages/Folowing';
import MyFolowing from './pages/MyFolowing';
import MyFolowers from './pages/MyFolowers';
import Stars from './components/stars/index';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} >
          <Route path='/myfolowing' element={<MyFolowing />} />
          <Route path='/myfolowers' element={<MyFolowers />} />
        </Route>
        <Route path='/folowing/:login' element={<Folowing />} />
        <Route path="/stars" element={<Stars />} />        
      </Routes>
    </>
  );
}

export default App
