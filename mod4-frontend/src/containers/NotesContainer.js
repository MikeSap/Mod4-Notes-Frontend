import Note from '../components/Note'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import React from 'react'

const NotesContainer = (props) => {

    return ( 
        <Card.Group centered>
            {props.notes.map(note => <Note {...note} key={note.id}/>)}
        </Card.Group>
    );
}
 
const readAccess = (state) => {
   return {
       notes: state.notes.notes,
       loading: state.notes.loading
   }
}

export default connect(readAccess)(NotesContainer);