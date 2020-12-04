import React from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import { useHistory } from "react-router";


const NavBar = (props) => {

    const history = useHistory()

    return (
        <Menu inverted size='small'>
        
            <Menu.Item
            name="Flatnote"
            onClick={() => history.push('/')}
            />            

            <Menu.Item
            name="New Note"
            onClick={() => history.push('/notes/new')}
            />
           
            <Menu.Item position='right'>
            <Button primary>Sign Out</Button>           
            </Menu.Item>

        </Menu>
    )
}



export default NavBar