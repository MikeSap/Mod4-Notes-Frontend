import React from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react'
import { useHistory } from "react-router";
import { logout } from '../actions'
import { connect } from 'react-redux'

const NavBar = (props) => {

    const history = useHistory()
    const location = history.location.pathname

    return (
        <Menu inverted size='small'>
        
            <Menu.Item
            name="Flatnote"
            onClick={() => history.push('/')}
            />            

            {location.includes('signup') || location.includes('login') ? null :
            <Menu.Item
            name="New Note"
            onClick={() => history.push('/notes/new')}
            />}
           
            {location.includes('signup') || location.includes('login') ? null :
            <Menu.Item position='right'>
            <Button onClick={props.logout} primary>
            <Icon name='sign-out' />
            Sign Out</Button>           
            </Menu.Item>}

        </Menu>
    )
}



export default connect(null, { logout })(NavBar)