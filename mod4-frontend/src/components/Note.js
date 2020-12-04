import React from 'react';
import { Button, Card } from 'semantic-ui-react'
import { deleteNote, setEditedNote } from '../actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router";



const Note = (props) => {
    const {content, title, id} = props
    const history = useHistory()
    return(
        
            <Card>
                <Card.Header>{title}</Card.Header> 
                <Card.Description>{content}</Card.Description>
                <div className="ui two buttons">
                    <Button 
                    onClick={() =>  {                        
                        history.push(`/editNote/${id}`)
                        props.setEditedNote({content, title, id})
                    }}
                    basic color='green'>
                        Edit
                    </Button>
                    <Button 
                    onClick={() => props.deleteNote(id)}
                    basic color='red'>
                        Delete
                    </Button>
                </div>
            </Card>
    )
}

export default connect(null, { deleteNote, setEditedNote })(Note)