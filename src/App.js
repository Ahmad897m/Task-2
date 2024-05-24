import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './pages/logIn/LogIn';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LogOut from './pages/logOut/LogOut';
import VerifyEmail from './pages/Verify/VerifyEmail';
import SignUp from './pages/signUp/SignUp';

function App() {
  const [submitSource, setSubmitSource] = useState('');

  return (
      <Router>
        <Header  submitSource={submitSource} setSubmitSource={setSubmitSource} />
        {/* <Home/> */}
        <Routes> 
        <Route path='/'element={<Home   setSubmitSource={setSubmitSource} /> } />

        <Route path='/login'element={<LogIn   setSubmitSource={setSubmitSource} /> } />

        <Route path='/logout' element={<LogOut   setSubmitSource={setSubmitSource} /> } />

        <Route path='/verify' element={<VerifyEmail />} />

        <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
  );
}

export default App;
