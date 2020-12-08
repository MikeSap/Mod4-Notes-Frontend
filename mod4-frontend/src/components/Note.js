import React, { useState } from 'react'
import { Button, Card, Accordion, Icon, Image } from 'semantic-ui-react'
import { deleteNote, setEditNote, setShowNote, clearShowNote } from '../actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router"

const Note = (props) => {
    
    const {content, title, id, updated_at, photo} = props
    let photoUrl= `http://localhost:3000${photo}`
    
    const history = useHistory()
    const location = history.location.pathname

    const [activeIndex, setActiveIndex] = useState(location.includes(id) ? 0 : -1 )
    
    const backToNotes = () => {
        history.push(`/notes`)
        props.clearShowNote()
    }

    const toShowPage = () => {
        history.push(`/notes/${id}`)
        props.setShowNote({title, content, id, updated_at, photo})    
    }

    const acc = (e, titleProps) => {
        
        location.includes(id) ? backToNotes() : toShowPage()

        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex( newIndex )

      }

    return(       
            <Card style={{margin: "25px"}}>                
                {location.includes(id) ?
                photo ? <Image size="mini" src={photoUrl} wrapped ui={false} /> : null :
                null}
                <Card.Content> 
                    <Accordion styled>
                    <Accordion.Title className="card-title"
                    active={ activeIndex === 0}
                    index={0}
                    onClick={acc}
                    >
                <Icon name='dropdown' />
                {title}
                </Accordion.Title>
                <Accordion.Content active={ activeIndex === 0} className="card-content">
                <p>{content}</p>
                </Accordion.Content>
                </Accordion>
                <Card.Meta>Date: {props.updated_at.split('T')[0]}  Time: {props.updated_at.split('T')[1].split('.')[0]}</Card.Meta>
                </Card.Content>
                <div className="ui two buttons">
                    <Button 
                    fluid
                    onClick={() =>  {                        
                        history.push(`/note/edit/${id}`)
                        props.setEditNote({content, title, id, photo})
                    }}
                    basic color='green'>
                        Edit
                    </Button>
                    <Button 
                    fluid
                    onClick={() => {
                        props.deleteNote(id)
                        history.push('/notes')
                    }}
                    basic color='red'>
                        Delete
                    </Button>
                </div>
            </Card>
    )
}

export default connect(null, { deleteNote, setEditNote, setShowNote, clearShowNote })(Note)