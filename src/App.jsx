import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import HomeAdmin from './Pages/HomeAdmin';
import FictionBooks from './Pages/FictionBooks';
import OtherBooks from './Pages/OtherBooks';
import HorrorBooks from './Pages/HorrorBooks';
import RomanceBooks from './Pages/RomanceBooks'
import ThrillerBooks from './Pages/ThrillerBooks'
import BookDetail from './Pages/BookDetail';
import Library from './Pages/Library';

export default function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(https://i.postimg.cc/59qNXS4T/bg-bkfl-1.png)',
        minHeight: '100vh'
      }}
    >
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/FictionBooks" element={<FictionBooks />} />
        <Route path="/OtherBooks" element={<OtherBooks />} />
        <Route path="/HorrorBooks" element={<HorrorBooks />} />
        <Route path="/RomanceBooks" element={<RomanceBooks />} />
        <Route path="/ThrillerBooks" element={<ThrillerBooks />} />
        <Route path="/BookDetail/:productId" element={<BookDetail />} />
        <Route path="/Library/:productId" element={<Library />} />
      </Routes>
    </div>
  );
}
