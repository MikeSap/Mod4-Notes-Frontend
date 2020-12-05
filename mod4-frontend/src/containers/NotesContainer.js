import Note from '../components/Note'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import { useHistory } from "react-router";
import React from 'react'

const NotesContainer = (props) => {

    const history = useHistory()
    const location = history.location.pathname

    return ( 
        <Card.Group centered>

            {location.includes(props.showNote.id) ? <Note {...props.showNote} key={props.showNote.id}/>
            :
            props.notes.map(note => <Note {...note} key={note.id}/>)}
        </Card.Group>
    );
}
 
const readAccess = (state) => {
   return {
       notes: state.notes,
       loading: state.loading,
       showNote: state.showNote
   }
}

export default connect(readAccess)(NotesContainer);