import React from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


export const SideMenu = () => {
    return (
        <div className="">
            <ProSidebar rtl={false} >
                <Menu iconShape="square">
                    <MenuItem>דף הבית

                        <Link to="/"></Link>

                    </MenuItem>
                    <MenuItem>שולחנות

                        <Link to="/tabel"></Link>

                    </MenuItem>
                    <SubMenu title="תפריט">
                        <MenuItem>תפריט מלא

                            <Link to="/menu"></Link>

                        </MenuItem>
                        <MenuItem>מנות ראשונות

                            <Link to="/menu/starter"></Link>

                        </MenuItem>
                        <MenuItem>מרקים

                            <Link to="/menu/Soups"></Link>

                        </MenuItem>
                        <MenuItem>מנה עיקרית

                            <Link to="/menu/MainCourse"></Link>

                        </MenuItem>
                        <MenuItem>קינוחים

                            <Link to="/menu/desserts"></Link>

                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="לקוחות">
                        <MenuItem>כל הלקוחות

                            <Link to="/QueueList"></Link>

                        </MenuItem><MenuItem>ממתינים לשולחן

                            <Link to="/QueueList/tobeSitted" status={{url : "tobeSitted"}}></Link>

                        </MenuItem><MenuItem>ממתינים לשרות

                            <Link to="/QueueList/sitting"></Link>

                        </MenuItem><MenuItem>ממתינים לתשלום

                            <Link to="/QueueList/awaitingBill"></Link>

                        </MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default SideMenu;