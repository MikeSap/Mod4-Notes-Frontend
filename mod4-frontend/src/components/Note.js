import React, { useState } from 'react'
import { Button, Card, Accordion, Icon } from 'semantic-ui-react'
import { deleteNote, setEditNote, setShowNote, clearShowNote } from '../actions'
import { connect } from 'react-redux'
import { useHistory } from "react-router"

const Note = (props) => {
    const {content, title, id} = props
    const history = useHistory()
    const location = history.location.pathname

    const [activeIndex, setActiveIndex] = useState(location.includes(id) ? 0 : -1 )

    const backToNotes = () => {
        history.push(`/notes`)
        props.clearShowNote()
    }

    const toShowPage = () => {
        history.push(`/notes/${id}`)
        props.setShowNote({title, content, id})    
    }

    const acc = (e, titleProps) => {
        
        location.includes(id) ? backToNotes() : toShowPage()

        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setActiveIndex( newIndex )

      }

    //   const deleteNote = (id) => {
    //     props.deleteNote(id)
    //     location.includes(id) ? history.push('/notes') : null
    //   }
    
    return(       
         
            <Card style={{margin: "25px"}}>
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
                </Card.Content>
                <div className="ui two buttons">
                    <Button 
                    fluid
                    onClick={() =>  {                        
                        history.push(`/note/edit/${id}`)
                        props.setEditNote({content, title, id})
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