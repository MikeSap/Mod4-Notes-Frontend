import React from 'react';
import { Button, Menu } from 'semantic-ui-react'
import { useHistory } from "react-router";
import { logout } from '../actions'
import { connect } from 'react-redux'

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
            <Button onClick={props.logout} primary>Sign Out</Button>           
            </Menu.Item>

        </Menu>
    )
}



export default connect(null, { logout })(NavBar)