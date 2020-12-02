import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";


const NavBar = (props) => {
    return (
        <Menu>
            
            <Link to="/">
            <Menu.Item
            name="Flatnote"
            />
            </Link>

            <Link to="/newNote">
            <Menu.Item
            name="New Note"
            />
            </Link>

            <Link to="/">
            <Menu.Item
            name="Sign Out"
            onClick={props.logout}
            />
            </Link>

        </Menu>
    )
}



export default NavBar