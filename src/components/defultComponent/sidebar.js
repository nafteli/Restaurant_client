import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default props => {
    return (

<>
<ProSidebar>
    <BrowserRouter>

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

        <Routes>
        <Route path="/" element={<MenuList />} />
          <Route path="/MenuList" element={<MenuList />} />
          <Route path="/QueueList" element={<QueueList />} />
          <Route path="/tabel" element={<TabaleList />} />
        </Routes>
    </BrowserRouter>
    </ProSidebar>

</>


    //   <Menu>
    //     <a className="menu-item" href="/">
    //       Home
    //     </a>
  
    //     <a className="menu-item" href="/laravel">
    //       Laravel
    //     </a>
  
    //     <a className="menu-item" href="/angular">
    //       Angular
    //     </a>
  
    //     <a className="menu-item" href="/react">
    //       React
    //     </a>
  
    //     <a className="menu-item" href="/vue">
    //       Vue
    //     </a>
  
    //     <a className="menu-item" href="/node">
    //       Node
    //     </a>
    //   </Menu>
    );
  };

