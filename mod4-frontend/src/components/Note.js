import React from 'react';
import { Button, Card, Accordion, Icon } from 'semantic-ui-react'
import { deleteNote, setEditedNote } from '../actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router";

const Note = (props) => {
    const {content, title, id} = props
    const history = useHistory()
    return(
        
            <Card >
                <Card.Header textAlign="center">{title}</Card.Header> 
                <Card.Content>{content}</Card.Content>
                <Accordion><Icon name='dropdown' /><Accordion.Content>
                    {content}
                </Accordion.Content></Accordion>
                <div className="ui two buttons">
                    <Button 
                    onClick={() =>  {                        
                        history.push(`/note/edit/${id}`)
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