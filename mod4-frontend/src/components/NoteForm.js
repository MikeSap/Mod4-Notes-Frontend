import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            note: ""
         }
    }
    render() { 
        return ( 
            <div>
                Note Form
            </div>
         );
    }
}
 
export default NoteForm;