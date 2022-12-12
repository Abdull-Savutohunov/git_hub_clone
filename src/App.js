import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Folowing from './pages/Followers&Following/Folowing';
import MyFolowing from './pages/Followers&Following/MyFolowing';
import MyFolowers from './pages/Followers&Following/MyFolowers';
// import Stars from './components/stars/index';
import UserMore from './pages/UserMore';
import Folowers from './pages/Followers&Following/Folowers';
import Repositories from './components/Repositories/Repositories';
import MyRepositories from './components/Repositories/MyRepositories';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Profile />} >
          <Route path='/myfolowing' element={<MyFolowing />} />
          <Route path='/myfolowers' element={<MyFolowers />} />
          <Route path='/myrepositories' element={<MyRepositories />} />

        </Route>

        <Route path='/users/:login' element={<UserMore />}>
          <Route path='folowing' element={<Folowing />} />
          <Route path='folowers' element={<Folowers />} />
          {/* <Route path="stars" element={<Stars />} />     */}
          <Route path="repositories" element={<Repositories/>} />      
        </Route>

      </Routes>
    </>
  );
}

export default App
