import Note from '../components/Note'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import React, { useEffect } from 'react'

const NotesContainer = (props) => {

    return ( 
        <Card.Group>
            {props.notes.map(note => <Note {...note}/>)}
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