import Note from '../components/Note'
import { connect } from 'react-redux'
import { Card, Container, Pagination, Segment } from 'semantic-ui-react'
import { useHistory } from "react-router";
import React from 'react'

const NotesContainer = (props) => {

    const history = useHistory()
    const location = history.location.pathname
    let notes = [...props.notes]

    const pageChange = (e) => {
        debugger
    }
    return ( 
        
        <Container>            
            <Card.Group centered>
                {location.includes(props.showNote.id) ? <Note {...props.showNote} key={props.showNote.id}/>
                :
                notes.map(note => <Note {...note} key={note.id}/>)}                
            </Card.Group>
            {location.includes(props.showNote.id) ? null :
            <Segment textAlign='center'>               
                <Pagination
                    defaultActivePage={1}
                    totalPages={Math.floor(props.notes.length/12) + 1}
                    onPageChange={pageChange}
                    />
            </Segment>}        
        </Container>
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