import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';
import Folowing from './pages/Followers&Following/Folowing';
import MyFolowing from './pages/Followers&Following/MyFolowing';
import MyFolowers from './pages/Followers&Following/MyFolowers';
import UserMore from './pages/UserMore';
import Folowers from './pages/Followers&Following/Folowers';
import Repositories from './components/Repositories/Repositories';
import MyRepositories from './components/Repositories/MyRepositories';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Profile />} >
          <Route path='/myfolowing' element={<MyFolowing />} />
          <Route path='/myfolowers' element={<MyFolowers />} />
          <Route path='/repositories' element={<MyRepositories />} />

        </Route>

        <Route path='/users/:login' element={<UserMore />}>
          <Route path='folowing' element={<Folowing />} />
          <Route path='folowers' element={<Folowers />} />
          <Route path="repositories" element={<Repositories/>} />
        </Route>

      </Routes>
    </>
  );
}

export default App
