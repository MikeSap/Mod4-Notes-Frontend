import history from '../history'

export const login = (user) => {
    
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/login`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
            if (user.errors) {
            dispatch({type: "LOGIN_ERROR", errors: user.errors})
            history.push('/login')
            } else {
            dispatch({ type: "LOGGED_IN", user })
            localStorage.setItem("token", user.jwt)           
            history.push('/notes')
            }
        })
    }
}

export const autoLogin = (user) => {

    return dispatch => {
        dispatch({type:"LOGIN"})

        const token = localStorage.getItem("token")
        
        if(token){
            fetch('http://localhost:3000/auto_login', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(resp => resp.json())
            .then(user => {
                dispatch({type:"AUTO_LOG_IN", user})            })
          } else if (!window.location.href.includes('/signup')) {
            history.push('/login')
            dispatch({type:"AUTO_LOGIN_ERROR"}) 
          } else {
              dispatch ({ type: "SIGUP_PAGE" })
          }
    }
}

export const logout = () => {
    window.localStorage.removeItem("token")
    return dispatch => {
        dispatch({
        type: 'LOGOUT',
        username: "",
        id: ""
        })
    history.push('/login')
    }
}
export const signup = (user) => {
    return (dispatch) => {
        dispatch({type:"LOGIN"})

        fetch(`http://localhost:3000/users`,{ 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
         })
         .then(resp => resp.json())
         .then(user => {
             if(user.errors) {
             dispatch({type: "LOGIN_ERROR", errors: user.errors})
             history.push('/signup')
             } else {
             dispatch({ type: "LOGGED_IN", user })
             localStorage.setItem("token", user.jwt)
             history.push('notes')
             }
         })
    }
}

export const newNote = (note) => {
    return (dispatch) => {

        dispatch({ type: "POSTING_NOTE" })
        const data = new FormData()
        Object.keys(note).forEach((key, value) => {
            data.append(key, note[key])
        })
        
        fetch(`http://localhost:3000/notes`,{ 
            method: "POST",
            headers: {
            },
            body: data
         })
         .then(resp => resp.json())
         .then(postedNote => {
             if(postedNote.errors){
                dispatch({ type: "NOTE_ERROR", note: postedNote.errors})
                history.push('/notes/new')
             } else {
                dispatch({ type: "NEW_NOTE", note: postedNote})
             }
         })
    }
}

export const editNote = (note) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })

        const data = new FormData()
        Object.keys(note).forEach((key, value) => {
            data.append(key, note[key])
        })
        
        fetch(`http://localhost:3000/notes/${note.note_id}`,{ 
            method: "PATCH",
            headers: {
            },
            body: data
         })
         .then(resp => resp.json())
         .then(editedNote => {
            if(editedNote.errors){
                history.push(`/note/edit/${note.note_id}`)
                dispatch({ type: "NOTE_ERROR", note: editedNote.errors})
             } else {
                dispatch({ type: "EDIT_NOTE", note: editedNote})
             }
         })
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        dispatch({ type: "POSTING_NOTE" })
        
        fetch(`http://localhost:3000/notes/${id}`,{ method: "DELETE" })
         .then(resp => resp.json())
         .then(delNote => {
             dispatch({ type: "DELETE_NOTE", noteId: delNote.deletedNote})
         })
    }
}

export const setEditNote = (note) => {
    return {
        type: "SET_EDIT_NOTE",
        note
    }
}

export const clearEditNote = (note) => {
    return {
        type: "CLEAR_EDIT_NOTE",
    }
}

export const setShowNote = (note) => {
    return {
        type: "SET_SHOW_NOTE",
        note
    }
}

export const clearShowNote = (note) => {
    return {
        type: "CLEAR_SHOW_NOTE",
    }
}