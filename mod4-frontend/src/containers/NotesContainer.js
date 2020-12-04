import Note from '../components/Note'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'

const NotesContainer = (props) => {

    // const [notes, setNotes] = useState([])

    useEffect(() => {        
    }, [props.notes])

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