import React, { useEffect } from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react'
import { useHistory } from "react-router";
import { logout } from '../actions'
import { connect } from 'react-redux'

const NavBar = (props) => {

    const history = useHistory()
    // const location = history.location.pathname

    const { user } = props

    const signOut = () => {
        props.logout()
    }

    useEffect(() => {
    }, [user])

    return (
        <Menu inverted size='small'>
        
            <Menu.Item
            name="Flatnote"
            onClick={() => history.push('/')}
            />            

            {!user.id ? null :
            <Menu.Item
            name="New Note"
            onClick={() => history.push('/notes/new')}
            />}
           
            {!user.id ? null :
            <Menu.Item position='right'>
            <Button onClick={() => signOut()} primary>
            <Icon name='sign-out' />
            Sign Out</Button>           
            </Menu.Item>}

        </Menu>
    )
}

const readAccess = state => {
   return {
       user: state.login.user
   }
}


export default connect(readAccess, { logout })(NavBar)