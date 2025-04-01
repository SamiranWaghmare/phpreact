import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Userlist from './Component/UserList';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/userlist" element={<Userlist />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
