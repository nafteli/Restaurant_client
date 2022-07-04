import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from './components/menu/menuList';
import MenuByCategory from './components/menu/MenuByCategory';
import QueueList from './components/queue/queuelist';
import TabaleList from './components/tabales/tabaleslist';
import SideMenu from './components/defultComponent/sidebar';
import Homepage from './components/homePage/homePage'
import CreateGroup from './components/queue/queuInput'



export default function App() {

  return (
    <>
    <BrowserRouter>
    <SideMenu />
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuList />} />
          <Route path="/menu/starter" element={<MenuByCategory />} />
          <Route path="/menu/Soups" element={<MenuByCategory />} />
          <Route path="/menu/MainCourse" element={<MenuByCategory />} />
          <Route path="/menu/desserts" element={<MenuByCategory />} />
          <Route path="/QueueList" element={<QueueList />} />
          <Route path="/tabel" element={<TabaleList />} />
          <Route path="/QueueList/addgrop" element={< CreateGroup/>} />

        </Routes>
      </BrowserRouter>
    </>

  );
}
