import React, { Component } from 'react'
import Note from '../components/Note'

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: []
         }
    }

    componentDidMount(){
        // fetch
        this.setState({
            // set state to return of fetch, all notes from api
            notes: [{content: "Note1", id: 1}, {content: "Note2", id: 2}]
        })
    }

    render() { 
        return ( 
            <div>
                {this.state.notes.map(note => <Note {...note}/>)}
            </div>
         );
    }
}
 
export default NotesContainer;