import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MenuList from './components/menu/menuList';
import QueueList from './components/queue/queuelist';
import TabaleList from './components/tabales/tabaleslist';



export default function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/MenuList">MenuList</Link>
          </li>
          <li>
            <Link to="/QueueList">QueueList</Link>
          </li>
          <li>
            <Link to="/tabel">tabel</Link>
          </li>
        </ul>
      </nav>
        <Routes>
        <Route path="/" element={<MenuList />} />
          <Route path="/MenuList" element={<MenuList />} />
          <Route path="/QueueList" element={<QueueList />} />
          <Route path="/tabel" element={<TabaleList />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
