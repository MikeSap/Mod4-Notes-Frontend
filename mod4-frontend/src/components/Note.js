import React, { useState, useEffect } from 'react'
import { Button, Card, Accordion, Icon } from 'semantic-ui-react'
import { deleteNote, setEditedNote } from '../actions'
import { connect } from 'react-redux'
import { useHistory, useLocation } from "react-router";

const Note = (props) => {
    const {content, title, id} = props
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        // check the path or some variable and when its on show page change activeIndex to 0
    })

    const [activeIndex, setAcc] = useState( -1 )

    const acc = (e, titleProps) => {
        history.push(`/notes/${id}`)
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setAcc( newIndex )
      }
    

    return(        
            <Card >
                <Card.Content> 
                    <Accordion styled>
                    <Accordion.Title
                    active={ activeIndex === 0}
                    index={0}
                    onClick={acc}
                    >
                <Icon name='dropdown' />
                {title}
                </Accordion.Title>
                <Accordion.Content active={ activeIndex === 0}>
                <p>{content}</p>
                </Accordion.Content>
                </Accordion>
                </Card.Content>
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