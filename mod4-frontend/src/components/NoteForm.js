import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { newNote, editNote } from '../actions/index'
import { useLocation, useHistory } from "react-router";
import { Button, Form } from 'semantic-ui-react'

const NoteForm = (props) => {
    
    const [formData, setFormData] = useState({title:"", content: ""})
    const location = useLocation()
    const history = useHistory()

    // Find a way to clear editedNote when url id does not match props?
    useEffect(() => {
        setFormData ({
          title: props.editedNote.title,
          content: props.editedNote.content
        })
    }, [props.editedNote])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(location.pathname.includes("edit")){
        let note = {...formData, user_id: props.userId, note_id:props.editedNote.id}
        props.editNote(note)
        }else if (location.pathname.includes("new")){
        let note= {...formData, user_id: props.userId}
        props.newNote(note)
        }
        setFormData({
          title: '',
          content: ''
        })
         history.push('/notes')
      }
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

        return ( 
          <Form onSubmit={handleSubmit}>
            {location.pathname.includes("edit")? <label>edit note</label> :  <label>add note</label> }
              <Form.Field>
                <input type="text" name="title" placeholder="title" onChange={handleChange} value={formData.title}/>
              </Form.Field>
              <Form.Field>
              <input type="text" name="content" placeholder="content" onChange={handleChange} value={formData.content}/>
              </Form.Field>
              <Button type="submit">Submit</Button>
          </Form>
        );
}

const readAccess = (state) => {
  return {
    userId: state.login.user.id,
    editedNote: state.notes.editedNote
  }
}

export default connect(readAccess, {newNote, editNote} )(NoteForm);