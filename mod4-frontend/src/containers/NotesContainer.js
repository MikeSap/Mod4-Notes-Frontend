import Note from '../components/Note'
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'

const NotesContainer = (props) => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        setNotes({
            ...props.notes
        })
    }, [props.notes])

    return ( 
        <div>
            {props.notes.map(note => <Note {...note}/>)}
        </div>
        );
}
 
const readAccess = (state) => {
   return {
       notes: state.notes
   }
}

export default connect(readAccess)(NotesContainer);